import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { userProfileActions } from '../../src/store/user-profile/actions'
import { actionTypes as types, urls, userProfileConstants } from '../../src/constants'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockedPayload = {
    username: 'testuser1',
    bio: '',
    stats: {
        stations: 0,
        tags: 0,
        listeners: 0,
        flags: 0,
        last_login: '2018-03-25T01:00:08.921680',
        friends: 0
    },
    email_blasts: false,
    city: '',
    country: 'us',
    radio_personality: 'dj',
    avatar:
        'http://lh3.ggpht.com/06LId622Ok0iZctkOhwez-33rZjSpfuv4Xg82NKr_0RCS8T1RBiupgBQ-I_hghSWXBzHfR1nNPIaYtdvl9i_7N7qYsE',
    state: '',
    birthday: '',
    location: '',
    gender: 'undisclosed',
    id: 2327667345,
    fullname: '',
    email: 'yuvarajmb@hotmail.com',
    friend: false,
    has_playlist: false
}

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    it('creates userProfileConstants.USER_PROFILE_FAILURE when failing to fetching user profile is done', () => {
        fetchMock.once('/user', {
            body: { ...mockedPayload },
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            { type: userProfileConstants.USER_PROFILE_REQUEST },
            {
                type: userProfileConstants.USER_PROFILE_FAILURE
                // payload: mockedPayload
            }
        ]

        const store = mockStore({})

        return store.dispatch(userProfileActions.getUserProfileAction('testuser1')).then(() => {
            // return of async action
            // expect(store.getActions()).toEqual([{ type: null }, { type: null }])
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
