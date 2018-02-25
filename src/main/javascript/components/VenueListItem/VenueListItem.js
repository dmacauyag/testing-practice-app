import React from 'react'

const VenueListItem = ({venue, onVenueSelect}) => {
  return (
    <li
      className='venues-list__item'
      onClick={() => onVenueSelect(venue.id)} >
      {venue.name}
    </li>
  )
}

export default VenueListItem
