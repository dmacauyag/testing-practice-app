import React from 'react'
import VenueListItem from '../VenueListItem/VenueListItem'

const VenuesList = (props) => {
  const venueItems = props.venues.map((venue) => {
    return (
      <VenueListItem
        venue={venue.venue}
        key={venue.venue.id}
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
