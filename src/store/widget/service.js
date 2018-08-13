import { urls } from 'constants'
import queryString from 'query-string'
import { generateOAuthURL } from 'helpers/oauth'

export const widgetService = {
    fetchWidgetGroups,
    fetchWidgetDetails
}

async function fetchWidgetGroups(id) {
    try {
        const url = generateOAuthURL(urls.WIDGET_GROUP(id))
        const result = await fetch(url).then(resp => resp.json())
        return result
    } catch (e) {
        console.log('Error caught:', e.message)
        return e
    }
}

async function fetchWidgetDetails(id) {
    try {
        const url = generateOAuthURL(urls.WIDGET(id))
        const result = await fetch(url).then(resp => resp.json())
        return result
    } catch (e) {
        console.log('Error caught:', e.message)
        return e
    }
}
