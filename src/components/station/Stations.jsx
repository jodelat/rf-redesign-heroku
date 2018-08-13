import React from 'react'
import { connect } from 'react-redux'
import { stationActions } from '../../store/station/actions'
import { alertActions } from '../../store/actions'
import StationCard from './StationCard.jsx'

class Stations extends React.Component {
    state = {
        station: {}
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // this.props.getStationFlag('KCTY')
        // this.props.getMajorCitiesWithStations()
        // this.props.getStationsByCountry('US')
        // this.props.getAllCountriesWithStations()
        this.props.getTrendingStations()
    }

    render() {
        const { station, stations, alert, countries, cities, flags, trending } = this.props
        // if (flags) {
        //     console.log('Flags: ', flags)
        // }
        // if (cities) {
        //     console.log('All major cities with stations', cities)
        // }
        // if (stations) {
        //     console.log('All stations for the US', stations)
        // }
        // if (countries) {
        //     console.log('All countries with stations', countries)
        // }
        if (station.isFetching) {
            console.log(station.isFetching)
            return <div className="title-bar">No stations results yet. Fetching...</div>
        }
        console.log('===========',this.props.station)
        // var stationsList = station.stationsList.result
        // return <div>{stationsList.map((data, i) => <StationCard key={i} station={data} />)}</div>
        return <div>You got stations results!</div>

        //}
    }
}

const mapStateToProps = state => ({
    station: state.station,
    stations: state.station.allStationsByCountry,
    alert: state.alert,
    countries: state.station.allCountriesWithStations,
    flags: state.station.stationFlags,
    cities: state.station.allMajorCitiesWithStations,
    trending: state.station.allTrendingStations
})

export default connect(mapStateToProps, { ...stationActions })(Stations)
