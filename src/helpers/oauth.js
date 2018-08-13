import { Map, OrderedMap } from 'immutable'
import jsSHA from 'jssha'
import { loadState } from './index'

const config = {
    consumerKey: 'ZAzDRA9rZStrQ4LS',
    consumerSecret: 'gTVfuETGsg53MQPK',
    oauthSigMethod: 'HMAC-SHA1',
    oauthVersion: '1.0'
}

export const GenURL = (endpoint, method, query = {}, xauth = false, userdata) => {
    // Example: GenURL('/users/testuser1', 'GET')
    let baseURL = endpoint
    // Timestamp used for both oauth_nonce and oauth_timestamp
    let timestamp = Math.round(new Date().getTime() / 1000.0)
    // The initial params map.  We will need to sort these and any others we
    // add alphabetically.
    var shaObj = new jsSHA('SHA-1', 'TEXT')
    shaObj.update(timestamp)
    var hash = shaObj.getHash('HEX')
    let paramsStart = Map({
        oauth_consumer_key: config.consumerKey,
        oauth_nonce: hash,
        oauth_signature_method: config.oauthSigMethod,
        oauth_timestamp: timestamp,
        oauth_version: config.oauthVersion
    })
    // Insert an oauth_token param if one is provided.  The token/secret args
    // to auth are needed for every authentication-required call after getting
    // the token/secret from /api/xauth.
    //TODO: TOken Based Authentication
    if (!xauth) {
        let token = userdata.oauth_token
        paramsStart = paramsStart.set('oauth_token', token)
        let username = userdata.username
        paramsStart = paramsStart.set('username', username)
    }
    // Merge the init params with the user-defined query params.
    paramsStart = paramsStart.merge(query)
    // Params need to be in alphabetical order for Oauth to work.  Sort the
    // keys and add them to an OrderedMap.
    let sortedKeys = paramsStart.keySeq().sort()
    let params = OrderedMap()
    sortedKeys.forEach(key => {
        let val = paramsStart.get(key)
        params = params.set(key, val)
    })
    // Encode the URL string.
    let encodeStr = `${method}&${encodeURIComponent(baseURL)}`
    let firstKey = true
    params.forEach((val, key) => {
        if (firstKey) {
            encodeStr += `&${encodeURIComponent(`${key}=${val}`)}`
            firstKey = false
        } else {
            encodeStr += encodeURIComponent(`&${key}=${val}`)
        }
    })
    let secretParam = `${config.consumerSecret}&`
    //TODO: Token Based authentication
    if (!xauth) {
        var state = loadState()
        secretParam += userdata.oauth_token_secret
    }
    // Generate the oauth signature.
    var shaObj = new jsSHA('SHA-1', 'TEXT')
    shaObj.setHMACKey(secretParam, 'TEXT')
    shaObj.update(encodeStr)
    var hmac = shaObj.getHMAC('B64')

    /*var shaObj = new jsSHA(encodeStr, 'TEXT');
        let hmac_sha1 = encodeURIComponent(shaObj.getHMAC(secretParam, 'TEXT', 'SHA-1',
            'B64'));*/
    let hmac_sha1 = encodeURIComponent(hmac)
    params = params.set('oauth_signature', hmac_sha1)
    // Construct the final URL string.
    let returnURL = `${baseURL}?`
    params.forEach((val, key) => {
        returnURL += `${key}=${val}&`
    })
    return returnURL.slice(0, -1)
}

export function generateOAuthURL(url) {
    const oauth = JSON.parse(localStorage.getItem('oauth'))
    var url = GenURL(url, `GET`, {}, false, oauth)
    return url
}
