import React from 'react'
import styled from 'styled-components'

import Slider from 'react-slick'
import BaseSlider from './BaseSlider'
import { Link } from 'react-router-dom'
import { Media } from 'reactstrap'

export default class PlaylistSlider extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Playlist</h3>
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
            </React.Fragment>
        )
    }
}

const data = ['playlist1', 'playlist2', 'playlist3', 'playlist4', 'playlist5']

const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    accessibility: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                slidesToScroll: 1,
                swipe: true,
                swipeToSlide: true,
                centerPadding: '80px'
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                centerMode: false,
                slidesToScroll: 2,
                swipe: true,
                swipeToSlide: true,
                centerPadding: '10px'
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 4,
                centerMode: false,
                slidesToScroll: 1,
                swipe: true,
                swipeToSlide: true,
                touchMove: true,
                focusOnSelect: true
            }
        }
    ]
}
