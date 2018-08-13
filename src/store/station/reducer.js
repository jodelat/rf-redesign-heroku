import { actionTypes as types, stationConstants } from '../../constants'
import { combineReducers } from 'redux'
import { genreConstants } from '../../constants/rfConstants'
import getMetaDataReducer from '../higher-order-reducers/get-metadata-reducer'

const stationUserFavorite = getMetaDataReducer({ baseType: genreConstants.USER_FAVORITE_A_STATION })
// const genreAllReducer = getMetaDataReducer({ baseType: genreConstants.GENRE_ALL })

export default combineReducers({
    stationUserFavorite
    // genreAll: genreAllReducer
})


// export function station(state = {}, action) {

//     switch (action.type) {
//         // USER_FAVORITE_STATION
//         case stationConstants.STATIONS_REQUEST:
//         case stationConstants.STATIONS_LOCATIONS_REQUEST:
//             return { isFetching: true }
//         case stationConstants.STATIONS_LIST:
//             return { stationsList: action.stationList }
//         case stationConstants.STATION_DETAIL:
//             return { stationObject: action.stationObject }
//         case stationConstants.STATIONS_LOCATIONS_DETAIL:
//             // stationConstants.STATIONS_COUNTRIES_FETCHED
//             // stationConstants.STATIONS_MAJOR_CITIES_FETCHED
//             // stationConstants.STATIONS_BY_COUNTRY_FETCHED
//             //stationConstants.FlAGS_BY_STATIONS
//             return {
//                 ...state,
//                 allCountriesWithStations: state.allCountriesWithStations
//                     ? state.allCountriesWithStations
//                     : action.allCountriesWithStations,
//                 allMajorCitiesWithStations: state.allStationsByMajorCities
//                     ? state.allStationsByMajorCities
//                     : action.allStationsByMajorCities,
//                 allStationsByCountry: state.allStationsByCountry
//                     ? state.allStationsByCountry
//                     : action.allStationsByCountry,
//                 stationFlags: state.stationFlagResult
//                     ? state.stationFlagResult
//                     : action.stationFlagResult,
//                 allTrendingStations: state.allTrendingStations
//                     ? state.allTrendingStations
//                     : action.allTrendingStations,
//                 allMyStations: state.allMyStations ? state.allMyStations : action.allMyStations,
//                 isFetching: false
//             }
//         default:
//             return state
//     }
// }
