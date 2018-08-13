import { urls } from '../../constants'
import queryString from 'query-string'
import { GenURL } from '../../helpers/oauth'

export const stationService = {
    getStation,
    getStationsList,
    fetchCountriesWithStations,
    fetchStationsByCountry,
    fetchMajorCitiesWithStations,
    fetchStationFlag,
    fetchTrendingStations,
    fetchMyStations,
    addFavoriteStation
}

async function fetchCountriesWithStations() {
    try {
        const allCountriesWithStations = await fetch(urls.STATIONS_LOCATIONS).then(resp =>
            resp.json()
        )
        if (allCountriesWithStations) {
            return allCountriesWithStations
        }
    } catch (e) {
        console.log('Error caught:', e.message)
    }
}

async function fetchStationsByCountry(countryID) {
    try {
        const allStationsByCountry = await fetch(urls.STATIONS_LOCATIONS + '/' + countryID).then(
            resp => resp.json()
        )
        if (allStationsByCountry) {
            return allStationsByCountry
        }
    } catch (e) {
        console.log('Caught error', e.message)
    }
}

async function fetchMajorCitiesWithStations() {
    try {
        const allStationsByMajorCities = await fetch(urls.STATION_MAJOR_CITIES).then(resp =>
            resp.json()
        )
        if (allStationsByMajorCities) {
            return allStationsByMajorCities
        }
    } catch (e) {
        console.log('Caught error', e.message)
    }
}

async function fetchStationFlag(query) {
    try {
        const oauth = JSON.parse(localStorage.getItem('oauth'))
        const url = GenURL(urls.STATIONS + '/' + query + '/flags', `GET`, {}, false, oauth)
        const fetchedStationFlag = await fetch(url).then(resp => resp.json())
        return fetchedStationFlag
    } catch (e) {
        console.log('Caught error', e.message)
    }
}

async function fetchTrendingStations() {
    try {
        const oauth = JSON.parse(localStorage.getItem('oauth'))
        const url = GenURL(urls.TRENDING + '/stations', `GET`, {}, false, oauth)
        const fetchedTrendingStations = await fetch(url).then(resp => resp.json())
        return fetchedTrendingStations
    } catch (e) {
        console.log('Caught Error', e.message)
    }
}

async function fetchMyStations(query) {
    try {
        const oauth = JSON.parse(localStorage.getItem('oauth'))
        const url = GenURL(urls.USERS_STATIONS(query), `GET`, {}, false, ouath)
        console.log('My Stations', url)
        const fetchedMyStations = await fetch(url).then(resp => resp.json())
        return fetchedMyStations
    } catch (e) {
        console.log('Caught Error', e.message)
    }
}

async function addFavoriteStation(stationId) {
    try {
        const oauth = JSON.parse(localStorage.getItem('oauth'))
        const url = GenURL(urls.USERS_STATIONS_FAVORITE + stationId, `PUT`, {}, false, oauth)
        console.log(url)
        return await fetch(url).then(resp => resp.json())
    } catch (e) {
        return e
    }
}

function getStation(stationId) {
    const oauth = JSON.parse(localStorage.getItem('oauth'))
    const url = GenURL(urls.STATION + '/' + stationId, `GET`, {}, false, oauth)

    return fetch(url)
        .then(response => {
            return handleResponse(response)
        })
        .then(resp => {
            return resp
        })
}

function getStationsList(params) {
    return fetch(urls.STATIONS + '?' + queryString.stringify(params))
        .then(response => {
            return handleResponse(response)
        })
        .then(resp => {
            return resp
        })
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response)
    }

    return response.json()
}
