import { List } from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import VenueListItem from '../VenueListItem/VenueListItem'

const VenuesList = (props) => {
  const venueItems = props.venues.map((venue, index) => {
    return (
      <VenueListItem
        key={index}
        venue={venue.venue}
        onVenueSelect={props.onVenueSelect}
      />
    )
  })

  return (
    <MuiThemeProvider>
      <div className="venues-list">
        <List className="venues-list__group">
          {venueItems}
        </List>
      </div>
    </MuiThemeProvider>
  )
}

export default VenuesList
