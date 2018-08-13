import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { HomeNav } from 'rf-components/nav'
import { Col } from 'reactstrap'
import { userProfileActions } from 'store/user-profile/actions'
import { UserNavbar, UserBio, FavoritesSlider, PlaylistSlider } from '../../components/user-profile'
import { logout } from 'store/user/actions'

const UserProfileWrapper = styled.div`
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
`

class UserProfilePage extends Component {
    state = {
        user_stats: null
    }

    componentDidMount() {
        this.props.getUserProfileAction('testuser1')
        const { username } = this.props.user
        this.props.getUserStatsAction(username)
        this.props.getUserFlagsAction(username)
    }

    handleLogout = e => {
        e.preventDefault()
        this.props.logout()
    }

    render() {
        const { user, logout } = this.props
        return (
            <React.Fragment>
                <HomeNav />
                <UserProfileWrapper>
                    <h1 className="text-center">{user.username}</h1>
                    <UserBio user={user} />
                    <Col xs={12} className="my-4">
                        <FavoritesSlider />
                    </Col>
                    <Col xs={12} className="my-4">
                        <PlaylistSlider />
                    </Col>
                    <Col xs={12}>
                        <h2>Flagcast</h2>
                        <form className="form-row">
                            <div>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit">
                                <i className="fa fa-search" />
                            </button>
                        </form>
                    </Col>
                    <a onClick={e => this.props.logout(e)}>Logout</a>
                    <Col xs={12}>{/* <UniversalFooter /> */}</Col>
                </UserProfileWrapper>
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.info,
        userProfile: {
            profile: state.userProfile.profile.data,
            stats: state.userProfile.stats.data,
            flags: state.userProfile.flags.data
        }
    }
}

export default connect(mapStateToProps, { ...userProfileActions, logout })(UserProfilePage)
