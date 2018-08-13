import {actionTypes as types, userConstants} from '../../constants'

export function user(state = {}, action) {
    switch (action.type) {
        case userConstants.AUTHENTICATE_REQUEST:
            return {authenticating: true}
        case userConstants.AUTHENTICATE_SUCCESS:
            return {authenticated: true, oauth: action.oauth}
        case userConstants.AUTHENTICATE_FAILURE:
            return {}
        case userConstants.LOGIN_REQUEST:
            return {authenticating: true}
        case userConstants.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loggedIn: true,
                info: action.user
            })
        case userConstants.RESET_PASSWORD_REQUEST:
            return {reseting: true}
        case userConstants.RESET_PASSWORD_COMPLETE:
        case userConstants.LOGOUT:
        case userConstants.LOGIN_FAILURE:
            return {}
        default:
            return state
    }
}

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {registering: true};
        case userConstants.REGISTER_SUCCESS:
        case userConstants.REGISTER_FAILURE:
            return {};
        default:
            return state
    }
}
