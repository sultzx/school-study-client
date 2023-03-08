import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from './slices/user.js'
import { studyReducer } from './slices/study.js'
import { all_studentsReducer } from './slices/all_students.js'

const store = configureStore({
    reducer: {
        user: userReducer,
        study: studyReducer,
        student: all_studentsReducer
    }
})

export default store