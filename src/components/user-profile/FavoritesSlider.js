import React from 'react'
import BaseSlider from './BaseSlider'
import styled from 'styled-components'

export default class FavoritesSlider extends React.Component {
    state = {
        activeIndex: 'stations'
    }

    render() {
        const { activeIndex } = this.state
        return (
            <React.Fragment>
                <h3>Favorites</h3>
                <SliderNav>
                    <li className={activeIndex == 'stations' ? 'active' : ''}>
                        <a onClick={() => this.setState({ activeIndex: 'stations' })}>STATIONS</a>
                    </li>
                    <li className={activeIndex == 'people' ? 'active' : ''}>
                        <a onClick={() => this.setState({ activeIndex: 'people' })}>PEOPLE</a>
                    </li>
                    <li className={activeIndex == 'interest' ? 'active' : ''}>
                        <a onClick={() => this.setState({ activeIndex: 'interest' })}>INTEREST</a>
                    </li>
                </SliderNav>
                {/* Stations*/}
                {activeIndex == 'stations' ? (
                    <BaseSlider data={stationData} settings={settings} />
                ) : (
                    ''
                )}
                {/* People */}
                {activeIndex == 'people' ? (
                    <BaseSlider data={peopleData} settings={settings} />
                ) : (
                    ''
                )}
                {/* Interests */}
                {activeIndex == 'interest' ? (
                    <BaseSlider data={interestData} settings={settings} />
                ) : (
                    ''
                )}
            </React.Fragment>
        )
    }
}

const SliderNav = styled.ul`
    display: flex;
    padding: 0;
    justify-content: space-around;
    border: 3px solid #6e2a82;
    li {
        text-align: center;
        width: 100%;
        list-style: none;
        &:not(last-child) {
            border-right: 1px solid #6e2a82;
        }
        &.active {
            background-color: #6e2a82;
        }
    }
`

const stationData = ['station1', 'station2', 'station3', 'station4', 'station5']
const peopleData = ['people1', 'people2', 'people3', 'people4', 'people5']
const interestData = ['interest1', 'interest2', 'interest3', 'interest4', 'interest5']

const settings = {
    slidesToShow: 3,
    arrows: false,
    dots: false,
    accessibility: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
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
                slidesToScroll: 1,
                swipe: true,
                swipeToSlide: true,
                centerPadding: '10px'
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 3,
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
