import { userProfileConstants } from '../../constants'
import { userProfileService } from './service'
import { alertConstants, userConstants } from '../../constants/rfConstants'
import { alertActions } from '../actions'

export const userProfileActions = {
    getUserProfileAction,
    getUserFlagsAction,
    getUserStatsAction
    // stationListByLocation,
    // stationById,
    // getAllCountriesWithStations,
    // getMajorCitiesWithStations,
    // getStationsByCountry,
    // getStationFlag
}

function getUserFlagsAction(query) {
    return async dispatch => {
        dispatch({ type: userProfileConstants.USER_FLAG_REQUEST })
        const payload = await userProfileService.fetchUserFlags(query)
        if (payload) {
            dispatch({
                type: userProfileConstants.USER_FLAG_SUCCESS,
                payload
            })
        } else {
            dispatch({
                type: userProfileConstants.USER_FLAG_FAILURE,
                error: payload
            })
        }
    }
}

function getUserProfileAction(query) {
    return async dispatch => {
        dispatch({ type: userProfileConstants.USER_PROFILE_REQUEST })
        const payload = await userProfileService.fetchUserProfile(query)
        if (payload) {
            dispatch({
                type: userProfileConstants.USER_PROFILE_SUCCESS,
                payload
            })
        } else {
            dispatch({
                type: userProfileConstants.USER_PROFILE_FAILURE,
                error: payload
            })
        }
    }
}

function getUserStatsAction(query) {
    return async dispatch => {
        dispatch({ type: userProfileConstants.USER_STATS_REQUEST })
        const payload = await userProfileService.fetchUserStats(query)
        if (payload) {
            dispatch({
                type: userProfileConstants.USER_STATS_SUCCESS,
                payload
            })
        } else {
            dispatch({
                type: userProfileConstants.USER_STATS_FAILURE,
                error: payload
            })
        }
    }
}

// function getAllCountriesWithStations() {
//     return async dispatch => {
//         dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
//         const allCountriesWithStations = await stationService.fetchCountriesWithStations()
//         if (allCountriesWithStations) {
//             dispatch({
//                 type: stationConstants.STATIONS_LOCATIONS_DETAIL,
//                 allCountriesWithStations
//             })
//         }
//     }
// }

// function getStationsByCountry(countryID) {
//     return async dispatch => {
//         dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
//         const allStationsByCountry = await stationService.fetchStationsByCountry(countryID)
//         if (allStationsByCountry) {
//             dispatch({
//                 type: stationConstants.STATIONS_LOCATIONS_DETAIL,
//                 allStationsByCountry
//             })
//         }
//     }
// }

// function getMajorCitiesWithStations() {
//     return async dispatch => {
//         dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
//         const allStationsByMajorCities = await stationService.fetchMajorCitiesWithStations()
//         if (allStationsByMajorCities) {
//             dispatch({
//                 type: stationConstants.STATIONS_LOCATIONS_DETAIL,
//                 allStationsByMajorCities
//             })
//         }
//     }
// }

// function getStationFlag(query) {
//     return async dispatch => {
//         dispatch({ type: stationConstants.STATIONS_LOCATIONS_REQUEST })
//         const stationFlagResult = await stationService.fetchStationFlag(query)
//         if (stationFlagResult) {
//           console.log('station flag result action =====', stationFlagResult);
//             dispatch({
//                 type: stationConstants.STATIONS_LOCATIONS_DETAIL,
//                 stationFlagResult
//             })
//         }
//     }
// }

// function stationById(stationId) {
//     return dispatch => {
//         dispatch({ type: stationConstants.STATION_REQUEST })
//         stationService.getStation(stationId).then(
//             stationObject => {
//                 dispatch({ type: stationConstants.STATION_DETAIL, stationObject })
//                 //dispatch(alertActions.success("Success"));
//             },
//             error => {
//                 Promise.resolve(error)
//                     .then(promise => promise.json())
//                     .then(function(msg) {
//                         switch (msg.status_code) {
//                             case 401:
//                                 dispatch({ type: '' })
//                                 dispatch({ type: userConstants.NOT_AUTHORIZED })
//                                 break
//                             case 400:
//                                 dispatch({ type: '' })
//                                 dispatch(alertActions.error(msg.exception))
//                                 break
//                         }
//                     })
//             }
//         )
//     }
// }

// function stationListByLocation(country, state) {
//     return dispatch => {
//         dispatch({ type: stationConstants.STATION_REQUEST })
//         const parameter = { state: state }
//         if (country !== 'all') {
//             parameter.country = country
//         }

//         stationService.getStationsList(parameter).then(stationList => {
//             dispatch({ type: stationConstants.STATIONS_LIST, stationList })
//         })
//     }
// }
