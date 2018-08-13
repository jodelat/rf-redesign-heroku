import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const UniversalFooter = () => {
    return (
        <footer>
            <div className="clearfix footer-social mt-5">
                <Col md={6} className="justify-content-md-start d-none d-md-inline-flex">
                    <span className="pr-md-3">
                        <Link to="/">Home</Link>
                    </span>
                    <span className="pr-md-3">
                        <Link to="/submitstations">Streaming</Link>
                    </span>
                    <span className="pr-md-3">
                        <Link to="/about">About</Link>
                    </span>
                    <span>
                        <Link to="/contact">Contact</Link>
                    </span>
                </Col>
                <Col
                    md={6}
                    sm={12}
                    xs={12}
                    className="d-inline-flex justify-content-md-end justify-content-center">
                    <a href="https://plus.google.com/116954913858829066650" target="_blank">
                        <i className="fa fa-google-plus fa-circle-thinner" aria-hidden="true" />
                    </a>
                    <a href="https://www.facebook.com/radioflag/" target="_blank">
                        <i className="fa fa-facebook-f fa-circle-thinner" aria-hidden="true" />
                    </a>
                    <a href="https://www.linkedin.com/company/radioflag/" target="_blank">
                        <i className="fa fa-linkedin fa-circle-thinner" aria-hidden="true" />
                    </a>
                    <a href="https://twitter.com/radioflag?lang=en" target="_blank">
                        <i className="fa fa-twitter fa-circle-thinner" aria-hidden="true" />
                    </a>
                    <a href="https://www.instagram.com/radioflag/" target="_blank">
                        <i className="fa fa-instagram fa-circle-thinner" aria-hidden="true" />
                    </a>
                </Col>
            </div>
        </footer>
    )
}

export default UniversalFooter
