import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Navbar } from 'reactstrap'
import { withRouter, Link } from 'react-router-dom'

const StyledUserNavbar = styled(Navbar)`
    display: flex;
    height: 75px;
    justify-content: space-between;
`
class UserNavbar extends React.Component {
    render() {
        const { username } = this.props
        return (
            <StyledUserNavbar color="faded" light expand="m">
                <i className="fa fa-chevron-left fa-2x" aria-hidden="true" />
                <h2>@{username}</h2>
                <i className="fa fa-search fa-2x" aria-hidden="true" />
            </StyledUserNavbar>
        )
    }
}

UserNavbar.propTypes = {
    username: PropTypes.string.isRequired
}

export default withRouter(UserNavbar)
