import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default class StationCard extends React.Component {
    constructor() {
        super()
        this.displayName = 'StationCard'
    }

    setStream() {}

    render() {
        var stationObj = this.props.station
        var genres = stationObj.genres
        return (
            <div className="station-card">
                {/*<Link params={{callsign}} to="station">*/}
                <div className="logo">
                    <img src={stationObj.logo} draggable="false" />
                </div>
                <div className="card-title">
                    <div>
                        <div className="name">{stationObj.name}</div>
                        <div className="details">{`${stationObj.city}, ${
                            stationObj.country_code
                        }`}</div>
                    </div>
                    {/*</Link>*/}
                </div>
                <div className="options-wrapper">
                    <button className="options-button" title={`Options for ${stationObj.name}`}>
                        &#x22ee;
                    </button>
                </div>
                <div className="button-wrapper">
                    <div className="button-border" />
                    <button
                        onClick={this.setStream}
                        title={`Play ${stationObj.name}`}
                        className="card-button">
                        <Icon name="play" />
                    </button>
                </div>
            </div>
        )
    }
}
StationCard.propTypes = {
    station: PropTypes.object.isRequired
}
{
    /*<Card>
          <CardImg top src={stationObj.logo} alt="Card image cap"/>
          <CardBody>
            <CardTitle>{stationObj.name}</CardTitle>
            <CardSubtitle>{`${stationObj.city}, ${stationObj.country_code}`}</CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of
              the card's content.
            </CardText>
            <Button onClick={this.setStream} title={`Play ${stationObj.name}`}>
              <Icon name="play"/>
            </Button>
          </CardBody>
        </Card>*/
}
