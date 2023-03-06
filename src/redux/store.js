import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './slices/user.js'
import { studyReducer } from './slices/study.js'
const store = configureStore({
    reducer: {
        user: userReducer,
        study: studyReducer
    }
})

export default store