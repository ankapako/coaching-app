import { createSlice } from '@reduxjs/toolkit'

const exercises = createSlice({
  name: 'exercises',
  initialState: {
    exercisesData: [],
    programsData: [],
    singleProgramData: []
  },
  reducers: {
    setExercisesData: (store, action) => {
      store.exercisesData = action.payload
    },
    setProgramsData: (store, action) => {
      store.programsData = action.payload
    },
    setSingleProgramData: (store, action) => {
      store.singleProgramData = action.payload
    },
  },
})

export default exercises
