import { createSlice } from '@reduxjs/toolkit'

const exercises = createSlice({
  name: 'exercises',
  initialState: {
    name: '',
    targetMuscles: '',
    muscleGroup: '',
    category: '',
    instructions: '',
  },
  reducers: {
    setName: (store, action) => {
      store.name = action.payload
    },
    setTargetMuscles: (store, action) => {
      store.targetMuscles = action.payload
    },
    setMuscleGroup: (store, action) => {
      store.muscleGroup = action.payload
    },
    setCategory: (store, action) => {
      store.category = action.payload
    },
    setInstructions: (store, action) => {
      store.instructions = action.payload
    },
  },
})

export default exercises