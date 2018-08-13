import { combineReducers } from 'redux'
import { genreConstants } from '../../constants/rfConstants'
import getMetaDataReducer from '../higher-order-reducers/get-metadata-reducer'

const genreTreeReducer = getMetaDataReducer({ baseType: genreConstants.GENRE_TREE })
const genreAllReducer = getMetaDataReducer({ baseType: genreConstants.GENRE_ALL })

export default combineReducers({
    genreTree: genreTreeReducer,
    genreAll: genreAllReducer
})

/* 
0: Object { stations: 99, name: "Latin", id: 32 }
1: Object { stations: 154, name: "Electronic", id: 165 }​​
2: Object { stations: 6, name: "Metal", id: 189 
3: Object { stations: 266, name: "Classical", id: 44 
4: Object { stations: 1351, name: "Inspirational", id: 130 }
5: Object { stations: 141, name: "Easy Listening", id: 43 
6: Object { stations: 339, name: "Rap", id: 172 
7: Object { stations: 2663, name: "Talk", id: 29 }
8: Object { stations: 1297, name: "Alternative", id: 63 }
9: Object { stations: 2046, name: "Country", id: 4 }
10: Object { stations: 889, name: "Public Radio", id: 2 
11: Object { stations: 1426, name: "Rock", id: 13 }
12: Object { stations: 213, name: "Jazz", id: 14 }
13: Object { stations: 58, name: "Folk", id: 140 
14: Object { stations: 2818, name: "Pop", id: 41 }
15: Object { stations: 53, name: "Blues", id: 96 }
16: Object { stations: 320, name: "International", id: 31 }
17: Object { stations: 41, name: "Reggae", id: 98 }
18: Object { stations: 160, name: "Decades", id: 431 
19: Object { stations: 5, name: "New Age", id: 271 }
*/
