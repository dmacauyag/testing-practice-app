import React from 'react'

const VenueListDetail = ({venue}) => {
  if (!venue) {
    return (
      <div>VenueListDetail Placeholder...</div>
    )
  }

  const venueAddress = venue.location.formattedAddress.map((line) => {
    return (<div>{line}</div>)
  })
  const venueDescription = venue.description ? venue.description : ''
  const venueImageUrl = venue.bestPhoto.prefix + venue.bestPhoto.width + 'x' + venue.bestPhoto.height + venue.bestPhoto.suffix
  const venueName = venue.name
  const venueUrl = venue.url ? venue.url : venue.canonicalUrl

  return (
    <div className="venue-list-detail">
      <div className="venue-list-detail__image">
        <img src={venueImageUrl} alt={venueName} />
      </div>
      <div className="venue-list-detail__information">
        <div className="venue-list-detail__information--name">{venueName}</div>
        <div>{venueDescription}</div>
        <div className="venue-list-detail__information--address">
          {venueAddress}
        </div>
        <a target="_blank" href={venueUrl}>Visit {venueName}</a>
      </div>
    </div>
  )
}

export default VenueListDetail
