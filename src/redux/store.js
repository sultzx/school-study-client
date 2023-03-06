import {configureStore} from '@reduxjs/toolkit'
import { studentReducer } from './slices/student.js'

const store = configureStore({
    reducer: {
        student: studentReducer
    }
})

export default store