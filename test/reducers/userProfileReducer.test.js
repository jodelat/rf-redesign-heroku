import userProfileReducer from '../../src/store/user-profile/reducer'
import { actionTypes as types, userProfileConstants } from '../../src/constants'

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

describe('user profile reducer', () => {
    it('should signify state is fetching when user profile request is made', () => {
        const prevState = {}
        const action = { type: userProfileConstants.USER_PROFILE_REQUEST }

        const expectedState = {
            isFetching: true
        }

        expect(userProfileReducer(prevState, action)).toEqual(expectedState)
    })

    it('should return an object of an individual user data', () => {
        const prevState = { isFetching: true }

        const payload = mockedPayload
        const action = { type: userProfileConstants.USER_PROFILE_SUCCESS, payload }

        const expectedState = {
            isFetching: false,
            userProfile: payload
        }
        // expect(userProfileReducer(prevState, action)).toEqual({})
        expect(userProfileReducer(prevState, action)).toEqual(expectedState)
    })
})

// always write failing tests first -- don't want false securities from a
// test that immediately passes

// args<state, action>
