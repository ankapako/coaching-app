import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import exercises, { postNewExercise } from '../reducers/exercises'

const NewExerciseForm = () => {
  const exercisesData = useSelector((store) => store.exercises.exercisesData)
  const [newExerciseName, setNewExerciseName] = useState('')
  const dispatch = useDispatch()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    dispatch(exercises.actions.setExercisesData(exercisesData))
    dispatch(postNewExercise(newExerciseName))
    setNewExerciseName('')
  }

  return (
    <form onSubmit={handleFormSubmit} className="form-container">
      <label htmlFor="exercise-name" className="main-title">
        Exercise name
      </label>

      <textarea
        id="exercise-name"
        type="text"
        placeholder="Exercise name"
        value={newExerciseName}
        onChange={(event) => setNewExerciseName(event.target.value)}
        rows="2"
      />
      <button type="submit">SEND</button>
    </form>
  )
}

export default NewExerciseForm
