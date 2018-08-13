import React from 'react'
import { Icon } from 'react-fa'
import PropTypes from 'prop-types'
import { Button, Row, Col, Collapse, Media } from 'reactstrap'

class Content extends React.Component {
    state = { open: window.innerWidth > 768 ? true : false }

    constructor(props) {
        super(props)
        this.handleResize = this.handleResize.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    handleResize(event) {
        this.setState({ open: window.innerWidth > 768 ? true : false })
    }

    render() {
        return (
            <Row className="content-container py-md-3">
                <Col md={3} className="d-none d-md-block">
                    <Media
                        object
                        className="rounded img-fluid img-thumbnail"
                        src="https://cdn.careersinmusic.com/wp-content/uploads/2014/11/radio_dj.jpg"
                    />
                </Col>
                <Col md={9} xs={12}>
                    <Button
                        className="d-block d-md-none w-100 mx-0"
                        onClick={() => this.setState({ open: !this.state.open })}
                        active={this.state.open}
                        color="dark">
                        <span className="float-left">{this.props.data.header}</span>
                        <Icon
                            name={this.state.open ? 'chevron-down' : 'chevron-right'}
                            className="mt-0 float-right"
                        />
                    </Button>
                    <h3 className="d-none d-md-block">{this.props.data.header}</h3>
                    <Collapse isOpen={this.state.open} className="px-3 px-md-0">
                        <p className="text-justify">{this.props.data.text}</p>
                    </Collapse>
                </Col>
            </Row>
        )
    }
}

Content.propTypes = {
    data: PropTypes.object.isRequired
}
export default Content
