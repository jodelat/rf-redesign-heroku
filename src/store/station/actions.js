import { actionTypes as types, urls, stationConstants } from '../../constants'
import { stationService } from './service'
import { alertConstants, userConstants } from '../../constants/rfConstants'
import { alertActions } from '../actions'

export const stationActions = {
    stationListByLocation,
    stationById,
    getAllCountriesWithStations,
    getMajorCitiesWithStations,
    getStationsByCountry,
    getStationFlag,
    getTrendingStations,
    getMyStations,
    doFavoriteStationAction
}

function getTrendingStations() {
    return async dispatch => {
        dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
        const allTrendingStations = await stationService.fetchTrendingStations()
        if (allTrendingStations) {
            dispatch({
                type: stationConstants.STATIONS_LOCATIONS_DETAIL,
                allTrendingStations
            })
        }
    }
}

function getMyStations(query) {
    return async dispatch => {
        dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
        const allMyStations = await stationService.fetchMyStations(query)
        if (allMyStations) {
            dispatch({
                type: stationConstants.STATIONS_LOCATIONS_DETAIL,
                allMyStations
            })
        }
    }
}

function getAllCountriesWithStations() {
    return async dispatch => {
        dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
        const allCountriesWithStations = await stationService.fetchCountriesWithStations()
        if (allCountriesWithStations) {
            dispatch({
                type: stationConstants.STATIONS_LOCATIONS_DETAIL,
                allCountriesWithStations
            })
        }
    }
}

function getStationsByCountry(countryID) {
    return async dispatch => {
        dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
        const allStationsByCountry = await stationService.fetchStationsByCountry(countryID)
        if (allStationsByCountry) {
            dispatch({
                type: stationConstants.STATIONS_LOCATIONS_DETAIL,
                allStationsByCountry
            })
        }
    }
}

function getMajorCitiesWithStations() {
    return async dispatch => {
        dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
        const allStationsByMajorCities = await stationService.fetchMajorCitiesWithStations()
        if (allStationsByMajorCities) {
            dispatch({
                type: stationConstants.STATIONS_LOCATIONS_DETAIL,
                allStationsByMajorCities
            })
        }
    }
}

function getStationFlag(query) {
    return async dispatch => {
        dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
        const stationFlagResult = await stationService.fetchStationFlag(query)
        if (stationFlagResult) {
            dispatch({
                type: stationConstants.STATIONS_LOCATIONS_DETAIL,
                stationFlagResult
            })
        }
    }
}

function doFavoriteStationAction(stationId) {
    try {
        return async dispatch => {
            dispatch({ type: stationConstants.USER_FAVORITE_A_STATION_REQUEST })
            const payload = await stationService.addFavoriteStation(stationId)
            console.log('payload', payload)
            dispatch({ type: stationConstants.USER_FAVORITE_A_STATION_SUCCESS, payload })
            // stationService.addFavoriteStation(stationId).then(
            //     stationObject => {
            //         console.log('favorite station request SUCCESS', stationObject)
            //         dispatch({ type: stationConstants.STATION_USER_FAVORITE_REQUEST, stationObject })
            //     },
            //     error => {
            //         Promise.resolve(error)
            //             .then(promise => promise.json())
            //             .then(msg => {
            //                 switch (msg.status_code) {
            //                     case 401:
            //                         dispatch({ type: '' })
            //                         dispatch({ type: userConstants.NOT_AUTHORIZED })
            //                         break
            //                     case 400:
            //                         dispatch({ type: '' })
            //                         dispatch(alertActions.error(msg.exception))
            //                         break
            //                 }
            //             })
            //     }
            // )
        }
    } catch (error) {
        dispatch({ type: stationConstants.USER_FAVORITE_A_STATION_ERROR, error })
    }
}

function stationById(stationId) {
    return dispatch => {
        dispatch({ type: stationConstants.STATION_REQUEST })
        stationService.getStation(stationId).then(
            stationObject => {
                dispatch({ type: stationConstants.STATION_DETAIL, stationObject })
                //dispatch(alertActions.success("Success"));
            },
            error => {
                Promise.resolve(error)
                    .then(promise => promise.json())
                    .then(function(msg) {
                        switch (msg.status_code) {
                            case 401:
                                dispatch({ type: '' })
                                dispatch({ type: userConstants.NOT_AUTHORIZED })
                                break
                            case 400:
                                dispatch({ type: '' })
                                dispatch(alertActions.error(msg.exception))
                                break
                        }
                    })
            }
        )
    }
}

function stationListByLocation(country, state) {
    return dispatch => {
        dispatch({ type: stationConstants.STATION_REQUEST })
        const parameter = { state: state }
        if (country !== 'all') {
            parameter.country = country
        }

        stationService.getStationsList(parameter).then(stationList => {
            dispatch({ type: stationConstants.STATIONS_LIST, stationList })
        })
    }
}
