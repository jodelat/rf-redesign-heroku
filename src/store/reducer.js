import { combineReducers } from 'redux'
import { alertConstants } from '../constants'
import { user, registration } from './user/reducer'
import station from './station/reducer'
import search from './search/reducer'
import genre from './genre/reducer'
import widget from './widget/reducer'
import userProfile from './user-profile/reducer'

const rootReducer = combineReducers({
    registration,
    user,
    alert,
    station,
    search,
    userProfile,
    genre,
    widget
    /*,flags: {},
     comments: {},
     player: {},
     locations: {},
     stations: {},
     station: {},
     user: {
     dumpToLocalStorage: true
     },
     users: {},
     userFlags: {},
     userPlaylist: {},
     flagCast: {
     init: {
     currFlag: {}
     }
     },
     subFlags: {},
     sub: {
     init: {
     currView: 'Stations'
     }
     },
     friends: {},
     friend: {},
     favorited: {},
     stats: {},
     search: {},
     heroUser: {}*/
})

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: alertConstants.SUCCESS,
                message: action.message
            }
        case alertConstants.ERROR:
            return {
                type: alertConstants.ERROR,
                message: action.message
            }
        case alertConstants.CLEAR:
            return {}
        default:
            return state
    }
}

export default rootReducer
