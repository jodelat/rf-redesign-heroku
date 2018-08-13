import { urls } from '../../constants'
import queryString from 'query-string'
import { GenURL } from '../../helpers/oauth'

export const searchService = {
    fetchSearchStation,
    fetchSearchUser,
    fetchSearchFlag
}

async function fetchSearchFlag(query, page = 0, count = 20) {
    try {
        const oauth = JSON.parse(localStorage.getItem('oauth'))
        const url = GenURL(urls.SEARCH_FLAGS + query, `GET`, { p: page, s: count }, false, oauth)
        return await fetch(url).then(res => res.json())
    } catch (e) {
        console.log('e caught,', e)
        return e
    }
}

async function fetchSearchUser(query, page = 0, count = 20) {
    try {
        const oauth = JSON.parse(localStorage.getItem('oauth'))
        const url = GenURL(urls.SEARCH_USERS + query, `GET`, { p: page, s: count }, false, oauth)
        return await fetch(url).then(res => res.json())
    } catch (e) {
        console.log('e caught,', e)
        return e
    }
}

async function fetchSearchStation(query, page = 0, count = 20) {
    try {
        const oauth = JSON.parse(localStorage.getItem('oauth'))
        const url = GenURL(urls.SEARCH_STATIONS + query, `GET`, { p: page, s: count }, false, oauth)
        return await fetch(url).then(res => res.json())
    } catch (e) {
        console.log('e caught,', e)
        return e
    }
}
