import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
    <MuiThemeProvider>
      <div className="venue-list-detail">
        <Card>
          <CardMedia>
            <img src={venueImageUrl} alt={venueName} />
          </CardMedia>
          <CardTitle title={venueName} subtitle={venueAddress} />
          <CardText>{venueDescription}</CardText>
          <CardActions>
            <FlatButton
              label={venueUrlButtonLabel}
              primary={true}
              href={venueUrl}
            />
          </CardActions>
        </Card>
      </div>
    </MuiThemeProvider>
  )
}

export default VenueListDetail
