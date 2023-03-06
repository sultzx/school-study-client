import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios.js'

export const fetchCreateClassroom = createAsyncThunk('auth/fetchCreateClassroom', async (params, {rejectWithValue}) => {
    try {
        const  response  = await axios.post('/api/study/classroom', params)
          return response.data  
      } catch (error) {
          if (!error.response) {
              throw error
          }
          return rejectWithValue(error.response.data)
      } 
})

/////////////////////////////////////////////////////

const initialState = {
    data: null,
    status: 'loading',
    error: ''
}

const studySlice = createSlice({
    name: 'study',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
            state.status = 'loaded'
        }
    },
    extraReducers: {
        [fetchCreateClassroom.pending]: (state) => {
            state.status = 'loading'
            state.data = null
        },
        [fetchCreateClassroom.fulfilled]: (state, action) => {
            state.status = 'loaded'
            state.data = action.payload
        },
        [fetchCreateClassroom.rejected]: (state) => {
            state.status = 'error'
            state.data = null
        },

    }
})



export const studyReducer = studySlice.reducer
