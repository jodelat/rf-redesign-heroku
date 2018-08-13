import { urls } from '../../constants'
import queryString from 'query-string'
import { GenURL } from '../../helpers/oauth'

export const genresService = {
    fetchGenres,
    fetchGenresTree,
    fetchSpecificGenresTree
}

function generateOAuthURL(url) {
    const oauth = JSON.parse(localStorage.getItem('oauth'))
    var url = GenURL(url, `GET`, {}, false, oauth)
    return url
}

async function fetchGenres() {
    try {
        const url = generateOAuthURL(urls.GENRES)
        const result = await fetch(url).then(resp => resp.json())
        return result
    } catch (e) {
        console.log('Error caught:', e.message)
        return e
    }
}

async function fetchGenresTree(query) {
    try {
        const url = generateOAuthURL(urls.GENRESTREE())
        const result = await fetch(url).then(resp => resp.json())
        return result
    } catch (e) {
        console.log('Error caught:', e.message)
        return e
    }
}

async function fetchSpecificGenresTree(query) {
    try {
        const url = generateOAuthURL(urls.GENRESTREE(query))
        const result = await fetch(url).then(resp => resp.json())
        return result
    } catch (e) {
        console.log('Error caught:', e.message)
    }
}
