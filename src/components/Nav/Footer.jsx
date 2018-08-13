import React, { Component } from 'react'
import {
    Container,
    Col,
    Media,
    Modal,
    ModalHeader,
    ModalBody,
    Nav,
    NavLink,
    NavItem
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { RegisterForm, LoginForm } from 'rf-components'

class Footer extends Component {
    state = { showModal: false }

    constructor(props) {
        super(props)
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <footer>
                <div className="radio-dj-register view text-center">
                    <Media
                        object
                        src="/img/bg-city-gray.png"
                        className="img-fluid d-none d-md-block"
                        width="100%"
                    />
                    <div className="mask">
                        <Container>
                            <h4>
                                Exclusive Website Access for Radio <br /> DJs and Presenters
                                <hr />
                            </h4>
                            <p>
                                If already registered, <a onClick={this.toggleModal}>SIGN IN</a>
                            </p>
                            <p>
                                Not registered yet? Become a verified Radio DJ / Presenter user here
                            </p>
                            <Modal
                                isOpen={this.state.showModal}
                                toggle={this.toggleModal}
                                id="signin_modal"
                                className="rf-modal">
                                <ModalHeader className="mt-3 ml-3" toggle={this.toggleModal}>
                                    Login
                                </ModalHeader>
                                <ModalBody>
                                    <LoginForm />
                                </ModalBody>
                            </Modal>
                            <RegisterForm inline={true} />
                        </Container>
                    </div>
                </div>
                <div className="footer-social py-4 py-md-0">
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
}

export default Footer
