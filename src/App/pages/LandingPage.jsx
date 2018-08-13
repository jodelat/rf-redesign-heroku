import React from 'react'
import { MyStations, Genres, FeaturedDJ, TrendingStations, Banner } from 'rf-components/landing'
import { HomeNav } from 'rf-components/nav'
import Hr from 'style/elements/hr/'

const LandingPage = () => {
    return (
        <React.Fragment>
            <HomeNav />
            <Banner />
            <div className="container">
                <MyStations />
                <TrendingStations />
                <FeaturedDJ />
                <Genres />
                <Hr />
                <h1>Recommended Artists</h1>
                <Hr />
                <h1>Sponsored</h1>
            </div>
        </React.Fragment>
    )
}

export default LandingPage
