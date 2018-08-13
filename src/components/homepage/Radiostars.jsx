import React from 'react'
import Slider from 'react-slick'
import { Media } from 'reactstrap'
import { Icon } from 'react-fa'

const settings = {
    slidesToShow: 5,
    slidesToScroll: 0,
    arrows: false,
    dots: false,
    accessibility: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: true,
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
                centerMode: true,
                slidesToScroll: 1,
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
const data = [
    {
        name: 'DJ Shannon',
        imgSrc: 'img/radio-stars/Discover-Fancy-Refreshing-Attractions-in-London.png',
        imgSrcset:
            'img/radio-stars/Discover-Fancy-Refreshing-Attractions-in-London.png 2x, img/radio-stars/Discover-Fancy-Refreshing-Attractions-in-London.png 3x',
        username: '@shanon_freman',
        tag:
            'Drive Announcer and host of the CHR Specialty show ‘The Hype’ on BOOM Radio (Radio Star’s station of the year 2015🤘🏼'
    },
    {
        name: 'radiostar2',
        imgSrc: 'img/radio-stars/hm-tower-of-london-image.png',
        imgSrcset:
            'img/radio-stars/hm-tower-of-london-image.png 2x, img/radio-stars/hm-tower-of-london-image.png 3x',
        username: '@shanon_freman',
        tag:
            'Drive Announcer and host of the CHR Specialty show ‘The Hype’ on BOOM Radio (Radio Star’s station of the year 2015🤘🏼'
    },
    {
        name: 'radiostar3',
        imgSrc: 'img/radio-stars/London-Bridge-7.png',
        imgSrcset: 'img/radio-stars/London-Bridge-7.png 2x, img/radio-stars/London-Bridge-7.png 3x',
        username: '@shanon_freman',
        tag:
            'Drive Announcer and host of the CHR Specialty show ‘The Hype’ on BOOM Radio (Radio Star’s station of the year 2015🤘🏼'
    },
    {
        name: 'radiostar4',
        imgSrc: 'img/radio-stars/London-Bridge-8.png',
        imgSrcset: 'img/radio-stars/London-Bridge-8.png 2x, img/radio-stars/London-Bridge-8.png 3x',
        username: '@shanon_freman',
        tag:
            'Drive Announcer and host of the CHR Specialty show ‘The Hype’ on BOOM Radio (Radio Star’s station of the year 2015🤘🏼'
    },
    {
        name: 'radiostar5',
        imgSrc: 'img/radio-stars/London-Eye.png',
        imgSrcset: 'img/radio-stars/London-Eye.png 2x, img/radio-stars/London-Eye.png 3x',
        username: '@shanon_freman',
        tag:
            'Drive Announcer and host of the CHR Specialty show ‘The Hype’ on BOOM Radio (Radio Star’s station of the year 2015🤘🏼'
    }
]
const RadioStars = () => (
    <Slider {...settings}>
        {data.map((radiostar, i) => {
            return (
                <div key={i}>
                    <div className="radio-star">
                        <div className="view overlay">
                            <Media
                                object
                                src={radiostar.imgSrc}
                                srcSet={radiostar.imgSrcset}
                                className="img-fluid z-depth-5"
                                alt="placeholder"
                            />
                            <div className="mask">
                                {/*<p className="white-text">*/}
                                <div className="radio-star-name d-md-block d-none">
                                    <p className="m-0 p-0">{radiostar.name}</p>
                                    <p className="m-0 p-0">{radiostar.username}</p>
                                </div>
                                <hr className="border-white ml-md-0 mt-1 mb-1 d-md-block d-none" />
                                <div className="radio-star-tag d-md-block d-none">
                                    {radiostar.tag}
                                </div>
                                <a href="#" title="Play video" className="play" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </Slider>
)

export default RadioStars
