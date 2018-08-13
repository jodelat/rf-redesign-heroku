import { authHeader } from '../../helpers'
import { GenURL } from '../../helpers/oauth'
import { urls } from '../../constants'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
export const userService = {
    authenticate,
    login,
    webAuth,
    logout,
    resetPassword,
    register,
    getAll,
    getById,
    update,
    _delete
}

function authenticate(username, password) {
    var url = GenURL(urls.APIV1 + `/xauth`, `POST`, {}, true)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    return fetch(url, requestOptions)
        .then(response => {
            return handleResponse(response)
        })
        .then(oauth => {
            // login successful if there's a token in the response
            if (oauth && oauth.oauth_token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                oauth.username = username
                return oauth
            }
            return
        })
}

function login(oauth, password) {
    var url = GenURL(urls.APIV1 + `/users/` + oauth.username, `GET`, {}, false, oauth)

    return fetch(url, { method: 'GET' })
        .then(response => {
            return handleResponse(response)
        })
        .then(user => {
            if (user) {
                return user
            }
        })
}

function webAuth(username, password) {
    return fetch(urls.WEB_LOGIN + '?username=' + username + '&password=' + password, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            return handleResponse(response)
        })
        .then(resp => {
            return resp
        })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user')
}

function resetPassword(user) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ user: user })
    }
    return fetch(urls.PASSWORD_RESET, requestOptions).then(response => {
        return handleResponse(response)
    })
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch('/users', requestOptions).then(handleResponse)
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch('/users/' + _id, requestOptions).then(handleResponse)
}

function register(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {},
        body: JSON.stringify(user)
    }

    return fetch(urls.APIV1 + '/users/', requestOptions).then(handleResponse)
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return fetch('/users/' + user.id, requestOptions).then(handleResponse)
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    }

    return fetch('/users/' + id, requestOptions).then(handleResponse)
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response)
    }

    return response.json()
}
