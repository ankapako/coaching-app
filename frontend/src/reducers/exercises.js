import { createSlice } from '@reduxjs/toolkit'

const exercises = createSlice({
  name: 'exercises',
  initialState: {
    exercisesData: [],
    programsData: [],
    singleProgramData: [],
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

export const fetchExercises = () => {
  return (dispatch) => {
    fetch("https://coaching-app-db.herokuapp.com/exercises")
      .then((res) => res.json())
      .then((json) => {
        dispatch(exercises.actions.setExercisesData(json.data))
      })
  }
} 

export default exercises
