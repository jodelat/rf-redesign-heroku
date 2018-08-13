import React from 'react'
import { Icon } from 'react-fa'
import {
    Media,
    Button,
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
    constructor() {
        super()
        this.displayName = 'StationPage'
    }

    goBack() {
      window.history.back()
    }

        render() {
            var stationObj = this.props.station
            return (
                    <Navbar>

                        <button
                            onClick={this.goBack}
                            className="card-button"
                            style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <Icon name="angle-left" style={{ color: 'white' }} />
                        </button>

                        <div className="station-name" style={{ textAlign: 'center' }}>{`${
                            stationObj.name
                        }`}</div>
                        <Nav className="ml-auto" navbar />
                    </Navbar>
          )
        }
    }
