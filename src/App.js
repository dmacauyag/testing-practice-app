import './App.css'
import axios from 'axios'
import SearchBar from './main/javascript/components/SearchBar/SearchBar'
import VenuesList from './main/javascript/components/VenuesList/VenuesList'
import VenueListDetail from './main/javascript/components/VenueListDetail/VenueListDetail'
import React, { Component } from 'react'

const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REACT_APP_CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const fourSquareVenuesBaseURL = 'https://api.foursquare.com/v2/venues'

let browserLocation = '40.7243,-74.0018'

class App extends Component {
  constructor(props) {
    super(props)

    this.getFourSquareAPIVenues = this.getFourSquareAPIVenues.bind(this)
    this.getFourSquareAPIVenueDetails = this.getFourSquareAPIVenueDetails.bind(this)
    this.getFourSquareAPIRandomVenue = this.getFourSquareAPIRandomVenue.bind(this)
    this.setSelectedVenueState = this.setSelectedVenueState.bind(this)
    this.setBrowserLocation = this.setBrowserLocation.bind(this)
    this.state = {
      venues: [],
      selectedVenue: null
    }
  }

  componentDidMount() {
    this.setBrowserLocation()
    this.getFourSquareAPIRandomVenue()
  }

  setBrowserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        browserLocation = `${position.coords.latitude},${position.coords.longitude}`
      })
    }
  }

  getFourSquareAPIRandomVenue() {
    return axios.get(`${fourSquareVenuesBaseURL}/explore`, {
      params: {
        client_id: `${REACT_APP_CLIENT_ID}`,
        client_secret: `${REACT_APP_CLIENT_SECRET}`,
        near: 'Los Angeles, CA',
        section: 'topPicks',
        v: '20170801',
        limit: 1
      }
    })
    .then((response) => {
      this.getFourSquareAPIVenueDetails(response.data.response.groups[0].items[0].venue.id)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  getFourSquareAPIVenues(query) {
    return axios.get(`${fourSquareVenuesBaseURL}/explore`, {
      params: {
        client_id: `${REACT_APP_CLIENT_ID}`,
        client_secret: `${REACT_APP_CLIENT_SECRET}`,
        ll: `${browserLocation}`,
        query: `${query}`,
        v: '20170801',
        limit: 20
      }
    })
    .then((response) => {
      this.setState({
        venues: response.data.response.groups[0].items
      })
      return response
    })
    .catch((error) => {
      console.error(error)
    })
  }

  getFourSquareAPIVenueDetails(venueId) {
    return axios.get(`${fourSquareVenuesBaseURL}/${venueId}`, {
      params: {
        client_id: `${REACT_APP_CLIENT_ID}`,
        client_secret: `${REACT_APP_CLIENT_SECRET}`,
        v: '20170801',
      }
    })
    .then((response) => {
      this.setSelectedVenueState(response.data.response.venue)
      return response
    })
    .catch((error) => {
      console.error(error)
    })
  }

  setSelectedVenueState(venue) {
    this.setState({
      selectedVenue: venue
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <VenueListDetail
            venue={this.state.selectedVenue}
          />
          <SearchBar
            onSubmitSearch={searchTerm => this.getFourSquareAPIVenues(searchTerm)}
          />
          <VenuesList
            onVenueSelect={venueId => this.getFourSquareAPIVenueDetails(venueId)}
            venues={this.state.venues}
          />
        </div>
      </div>
    )
  }
}

export default App
