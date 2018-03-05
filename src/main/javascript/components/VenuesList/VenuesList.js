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
    <div className="venues-list">
      <ul className="venues-list__group">
        {venueItems}
      </ul>
    </div>
  )
}

export default VenuesList
