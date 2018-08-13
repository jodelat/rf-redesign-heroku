import { urls } from '../../constants'
import queryString from 'query-string'
import { GenURL } from '../../helpers/oauth'

export const userProfileService = {
    fetchUserProfile,
    fetchUserFlags,
    // fetchUserTags,
    fetchUserStats
    // fetchUserTagsAndFlags,
    // // fetchUserTagsAndFlagsQuery
    // fetchUserFriends,
    // fetchUserFriendsAndFlags,
    // // fetchUserFriendsAndFlagsQuery
    // fetchUserStations,
    // fetchUserStationsAndFlags
    // fetchUserStationsAndFlagsQuery
}

function generateOAuthURL(url) {
    const oauth = JSON.parse(localStorage.getItem('oauth'))
    var url = GenURL(url, `GET`, {}, false, oauth)
    return url
}

async function fetchUserProfile(query) {
    try {
        const url = generateOAuthURL(urls.USERS(query))
        return await fetch(url).then(resp => resp.json())
    } catch (e) {
        console.log('Error caught:', e.message)
        return e
    }
}

async function fetchUserFlags(query) {
    try {
        const url = generateOAuthURL(urls.USERS_FLAGS(query))
        return await fetch(url).then(resp => resp.json())
    } catch (e) {
        console.log('Error caught:', e.message)
        return e
    }
}

async function fetchUserStats(query) {
    try {
        const url = generateOAuthURL(urls.USERS_STATS(query))
        return await fetch(url).then(resp => resp.json())
    } catch (e) {
        console.log('Error caught:', e.message)
        return e
    }
}

// async function fetchCountriesWithStations() {
//     try {
//         const allCountriesWithStations = await fetch(urls.STATIONS_LOCATIONS).then(resp =>
//             resp.json()
//         )
//         if (allCountriesWithStations) {
//             return allCountriesWithStations
//         }
//     } catch (e) {
//         console.log('Error caught:', e.message)
//     }
// }

// async function fetchStationsByCountry(countryID) {
//     try {
//         const allStationsByCountry = await fetch(urls.STATIONS_LOCATIONS + '/' + countryID).then(
//             resp => resp.json()
//         )
//         if (allStationsByCountry) {
//             return allStationsByCountry
//         }
//     } catch (e) {
//         console.log('Caught error', e.message)
//     }
// }

// async function fetchMajorCitiesWithStations() {
//     try {
//         const allStationsByMajorCities = await fetch(urls.STATION_MAJOR_CITIES).then(resp =>
//             resp.json()
//         )
//         if (allStationsByMajorCities) {
//             return allStationsByMajorCities
//         }
//     } catch (e) {
//         console.log('Caught error', e.message)
//     }
// }

// async function fetchStationFlag(query) {
//     try {
//         const oauth = JSON.parse(localStorage.getItem('oauth'))
//         var url = GenURL(urls.STATIONS + '/' + query + '/flags', `GET`, {}, false, oauth)
//         const fetchedStationFlag = await fetch(url).then(resp => resp.json())
//         return fetchedStationFlag
//     } catch (e) {
//         console.log('Caught error', e.message)
//     }
// }

// function getStation(stationId) {
//     const oauth = JSON.parse(localStorage.getItem('oauth'))
//     var url = GenURL(urls.STATION + '/' + stationId, `GET`, {}, false, oauth)

//     return fetch(url)
//         .then(response => {
//             return handleResponse(response)
//         })
//         .then(resp => {
//             return resp
//         })
// }

// function getStationsList(params) {
//     return fetch(urls.STATIONS + '?' + queryString.stringify(params))
//         .then(response => {
//             return handleResponse(response)
//         })
//         .then(resp => {
//             return resp
//         })
// }
