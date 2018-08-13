import { combineReducers } from 'redux'
import { userProfileConstants } from '../../constants'
import getMetaDataReducer from '../higher-order-reducers/get-metadata-reducer'

export default combineReducers({
    profile: getMetaDataReducer({ baseType: userProfileConstants.USER_PROFILE }),
    flags: getMetaDataReducer({ baseType: userProfileConstants.USER_FLAG }),
    stats: getMetaDataReducer({ baseType: userProfileConstants.USER_STATS })
})
