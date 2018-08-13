import React from 'react'
import styled from 'styled-components'

import { Col } from 'reactstrap'

class UserBio extends React.Component {
    state = {
        isDetailedBioVisible: false
    }

    toggleBio = () => {
        this.setState({ isDetailedBioVisible: !this.state.isDetailedBioVisible })
    }

    render() {
        const { user } = this.props
        const { isDetailedBioVisible } = this.state
        if (isDetailedBioVisible) {
            return (
                <Col className="container">
                    <div className="d-flex my-3">
                        <Col xs={3}>
                            <StyledImg
                                className="img-fluid"
                                src={user.avatar}
                                alt="Profile Picture"
                                isDetailedBioVisible={isDetailedBioVisible}
                            />
                        </Col>
                        <Col xs={8}>
                            <h3>{user.fullname ? user.full : 'Unnamed'}</h3>
                            <h3>{user.location ? user.location : 'Some Place'}</h3>
                            <p>{dummyData.description}</p>
                        </Col>
                        <a onClick={() => this.toggleBio()} aria-label="Close">
                            X
                        </a>
                    </div>
                    <StyledStatusBar xs={12} className="d-flex">
                        <div className="d-flex justify-content-start">
                            <IconDetailedBio className="fa fa-star text-center" />
                            <IconDetailedBio className="fa fa-user-circle-o text-center">
                                {user.stats.friends}
                            </IconDetailedBio>
                        </div>
                    </StyledStatusBar>
                </Col>
            )
        }
        return (
            <Col xs={12} className="d-flex justify-content-between mt-2">
                <Col className="d-flex flex-column justify-content-between">
                    <Icon className="fa fa-star" />
                    <div>{user.fullname ? user.full : 'Unnamed'}</div>
                    <div>{user.location ? user.location : 'Location'}</div>
                </Col>
                <Col className="d-flex justify-content-center">
                    <StyledImg
                        className="img-fluid"
                        src="https://www.placehold.it/150x150"
                        src={user.avatar}
                        alt="Profile Picture"
                    />
                </Col>
                <Col className="d-flex flex-column justify-content-between align-items-end">
                    <span>
                        <a onClick={() => this.toggleBio()}>Bio</a>
                    </span>
                    <span>
                        <Icon className="fa fa-user-circle-o">
                            <span className="mx-2">{user.stats.friends}</span>
                        </Icon>
                    </span>
                </Col>
            </Col>
        )
    }
}

export default UserBio

const dummyData = {
    description:
        'Enamel pin VHS literally keytar affogato knausgaard forage fashion axe vinyl banh mi put a bird on it pop-up austin. Try-hard venmo etsy '
}

const StyledImg = styled.img`
    border-radius: ${props => (props.isDetailedBioVisible ? '0rem' : '10rem')};
    transform: scale(${props => (props.isDetailedBioVisible ? 1 : 0.65)});
`

const StyledStatusBar = styled.div`
    border: 3px solid #6e2a82;
`

const Icon = styled(Col)`
    &::before {
        align-self: center;
        font-size: 1.75rem;
    }
`

const IconDetailedBio = styled(Icon)`
    border-right: 3px solid #6e2a82;
    display: flex;
    height: 45px;
    width: 100px;
    justify-content: center;
`
