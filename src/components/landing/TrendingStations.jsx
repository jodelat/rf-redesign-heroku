import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Slider from 'react-slick'
import Hr from '../../style/elements/hr/index'
import { Link } from 'react-router-dom'
import { Media } from 'reactstrap'

import { stationActions } from '../../store/station/actions'

const Station = styled.div`
    background: #42424d66;
    border-radius: 5px;
    width: 90%;

    img {
        width: 100%;
    }
`

class TrendingStations extends React.Component {
    constructor() {
        super()
        this.displayName = 'TrendingPage'
    }

    componentDidMount() {
        this.props.getTrendingStations()
    }

    wrangleTrendingStationData(stations) {
        const cleanStationData = stations.map(({ aux, id, keyvalue, logo }) => {
            return {
                name: aux,
                imgSrc: logo,
                id,
                keyvalue
            }
        })

        return cleanStationData
    }

    render() {
        let stations = null
        if (this.props.station.allTrendingStations) {
            stations = this.wrangleTrendingStationData(
                this.props.station.allTrendingStations.trending
            )
        }

        return (
            <React.Fragment>
                <h3>Trending Stations</h3>
                <Hr />
                {stations ? (
                    <Slider {...settings}>
                        {stations.map((slide, i) => {
                            return (
                                <div key={`${slide}${i}`} className="d-flex justify-content-center">
                                    <Station>
                                        <Link to={`/station/${slide.id}`}>
                                            <Media
                                                object
                                                src={slide.imgSrc}
                                                className="img-fluid z-depth-5"
                                                alt={`${slide.name}`}
                                            />
                                        </Link>
                                    </Station>
                                </div>
                            )
                        })}
                    </Slider>
                ) : (
                    <h1>No Trending Stations Available</h1>
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ station: state.station })

export default connect(mapStateToProps, { ...stationActions })(TrendingStations)

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

// const settings = {
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: false,
//     accessibility: true,
//     responsive: [
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 centerMode: true,
//                 slidesToScroll: 1,
//                 swipe: true,
//                 swipeToSlide: true,
//                 centerPadding: '80px'
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 4,
//                 centerMode: false,
//                 slidesToScroll: 2,
//                 swipe: true,
//                 swipeToSlide: true,
//                 centerPadding: '10px'
//             }
//         },
//         {
//             breakpoint: 980,
//             settings: {
//                 slidesToShow: 4,
//                 centerMode: false,
//                 slidesToScroll: 1,
//                 swipe: true,
//                 swipeToSlide: true,
//                 touchMove: true,
//                 focusOnSelect: true
//             }
//         }
//     ]
// }
