import React from 'react'
import { Icon } from 'react-fa'
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    Form,
    FormGroup,
    Label,
    Media,
    Button,
    Jumbotron,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input
} from 'reactstrap'

export default class StationPage extends React.Component {
  togglePlay() {
  var audio = document.getElementById("play")
  return audio.paused ? audio.play() : audio.pause();
}
    constructor() {
        super()
        this.displayName = 'StationPage'
        this.togglePlay = this.togglePlay.bind(this)
    }

    render() {
        var stationObj = this.props.station
        return (
            <div className="station-page">
                <Navbar>
                    <button
                        onClick={this.previousPage}
                        className="card-button"
                        style={{ backgroundColor: 'transparent', border: 'none' }}>
                        <Icon name="angle-left" style={{ color: 'white' }} />
                    </button>
                    <div className="station-name" style={{ textAlign: 'center' }}>{`${
                        stationObj.name
                    }`}</div>
                    <Nav className="ml-auto" navbar />
                </Navbar>
                <Container fluid={true} className="p-0">
                    <Row noGutters={true}>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Card
                                className="station-background"
                                style={{
                                    height: '120px',
                                    width: '100%',
                                    backgroundColor: '#191970'
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
                                        backgroundColor: '#191970',
                                        color: 'white',
                                        borderColor: '#483D8B'
                                    }}>
                                    <Icon name="play" />
                                </button>

                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <button
                                onClick={this.favorite}
                                className="card-button"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#191970',
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
                    <Row noGutters={true}>
                        <Form
                            style={{
                                backgroundColor: '#6e2a82',
                                marginRight: '0',
                                width: '100%',
                                position: 'fixed',
                                bottom: '0',
                                borderStyle: 'solid',
                                borderColor: '#6e2a82',
                                borderWidth: '8px'
                            }}>
                            <FormGroup style={{ marginBottom: '0' }}>
                                <Row>
                                    <Col lg={10} md={10} sm={10} xs={10}>
                                        <Input
                                            style={{
                                                width: '102%',
                                                height: '30%',
                                                backgroundColor: 'white',
                                                marginBottom: '0',
                                                marginLeft: '8%'
                                            }}
                                            type="text"
                                            name="flag"
                                            placeholder="Post your Flag..."
                                        />
                                    </Col>
                                    <Col lg={2} md={2} sm={2} xs={2}>
                                        <button
                                            onClick={this.flag}
                                            className="card-button"
                                            style={{
                                                border: 'none',
                                                backgroundColor: 'transparent',
                                                width: '100%'
                                            }}>
                                            <Icon name="flag" style={{ color: 'white' }} />
                                        </button>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}
