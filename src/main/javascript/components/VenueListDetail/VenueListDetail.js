import '../../../resources/styles/components/VenueListDetail/VenueListDetail.css'
import React from 'react'

const VenueListDetail = ({venue}) => {
  if (!venue) {
    return (
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    )
  }

  const venueAddress = venue.location.formattedAddress.map((line, index) => {
    return (<div key={index}>{line}</div>)
  })
  const venueDescription = venue.description ? venue.description : ''
  const venueImageUrl = venue.bestPhoto.prefix + venue.bestPhoto.width + 'x' + venue.bestPhoto.height + venue.bestPhoto.suffix
  const venueName = venue.name
  const venueUrl = venue.url ? venue.url : venue.canonicalUrl
  const venueUrlButtonLabel = `Visit ${venueName}`

  return (
    <div className="venue-list-detail">
      <div className="venue-list-detail__card">
        <div className="venue-list-detail__media">
          <img className="venue-list-detail__image" src={venueImageUrl} alt={venueName} />
        </div>
        <div className="venue-list-detail__text">
          <span className="venue-list-detail__text-title">{venueName}</span>
          <span className="venue-list-detail__text-address">{venueAddress}</span>
        </div>
        <div className="venue-list-detail__description">
          {venueDescription}
        </div>
        <div className="venue-list-detail__actions">
          <a
            className="venue-list-detail__actions-button"
            href={venueUrl}
            target="_blank"
          >
            {venueUrlButtonLabel}
          </a>
        </div>
      </div>
    </div>
  )
}

export default VenueListDetail
