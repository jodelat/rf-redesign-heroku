import { actionTypes as types, urls, userConstants } from '../../constants'
import { post } from '../../helpers'
import { GenURL } from '../../helpers/oauth'
import { userService } from './service'
import { alertActions } from '../actions'
import { alertConstants } from '../../constants/rfConstants'

export const userActions = {
    /*login,
    logout,*/
    authenticate,
    login,
    webAuth,
    register,
    reset_password /*,*/
    /* getAll,*/
    /*delete: _delete*/
}

/*Oauth authentication to get token*/
function authenticate(username, password) {
    return dispatch => {
        dispatch({ type: userConstants.AUTHENTICATE_REQUEST })
        userService.authenticate(username, password).then(
            oauth => {
                dispatch({ type: userConstants.AUTHENTICATE_SUCCESS, oauth })
                dispatch(login(oauth, password))
            },
            error => {
                Promise.resolve(error)
                    .then(promise => promise.json())
                    .then(function(msg) {
                        console.log(msg)
                        var error_message = msg.exception
                        if (error_message.includes('password')) {
                            dispatch(alertActions.error({ password: error_message }))
                        } else if (error_message.includes('consumer')) {
                            dispatch(alertActions.error({ username: error_message }))
                        }
                        dispatch({ type: userConstants.AUTHENTICATE_FAILURE, error })
                    })
            }
        )
    }
}

/*Login with oauth object*/
function login(oauthObject, password) {
    return dispatch => {
        dispatch({ type: userConstants.LOGIN_REQUEST })
        userService.login(oauthObject, password).then(
            user => {
                localStorage.setItem('oauth', JSON.stringify(oauthObject))
                dispatch({ type: userConstants.LOGIN_SUCCESS, user })
            },
            error => {
                dispatch({ type: userConstants.LOGIN_FAILURE, error })
                dispatch(alertActions.error(error))
            }
        )
    }
}

/*Integrating with present gae*/
function webAuth(username, password) {
    return dispatch => {
        dispatch({ type: userConstants.LOGIN_REQUEST })
        userService.webAuth(username, password).then(
            auth => {
                var user = auth.user
                if (user.radio_personality == 'dj') {
                    document.cookie = 'rf=' + auth.rf
                    document.cookie = 'channel=' + auth.channel
                    location.reload()
                } else {
                    dispatch({ type: userConstants.LOGIN_SUCCESS, user })
                }
            },
            error => {
                Promise.resolve(error)
                    .then(promise => promise.json())
                    .then(function(msg) {
                        console.log(msg)
                        var error_message = msg.exception
                        if (error_message.includes('password')) {
                            dispatch(alertActions.error({ password: error_message }))
                        } else if (error_message.includes('username')) {
                            dispatch(alertActions.error({ username: error_message }))
                        }
                        dispatch({ type: userConstants.LOGIN_FAILURE, error })
                    })
            }
        )
    }
}

/*Register*/
function register(user) {
    return dispatch => {
        dispatch({ type: userConstants.REGISTER_REQUEST, user })
        dispatch(alertActions.clear())
        userService.register(user).then(
            user => {
                dispatch({ type: userConstants.REGISTER_SUCCESS, user })
                dispatch(alertActions.success('Registration successful'))
            },
            error => {
                Promise.resolve(error)
                    .then(promise => promise.json())
                    .then(function(msg) {
                        var error_message = msg.exception
                        if (error_message.includes('email')) {
                            dispatch(alertActions.error({ email: error_message }))
                        } else if (error_message.includes('username')) {
                            dispatch(alertActions.error({ username: error_message }))
                        } else if (error_message.includes('password')) {
                            dispatch(alertActions.error({ password: error_message }))
                        }
                        dispatch({ type: userConstants.REGISTER_FAILURE, user })
                    })
            }
        )
    }
}

function reset_password(user) {
    return dispatch => {
        dispatch({ type: userConstants.RESET_PASSWORD_REQUEST })
        userService.resetPassword(user).then(
            success => {
                dispatch({ type: userConstants.RESET_PASSWORD_COMPLETE })
                dispatch(alertActions.success({ user: success.message }))
            },
            error => {
                Promise.resolve(error)
                    .then(promise => promise.json())
                    .then(function(msg) {
                        var error_message = msg.exception
                        dispatch({ type: userConstants.RESET_PASSWORD_COMPLETE })
                        dispatch(alertActions.error({ user: error_message }))
                    })
            }
        )
    }
}

export const logout = () => dispatch => {
    dispatch({ type: userConstants.LOGOUT })
    localStorage.clear()
}

export const login_to_remove = ({ username, password }) => dispatch => {
    dispatch({ type: types.LOGIN_REQUEST })
    var url = GenURL(urls.APIV1 + `/xauth`, `POST`, {}, true)
    console.log(url)
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
            .then(response => response.json())
            .then(userData =>
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.
                {
                    if (userData.exception) {
                        dispatch({ type: types.LOGIN_FAILURE })
                    } else {
                        userData.username = username
                        console.log(userData)
                        var url = GenURL(
                            urls.APIV1 + `/users/` + username,
                            `GET`,
                            {},
                            false,
                            userData
                        )

                        fetch(url, { method: 'GET' })
                            .then(response => response.json())
                            .then(data => {
                                if (data.exception) {
                                    dispatch({ type: types.LOGIN_FAILURE })
                                } else {
                                    userData.info = data
                                    data = userData
                                    dispatch({ type: types.LOGIN_SUCCESS, data })
                                }
                            })
                    }
                }
            )
    } catch (e) {
        dispatch({ type: types.LOGIN_FAILURE })
    }
}

export const getCurrentUser = () => (dispatch, getState) => {
    /*if(getState().user.info){
        return getState().user.info;
    }else{*/
    try {
        var url = GenURL(urls.APIV1 + `/users/` + getState().user.username, `GET`)
        console.log(getState().user)
        fetch(url, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                if (data.exception) {
                    dispatch({ type: types.LOGIN_FAILURE })
                } else {
                    dispatch({ type: types.USER_DATA, data })
                    return data
                }
            })
    } catch (e) {
        return false
    }
    //}
}

export const loginWithToken = () => (dispatch, getState) => {
    const token = getState().user.token

    if (typeof token === 'undefined') return

    dispatch({ type: types.LOGIN_REQUEST })
    post({
        url: urls.LOGIN_WITH_TOKEN,
        body: { token },
        success: types.LOGIN_SUCCESS,
        failure: types.LOGIN_FAILURE,
        dispatch
    })
}
