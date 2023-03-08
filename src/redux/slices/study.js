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

export const fetchRemoveClassroom = createAsyncThunk('auth/fetchRemoveClassroom', async (id, {rejectWithValue}) => {
    try {
        const  response = await axios.delete(`/api/study/classroom/${id}`)
          return response.data  
      } catch (error) {
          if (!error.response) {
              throw error
          }
          return rejectWithValue(error.response.data)
      } 
})

export const fetchAllClassroom = createAsyncThunk('auth/fetchAllClassroom', async () => {

        const  {data} = await axios.get(`/api/study/classroom/all`)
          return data

})

/////////////////////////////////////////////////////

const initialState = {
    classrooms: {
       items: [],
        status: 'loading',
        error: '' 
    }
    
}

const studySlice = createSlice({
    name: 'study',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchAllClassroom.pending]: (state) => {
            state.classrooms.status = 'loading'
            state.classrooms.items = []
        },
        [fetchAllClassroom.fulfilled]: (state, action) => {
            state.classrooms.status = 'loaded'
            state.classrooms.items = action.payload
        },
        [fetchAllClassroom.rejected]: (state) => {
            state.classrooms.status = 'error'
            state.classrooms.items = []
        },

        [fetchCreateClassroom.pending]: (state) => {
            state.classrooms.status = 'loading'
            state.classrooms.items = []
        },
        [fetchCreateClassroom.fulfilled]: (state, action) => {
            state.classrooms.status = 'loaded'
            state.classrooms.items = action.payload
        },
        [fetchCreateClassroom.rejected]: (state) => {
            state.classrooms.status = 'error'
            state.classrooms.items = []
        },

        [fetchRemoveClassroom.pending]: (state, action) => {
            state.classrooms.status = 'loading'
            state.classrooms.items = state.classrooms.items.filter(
                (obj) => obj._id != action.meta.arg
            );
        },
        
        [fetchRemoveClassroom.rejected]: (state, action) => {
            state.classrooms.status = 'error'
            state.classrooms.items = action.payload
        },

    }
})



export const studyReducer = studySlice.reducer
