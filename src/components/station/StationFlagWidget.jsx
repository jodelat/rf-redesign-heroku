import React from 'react'
import { Icon } from 'react-fa'
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Media,
    Button,
    Jumbotron,
    Collapse,
    Input
} from 'reactstrap'

export default class StationPage extends React.Component {
    constructor() {
        super()
        this.displayName = 'StationPage'
    }


        render() {
            var stationObj = this.props.station
            return (
                <div className="station-page">
                  <Container fluid={true} className="p-0">
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
