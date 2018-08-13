import { genreConstants } from 'constants/rfConstants'
import { genresService } from './service'

export const genreActions = {
    doGenresAction,
    doGenresTreeAction,
    doSpecificGenresTreeAction
}

function doGenresAction() {
    try {
        return async dispatch => {
            dispatch({ type: genreConstants.GENRE_ALL_REQUEST })
            const payload = await genresService.fetchGenres()
            dispatch({
                type: genreConstants.GENRE_ALL_SUCCESS,
                payload
            })
        }
    } catch (error) {
        dispatch({
            type: genreConstants.GENRE_ALL_ERROR,
            payload: error
        })
    }
}

function doGenresTreeAction(query) {
    try {
        return async dispatch => {
            dispatch({ type: genreConstants.GENRE_TREE_REQUEST })
            const payload = await genresService.fetchGenresTree()
            dispatch({
                type: genreConstants.GENRE_TREE_SUCCESS,
                payload
            })
        }
    } catch (error) {
        console.log('ERROR logged')
        dispatch({
            type: genreConstants.GENRE_TREE_ERROR,
            error
        })
    }
}

function doSpecificGenresTreeAction(query) {
    try {
        return async dispatch => {
            dispatch({ type: genreConstants.GENRE_TREE_REQUEST })
            const payload = await genresService.fetchSpecificGenresTree(query)
            dispatch({
                type: genreConstants.GENRE_TREE_SUCCESS,
                payload: payload
            })
        }
    } catch (error) {
        dispatch({
            type: genreConstants.GENRE_TREE_ERROR,
            error
        })
    }
}
