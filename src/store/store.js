import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import throttle from 'lodash/throttle'

import rootReducer from './reducer'
import { loginWithToken } from './user/reducer.js'
import { saveState, loadState } from '../helpers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [thunk, logger]

export const store = createStore(
    rootReducer,
    loadState(),
    composeEnhancers(applyMiddleware(...middlewares))
)

store.subscribe(throttle(() => saveState(store.getState()), 1000))
//store.dispatch(loginWithToken())
