import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import { Media } from 'reactstrap'
import Slider from 'react-slick'

const BaseSlider = ({ settings, data }) => (
    <Slider {...settings}>
        {data.map((slide, i) => {
            return (
                <div key={`${slide}${i}`} className="d-flex justify-content-center">
                    <Link to={`/${slide}/${i}`}>
                        <Media
                            object
                            src="https://www.placehold.it/150x150"
                            className="img-fluid z-depth-5"
                            alt={`${slide}`}
                        />
                    </Link>
                </div>
            )
        })}
    </Slider>
)

BaseSlider.propTypes = {
    settings: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
}

export default BaseSlider
