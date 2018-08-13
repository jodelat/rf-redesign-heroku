import { createSelector } from 'reselect'

import generateRandomNumber from '../../helpers/randomNumber'

export const selectGenreTree = state => {
    const data = state.genre.genreTree.data
    if (!data) return {}
    return data
}

export const selectRandomTrees = createSelector(selectGenreTree, data => {
    const genres = data.genres
    if (!genres || !genres.length) {
        return []
    }
    const randomNumbers = []
    while (randomNumbers.length < 6) {
        const randomNumber = generateRandomNumber(genres.length)
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        }
    }
    const randomizedGenres = genres.filter((genre, index) => {
        if (randomNumbers.includes(index)) {
            return true
        }
        return false
    })
    return randomizedGenres
})
