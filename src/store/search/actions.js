import { actionTypes as types, urls, searchConstants } from '../../constants'
import { searchService } from './service'
import { alertConstants, userConstants } from '../../constants/rfConstants'
import { alertActions } from '../actions'

export const searchActions = {
    getSearchFlags,
    getSearchStations,
    getSearchUsers
}

function getSearchFlags(flagQuery) {
    try {
        return async dispatch => {
            dispatch({ type: searchConstants.SEARCH_FLAG_REQUEST })
            const payload = await searchService.fetchSearchFlag(flagQuery)
            dispatch({ type: searchConstants.SEARCH_FLAG_SUCCESS, payload })
        }
    } catch (error) {
        dispatch({ type: searchConstants.SEARCH_FLAG_ERROR, error })
    }
}

function getSearchUsers(userQuery) {
    try {
        return async dispatch => {
            dispatch({ type: searchConstants.SEARCH_USER_REQUEST })
            const payload = await searchService.fetchSearchUser(userQuery)
            dispatch({ type: searchConstants.SEARCH_USER_SUCCESS, payload })
        }
    } catch (error) {
        dispatch({ type: searchConstants.SEARCH_USER_ERROR, error })
    }
}

function getSearchStations(stationQuery) {
    try {
        return async dispatch => {
            dispatch({ type: searchConstants.SEARCH_STATION_REQUEST })
            const payload = await searchService.fetchSearchStation(stationQuery)
            dispatch({ type: searchConstants.SEARCH_STATION_SUCCESS, payload })
        }
    } catch (error) {
        dispatch({ type: searchConstants.SEARCH_STATION_ERROR, error })
    }
}
