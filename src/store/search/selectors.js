import { createSelector } from 'reselect'

export const selectFlagSearches = state => {
    const data = state.search.flags && state.search.flags.data
    if (!data) return {}
    return data
}

export const selectUserSearches = state => {
    const data = state.search.users && state.search.users.data
    if (!data) return {}
    return data
}

export const selectStationsSearches = state => {
    const data = state.search.stations && state.search.stations.data
    if (!data) return {}
    return data
}
