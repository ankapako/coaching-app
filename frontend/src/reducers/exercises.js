import { createSlice } from '@reduxjs/toolkit'

const exercises = createSlice({
  name: 'exercises',
  initialState: {
    exercisesData: []
  },
  reducers: {
    setExercisesData: (store, action) => {
      store.exercisesData = action.payload
    },
  },
})

export default exercises
