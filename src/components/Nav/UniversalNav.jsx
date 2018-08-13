import React from 'react'
import { Navbar, Media } from 'reactstrap'
import { Link } from 'react-router-dom'

export default props => (
    <Navbar
        className="d-flex justify-content-center"
        color="faded"
        light
        expand="m "
        style={{ height: '75px' }}>
        <Link to="/" className="d-flex justify-content-center">
            <Media
                object
                data-src="/img/page-1.png"
                srcSet="/img/page-1@2x.png 2x, /img/page-1@3x.png 3x"
            />
        </Link>
    </Navbar>
)
