import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import Scroll from 'react-scroll'
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    Media,
    Modal,
    ModalHeader,
    ModalBody,
    TabContent,
    TabPane,
    NavLink
} from 'reactstrap'
import { FadeLoader } from 'react-spinners'
import { logout, getCurrentUser } from '../../store/user/actions'
import { RegisterForm, LoginForm } from 'rf-components'

const Link = Scroll.Link

class NavigationBar extends React.Component {
    state = {
        showModal: false,
        shrinknav: false,
        showLoading: false,
        activeTab: '1',
        isOpen: false
    }

    constructor(props) {
        super(props)
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.toggle = this.toggle.bind(this)
        this.getModal = this.getModal.bind(this)
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            })
        }
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        if (this.props.transparent) {
            this.setState({ shrinknav: window.innerWidth < 768 ? false : true })
            window.addEventListener('scroll', this.handleScroll)
            window.addEventListener('resize', this.handleScroll)
        }
    }

    componentWillUnmount() {
        if (this.props.transparent) {
            window.removeEventListener('scroll', this.handleScroll)
            window.removeEventListener('resize', this.handleScroll)
        }
    }

    close() {
        this.setState({
            showModal: false,
            showLoading: false
        })
    }

    open(activeTab = '1') {
        this.setState({
            showModal: true,
            showLoading: false,
            isOpen: false,
            activeTab
        })
    }
    handleScroll(event) {
        this.setState({ shrinknav: !(window.scrollY > 100 || window.innerWidth < 768) })
    }

    getModal() {
        if (!this.props.user.isLoggedIN) {
            return (
                <Modal
                    isOpen={this.state.showModal}
                    toggle={this.close}
                    id="auth_modal"
                    className="rf-modal">
                    <ModalHeader toggle={this.close} />
                    <ModalBody>
                        <div>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={`${
                                            this.state.activeTab === '1' ? 'active' : ''
                                        }`}
                                        onClick={() => {
                                            this.toggle('1')
                                        }}>
                                        {' '}
                                        Sign In{' '}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={`${
                                            this.state.activeTab === '2' ? 'active' : ''
                                        }`}
                                        onClick={() => {
                                            this.toggle('2')
                                        }}>
                                        {' '}
                                        Join Us{' '}
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab} id="signinSignupPills">
                                <TabPane tabId="1">
                                    <LoginForm>
                                        {this.props.user.token && <RouterLink to="/home" />}
                                    </LoginForm>
                                </TabPane>
                                <TabPane tabId="2">
                                    <RegisterForm />
                                </TabPane>
                            </TabContent>
                        </div>
                    </ModalBody>
                    <div className={this.state.showLoading ? 'overlay' : ''} />
                    <div className="sweet-loading">
                        <FadeLoader color={'#36D7B7'} loading={this.state.showLoading} />
                    </div>
                </Modal>
            )
        }
    }

    render() {
        return (
            <Navbar
                expand="md"
                fixed="top"
                dark
                className={`${this.state.shrinknav ? 'transparent' : ''}`}
                id="mainNav">
                <NavbarToggler
                    onClick={() => {
                        this.setState({ isOpen: !this.state.isOpen })
                    }}
                />
                <NavbarBrand className="d-block d-md-none" href="#">
                    <Media
                        object
                        data-src="img/logo.png"
                        srcSet="img/logo@2x.png 2x,img/logo@3x.png 3x"
                        alt="Brand"
                    />
                </NavbarBrand>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav navbar>
                        <NavItem className="nav-links">
                            {this.props.universal ? (
                                <RouterLink to="/" style={{ color: 'white' }}>
                                    HOME
                                </RouterLink>
                            ) : (
                                <Link
                                    activeClass="active"
                                    to="intro"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => {
                                        this.setState({ isOpen: false })
                                    }}>
                                    HOME
                                </Link>
                            )}
                        </NavItem>
                        <NavItem className="nav-links">
                            {this.props.universal ? (
                                <RouterLink to="/" style={{ color: 'white' }}>
                                    PRODUCT & SERVICES
                                </RouterLink>
                            ) : (
                                <Link
                                    activeClass="active"
                                    to="prod-services"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => {
                                        this.setState({ isOpen: false })
                                    }}>
                                    {' '}
                                    PRODUCT & SERVICES
                                </Link>
                            )}
                        </NavItem>

                        <NavItem className="nav-links">
                            {this.props.universal ? (
                                <RouterLink to="/" style={{ color: 'white' }}>
                                    DOWNLOAD
                                </RouterLink>
                            ) : (
                                <Link
                                    activeClass="active"
                                    to="app-download"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => {
                                        this.setState({ isOpen: false })
                                    }}>
                                    DOWNLOAD
                                </Link>
                            )}
                        </NavItem>
                        <NavItem disabled className="brand-logo-item d-none d-md-block" href="#">
                            <Media
                                object
                                data-src="img/page-1.png"
                                srcSet="img/page-1@2x.png 2x, img/page-1@3x.png 3x"
                            />
                        </NavItem>
                        <NavItem className="nav-links">
                            {this.props.universal ? (
                                <RouterLink to="/" style={{ color: 'white' }}>
                                    SOCIAL RADIO
                                </RouterLink>
                            ) : (
                                <Link
                                    activeClass="active"
                                    to="social-radio"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => {
                                        this.setState({ isOpen: false })
                                    }}>
                                    SOCIAL RADIO
                                </Link>
                            )}
                        </NavItem>
                        <NavItem className="nav-links">
                            {this.props.universal ? (
                                <RouterLink to="/" style={{ color: 'white' }}>
                                    OUR VISION
                                </RouterLink>
                            ) : (
                                <Link
                                    activeClass="active"
                                    to="our-vision"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => {
                                        this.setState({ isOpen: false })
                                    }}>
                                    OUR VISION
                                </Link>
                            )}
                        </NavItem>
                        <NavItem className="nav-links">
                            {this.props.universal ? (
                                <RouterLink to="/" style={{ color: 'white' }}>
                                    RADIOSTARS
                                </RouterLink>
                            ) : (
                                <Link
                                    activeClass="active"
                                    to="radio-stars"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => {
                                        this.setState({ isOpen: false })
                                    }}>
                                    RADIOSTARS
                                    <hr />
                                </Link>
                            )}
                        </NavItem>
                        <NavItem className="nav-links d-block d-md-none">
                            <Link
                                activeClass="active"
                                to={''}
                                offset={-200}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    this.open('1')
                                }}>
                                Login
                            </Link>
                        </NavItem>
                        <NavItem className="nav-links d-block d-md-none">
                            <Link
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                duration={500}
                                to={''}
                                onClick={() => {
                                    this.open('2')
                                }}>
                                Register
                            </Link>
                        </NavItem>
                    </Nav>
                    <a onClick={() => this.open()} className="d-none d-md-block user-register">
                        SIGN IN/Register
                    </a>
                    {this.getModal()}
                </Collapse>
            </Navbar>
        )
    }
}

NavigationBar.propTypes = {
    user: PropTypes.shape({}).isRequired,
    logout: PropTypes.func.isRequired,
    getCurrentUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({ user: state.user })
export default connect(mapStateToProps, { logout, getCurrentUser })(NavigationBar)
