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

/* export const fetchPrograms = (name) => {
  return (dispatch) => {
    fetch(`http://localhost:8081/programs/name/${name}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(exercises.actions.setSingleProgramData(json))
        console.log(json)
      })
  }
} */

export default exercises
