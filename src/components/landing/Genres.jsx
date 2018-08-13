import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Slider from 'react-slick'
import Hr from '../../style/elements/hr/index'
import { Link } from 'react-router-dom'
import { Media } from 'reactstrap'

import { genreActions } from '../../store/genre/actions'
import { genresService } from '../../store/genre/service'
import { selectRandomTrees } from 'store/genre/selectors'

const GenreBox = styled.div`
    align-items: center;
    background: linear-gradient(to right, #482be0, #9198e5);
    border-radius: 5px;
    display: flex !important;
    justify-content: center;
    min-height: 80px;
    width: 90%;

    *:not(i) {
        font-size: 16px;
        margin: 0;
        padding-left: 4px;
    }
`

class Genres extends React.Component {
    componentDidMount() {
        this.props.doGenresTreeAction()
    }

    render() {
        const { genres } = this.props
        if (genres.length) {
            return (
                <React.Fragment>
                    <h3>Genres & Moods</h3>
                    <Hr />
                    <Slider {...settings}>
                        {genres.map(({ stations, name, id }, i) => {
                            return (
                                <div key={`${name}${id}${i}`}>
                                    <GenreBox>
                                        <span>
                                            <i className="fa fa-circle-o-notch" />
                                        </span>
                                        <h3>{name}</h3>
                                    </GenreBox>
                                </div>
                            )
                        })}
                    </Slider>
                </React.Fragment>
            )
        }
        return <h1>No genres</h1>
    }
}

const mapStateToProps = state => {
    return {
        genres: selectRandomTrees(state)
    }
}

export default connect(mapStateToProps, { ...genreActions })(Genres)

// settings for slider
const settings = {
    arrows: false,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 6,
    slidesToScroll: 4,
    speed: 500,
    responsive: [
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 6,
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
