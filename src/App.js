import React, { Component } from 'react'
import Footer from './main/javascript/components/Footer/footer'
import Header from './main/javascript/components/Header/header'
import './App.css'
import axios from 'axios'

const fourSquareVenuesBaseURL = 'https://api.foursquare.com/v2/venues/'
const CLIENT_ID = 'CCJHDUOWC2UBUZ01HKXPCEY255MVOMTEK44ESR4BQSJGSBLT'
const CLIENT_SECRET = 'L1DW01OZLI54KILXSB4V0SXXZXW5QZX2REWRN0YOEB1CITQF'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      venues: []
    }
  }

  getFourSquareAPIVenues(query) {
    return axios.get(`${fourSquareVenuesBaseURL}/explore`, {
      params: {
        client_id: `${CLIENT_ID}`,
        client_secret: `${CLIENT_SECRET}`,
        ll: '40.7243,-74.0018',
        query: `${query}`,
        v: '20170801',
        limit: 20
      }
    })
    .then((response) => {
      this.setState({
        venues: response.data.response.groups[0].items
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div>Main Content</div>
        <Footer />
      </div>
    );
  }
}

export default App;
