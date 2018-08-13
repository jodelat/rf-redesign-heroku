import React from 'react'

import { Container } from 'reactstrap'
import LargeBanner from '../../style/blocks/LargeBanner/index'

const Banner = props => {
    return (
        <LargeBanner xs={12} gradient={'true'}>
            <Container>
                <LargeBanner.Title>TOP 50 BILLBOARD SONGS</LargeBanner.Title>
                <div className="d-flex">
                    <LargeBanner.Button gradient={'true'}>
                        PLAY ALL
                    </LargeBanner.Button>
                    <LargeBanner.Button transparent={'true'} color="primary">
                        + MY LIST
                    </LargeBanner.Button>
                </div>
            </Container>
        </LargeBanner>
    )
}
export default Banner
