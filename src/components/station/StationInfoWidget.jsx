import React from 'react'
import { Icon } from 'react-fa'
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    Label,
    Media,
    Button,
    Collapse,
} from 'reactstrap'

export default class StationPage extends React.Component {
  togglePlay() {
  var audio = document.getElementById("play")
  var button = document.getElementById("playbutton")
  var pause = document.getElementById("pausebutton")
  if(audio.paused)
  {audio.play()
    button.style.display = "none"
    pause.style.display= "inline"
  }
    else
    {audio.pause()
      button.style.display = "inline"
      pause.style.display= "none"
    };
}
    constructor() {
        super()
        this.displayName = 'StationPage'
        this.togglePlay = this.togglePlay.bind(this)
    }


        render() {
            var stationObj = this.props.station
            var favoriteObj = this.props.favorite
            return (
                <div className="station-page">
                    <Container fluid={true} className="p-0">
                    <Row noGutters={true}>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Card
                                className="station-background"
                                style={{
                                    height: '120px',
                                    width: '100%',
                                    backgroundColor: '#282A67'
                                }}>
                                <button
                                    onClick={this.share}
                                    className="card-button"
                                    style={{ backgroundColor: 'transparent', border: 'none' }}>
                                    <Icon
                                        name="share-alt"
                                        style={{
                                            color: 'white',
                                            position: 'relative',
                                            left: '45%'
                                        }}
                                    />
                                </button>
                                <CardImg
                                    src={stationObj.logo}
                                    style={{ height: '150px', width: '35%', marginLeft:'32%' }}
                                    draggable="false"
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <audio
                                id="play"
                                src={stationObj.streams[0].stream}
                                style={{
                                    display:'none'
                                }}>
                                </audio>
                                <button
                                    onClick={this.togglePlay}
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#282A67',
                                        color: 'white',
                                        borderColor: '#483D8B'
                                    }}>
                                    <Icon id="playbutton" name="play" />
                                    <Icon id="pausebutton" name="pause" style={{display:'none'}} />
                                </button>

                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <button
                                onClick={favoriteObj}
                                className="card-button"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#282A67',
                                    color: 'white',
                                    borderColor: '#483D8B'
                                }}>
                                <Icon name="star" />
                            </button>
                        </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="station-description">
                                <h5>{`${stationObj.genres[0]}`}</h5>
                                <p>{`${stationObj.description}`}</p>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </div>
            )
        }
    }
