import React from 'react'
import styled from 'styled-components'
import { Col } from 'reactstrap'

import Button from './Button'
import Title from './Title'

const LargeBanner = styled(Col)`
    height: 500px;
    background: ${props => props.gradient && `linear-gradient(to right, #2D3EE3, #9198e5)`};
    display: flex;
    flex-direction: column;
    justify-content: center;
`

LargeBanner.Title = Title
LargeBanner.Button = Button

export default LargeBanner
