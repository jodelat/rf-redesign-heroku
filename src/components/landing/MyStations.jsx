import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Media } from 'reactstrap'
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact'

import Hr from 'style/elements/hr'
import Section from 'style/elements/section'

const StyledSlider = styled(Slider)`
    ${'' /* height: 200px; */};
`

const Station = styled.div`
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    max-width: 90%;
`

const ImageContainer = styled.div`
    img {
        width: 100%;
    }
`

const TextContainer = styled.div`
    background: rgba(0, 0, 0, 0.2);
    padding: 5px;
    h5 {
        font-size: 18px;
        color: rgba(255,255,255,0.8);
    }
    p {
        color: rgb(141, 139, 139);
        font-size: 14px;
    }

    * {
        line-height: 2;
        margin: 0 auto;
        padding: auto 1rem;
    }
`

export default class MyStations extends React.Component {
    render() {
        return (
            <Section>
                <h3>My Stations</h3>
                <Hr />
                <StyledSlider {...settings}>
                    {data.map((slide, i) => {
                        return (
                            <Station key={`${slide}${i}`}>
                                <ImageContainer>
                                    <Link to={`/${slide}/${i}`}>
                                        <Media
                                            object
                                            src="https://www.placehold.it/212x212"
                                            className="img-fluid"
                                            alt={`${slide}`}
                                        />
                                    </Link>
                                </ImageContainer>
                                <TextContainer>
                                    <h5>{slide.title}</h5>
                                    <p>{slide.description}</p>
                                    <br />
                                    <p>{slide.stationCount} Stations</p>
                                </TextContainer>
                            </Station>
                        )
                    })}
                </StyledSlider>
            </Section>
        )
    }
}

const data = [
    {
        title: 'New Music',
        description: 'For the people to love attention cow must moo',
        stationCount: 20
    },
    {
        title: '90s Hiphop',
        description: 'For the people to love attention cow must moo',
        stationCount: 20
    },
    {
        title: 'Slow Rock',
        description: 'For the people to love attention cow must moo',
        stationCount: 20
    },
    {
        title: 'Rock Your Body',
        description: 'For the people to love attention cow must moo',
        stationCount: 20
    }
]

const settings = {
    arrows: false,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    responsive: [
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
}
