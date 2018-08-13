import { combineReducers } from 'redux'
import getMetaDataReducer from '../higher-order-reducers/get-metadata-reducer'
import { searchConstants } from '../../constants'

const stationReducer = getMetaDataReducer({ baseType: searchConstants.SEARCH_STATION })
const userReducer = getMetaDataReducer({ baseType: searchConstants.SEARCH_USER })
const flagReducer = getMetaDataReducer({ baseType: searchConstants.SEARCH_FLAG })

export default combineReducers({
    stations: stationReducer,
    flags: flagReducer,
    users: userReducer
})
