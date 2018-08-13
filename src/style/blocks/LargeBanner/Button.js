import React from 'react'
import styled from 'styled-components'
import { Button } from 'reactstrap'

const StyledButton = styled(Button)`
    width: 150px;
    height: 50px;
    color: #fff !important;
    background: ${props => {
        if (props.transparent) return `transparent`
        if (props.gradient) return `linear-gradient(to right,#482be0,#9198e5)`
    }};
`

export default StyledButton
