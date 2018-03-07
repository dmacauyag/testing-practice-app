import { ListItem } from 'material-ui/List'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'

const VenueListItem = ({venue, onVenueSelect}) => {
  return (
    <MuiThemeProvider>
      <ListItem
        className='venues-list__item'
        onClick={() => onVenueSelect(venue.id)} >
        {venue.name}
      </ListItem>
    </MuiThemeProvider>
  )
}

export default VenueListItem
