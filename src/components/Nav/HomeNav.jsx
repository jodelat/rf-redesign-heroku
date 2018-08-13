import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Scroll from 'react-scroll'
import styled from 'styled-components'
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

const JustifiedNav = styled(Nav)`
    display: flex;
    justify-content: space-between;
`

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
                                        {this.props.user.token && <Link to="/home" />}
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
                    <JustifiedNav navbar>
                        <NavItem className="nav-links">
                            <Link to="/user" style={{ color: 'white' }}>
                                Dashboard
                            </Link>
                        </NavItem>
                        <NavItem className="nav-links">
                            <Link to="/" style={{ color: 'white' }}>
                                Browse
                            </Link>
                        </NavItem>
                        <NavItem className="nav-links">
                            <Link to="/search" style={{ color: 'white' }}>
                                Search
                            </Link>
                        </NavItem>

                        <NavItem disabled className="brand-logo-item d-none d-md-block" href="#">
                            <Media
                                object
                                data-src="img/page-1.png"
                                srcSet="img/page-1@2x.png 2x, img/page-1@3x.png 3x"
                            />
                        </NavItem>
                        <NavItem className="nav-links">
                            <Link
                                to={''}
                                onClick={() => {
                                    this.open('1')
                                }}
                                style={{ color: 'white' }}>
                                Login
                            </Link>
                        </NavItem>
                        <NavItem className="nav-links">
                            <Link
                                to={''}
                                onClick={() => {
                                    this.open('2')
                                }}
                                style={{ color: 'white' }}>
                                Register
                            </Link>
                        </NavItem>
                        <NavItem className="nav-links">
                            <Link to="/" style={{ color: 'white' }}>
                                Settings
                            </Link>
                        </NavItem>
                    </JustifiedNav>
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

// import React, { Component } from 'react'
// import {
//     Navbar,
//     NavbarBrand,
//     NavbarNav,
//     NavbarToggler,
//     Collapse,
//     NavItem,
//     NavLink,
//     Dropdown,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem
// } from 'mdbreact'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'

// const StyledNavbarBrand = styled(Link)`
//     align-self: center !important;
// `

// class HomeNav extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             collapse: false,
//             isWideEnough: false,
//             dropdownOpen: false
//         }
//         this.onClick = this.onClick.bind(this)
//         this.toggle = this.toggle.bind(this)
//     }

//     onClick() {
//         this.setState({
//             collapse: !this.state.collapse
//         })
//     }

//     toggle() {
//         this.setState({
//             dropdownOpen: !this.state.dropdownOpen
//         })
//     }

//     render() {
//         return (
//             <Navbar color="indigo" dark expand="md" scrolling>
//                 <StyledNavbarBrand to="/" className="navbar-brand">
//                     <strong>RadioFlag</strong>
//                 </StyledNavbarBrand>
//                 {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
//                 <Collapse isOpen={this.state.collapse} navbar>
//                     <NavbarNav left>
//                         <NavItem>
//                             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//                                 <DropdownToggle nav caret>
//                                     Browse
//                                 </DropdownToggle>
//                                 <DropdownMenu>
//                                     <DropdownItem href="#">Action</DropdownItem>
//                                     <DropdownItem href="#">Another Action</DropdownItem>
//                                     <DropdownItem href="#">Something else here</DropdownItem>
//                                     <DropdownItem href="#">Something else here</DropdownItem>
//                                 </DropdownMenu>
//                             </Dropdown>
//                         </NavItem>
//                         <NavItem>
//                             <form className="form-inline md-form mt-0">
//                                 <input
//                                     className="form-control mr-sm-2 mb-0 text-white"
//                                     type="text"
//                                     placeholder="Search"
//                                     aria-label="Search"
//                                 />
//                             </form>
//                         </NavItem>
//                     </NavbarNav>
//                     <NavbarNav right>
//                         <NavItem>
//                             <NavLink to="#">Login</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink to="#">Sign Up</NavLink>
//                         </NavItem>
//                     </NavbarNav>
//                 </Collapse>
//             </Navbar>
//         )
//     }
// }

// export default HomeNav
