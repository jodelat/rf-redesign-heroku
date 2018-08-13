export const APIV1 = 'https://0-5-89-uv-test-dot-radioflag-prod.appspot.com/api'
export const APIV2 = 'https://0-5-89-uv-test-dot-radioflag-prod.appspot.com/apiv2'
// export const APIV2 = 'https://radioflag.com/apiv2'

var config = {
    flagCastNumFlags: 5
}

/* Primarily use apiv1 for now */

/* AUTH API */
export const SIGNUP = `${APIV1}/signup`
export const LOGIN = `${APIV1}/login`
export const LOGIN_WITH_TOKEN = `${APIV1}/token`
export const WEB_LOGIN = `${APIV1}/webauth2`
export const PASSWORD_RESET = `${APIV1}/auth/resetpassword`

/* USER API */
export const USERS = query => (query ? `${APIV1}/users/${query}` : `${APIV1}/users`)
export const USERS_FLAGS = query => `${APIV1}/users/${query}/flags`
export const USERS_TAGS = query => `${APIV1}/users/${query}/tags`
export const USERS_STATS = query => `${APIV1}/users/${query}/stats`
export const USERS_TAGS_FLAGS = query => `${APIV1}/users/${query}/flags`
export const USERS_LISTENERS = query => `${APIV1}/users/${query}/listeners`
export const USERS_FRIENDS = query => `${APIV1}/users/${query}/friends`
export const USERS_FRIENDS_FLAGS = query => `${APIV1}/users/${query}/friends/flags`
export const USERS_STATIONS = query => `${APIV1}/users/${query}/stations`
export const USERS_STATIONS_FLAGS = query => `${APIV1}/users/${query}/stations/flags`
export const USERS_STATIONS_FAVORITE = `${APIV2}/user/stations/`
// export const USERS_TAGS_FLAGS_PLUS_QUERY = (input,input) => `${USERS}/${input}/flags/${input2}`
// export const USERS_FRIENDS_FLAGS_PLUS_QUERY = (input, input2) => `${USERS}/${input}/friends/flags/${input2}`
// export const USERS_STATIONS_FLAGS_PLUS_QUERY = (input, input2) => `${USERS}/${input}/stations/${input2}`

/* SEARCH API */
export const SEARCH_FLAGS = `${APIV1}/flags/search/`
export const SEARCH_STATIONS = `${APIV1}/stations/search/`
export const SEARCH_USERS = `${APIV1}/users/search/`

/* STATIONS API */
export const STATION = `${APIV2}/station`
export const STATIONS = `${APIV1}/stations` // /../pls, flags, streams
export const STATIONS_LOCATIONS = `${APIV2}/stations/locations`
export const STATION_MAJOR_CITIES = `${APIV2}/major-cities`

/* TRENDING API */
export const TRENDING = `${APIV2}/trending`

/* GENRES API */
export const GENRES = `${APIV1}/genres`
export const GENRESTREE = query => (query ? `${APIV1}/genrestree/${query}` : `${APIV1}/genrestree`)

/* WIDGET GROUP API */
export const WIDGET_GROUP = (id, platform = '') =>
    `${APIV2}/widget_group?group_id=${id}&platform=${platform}`
export const WIDGET = (id, size, cursor) => `${APIV2}/widget?widget_id=${id}`
