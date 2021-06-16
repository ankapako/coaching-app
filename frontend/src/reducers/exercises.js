import { createSlice } from '@reduxjs/toolkit'

const exercises = createSlice({
  name: 'exercises',
  initialState: {
    exercisesData: [],
    programsData: [],
    singleProgramData: [],
    loading: false,
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
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    removeExercise: (store, action) => {
      const removedExercise = store.exercisesData.filter(
        (exercise) => exercise.id !== action.payload
      )
      store.exercisesData = removedExercise
    },
  },
})

export const fetchExercises = () => {
  return (dispatch) => {
    dispatch(exercises.actions.setLoading(true))
    fetch('https://coaching-app-db.herokuapp.com/exercises')
      .then((res) => res.json())
      .then((json) => {
        dispatch(exercises.actions.setExercisesData(json.data))
      })
      .finally(() => dispatch(exercises.actions.setLoading(false)))
  }
}

export const postNewExercise = (
  newExerciseName,
  newInstructions,
  newTargetMuscles,
  newMuscleGroup,
  newCategory,
  newImg
) => {
  return (dispatch) => {
    dispatch(exercises.actions.setLoading(true))
    fetch('https://coaching-app-db.herokuapp.com/exercises', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newExerciseName,
        instructions: newInstructions,
        targetMuscles: newTargetMuscles,
        muscleGroup: newMuscleGroup,
        category: newCategory,
        img: newImg,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchExercises(json))
      })
      .finally(() => dispatch(exercises.actions.setLoading(false)))
  }
}

export const fetchPrograms = () => {
  return (dispatch) => {
    dispatch(exercises.actions.setLoading(true))
    fetch('https://coaching-app-db.herokuapp.com/programs')
      .then((res) => res.json())
      .then((json) => {
        dispatch(exercises.actions.setProgramsData(json))
      })
      .finally(() => dispatch(exercises.actions.setLoading(false)))
  }
}

export const fetchSingleProgram = (name) => {
  return (dispatch) => {
    dispatch(exercises.actions.setLoading(true))
    fetch(`https://coaching-app-db.herokuapp.com/programs/name/${name}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(exercises.actions.setSingleProgramData(json.data))
      })
      .finally(() => dispatch(exercises.actions.setLoading(false)))
  }
}

export default exercises
