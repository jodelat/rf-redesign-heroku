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
    Input,
    Card,
    CardImg
} from 'reactstrap'

export default class StationPage extends React.Component {
    constructor() {
        super()
        this.displayName = 'StationPage'
    }

    render() {
        var stationObj = this.props.station
        var flags = this.props.flags
        return (
          <div className="station-page">
            <Container fluid={true} className="p-0">
            <Row noGutters={true}>
              {flags.result.map(result => (
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div style={{borderStyle:'solid', borderColor:'#282A67'}}>
                      <Row noGutters={true}>
                      <Col lg={2} md={2} sm={2} xs={2}>
                      <Card style={{width:'50px'}}>
                      <CardImg src={result.author.avatar} style={{height:'50px', width:'50px'}}/>
                      </Card>
                      </Col>
                      <Col lg={10} md={10} sm={10} xs={10}>
                      <p style={{fontWeight:'bold'}}>{`${result.author.username}`}</p>
                      </Col>
                      </Row>
                      <p>{`${result.message}`}</p>
                    </div>
                </Col>
                ))}
            </Row>
            <br/>
            <br/>
            <br/>
            </Container>
          </div>
      )
  }
}
