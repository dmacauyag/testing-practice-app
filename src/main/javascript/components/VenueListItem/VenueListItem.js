import '../../../resources/styles/components/VenueListItem/VenueListItem.css'
import React from 'react'

const VenueListItem = ({venue, onVenueSelect}) => {
  return (
    <li
      className='venues-list__item'
      onClick={() => onVenueSelect(venue.id)}
    >
      <span className="venues-list__item-name">{venue.name}</span>
    </li>
  )
}

export default VenueListItem
