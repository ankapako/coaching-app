import React, { useState } from 'react'
import { useDispatch, batch } from 'react-redux'

import exercises, { postNewExercise } from '../reducers/exercises'

const NewExerciseForm = () => {
  const [newExerciseName, setNewExerciseName] = useState('')
  const [newInstructions, setNewInstructions] = useState('')
  const [newTargetMuscles, setNewTargetMuscles] = useState([])
  const dispatch = useDispatch()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    batch(() => {
      dispatch(
        exercises.actions.setExercisesData(newExerciseName, newInstructions)
      )
      dispatch(postNewExercise(newExerciseName, newInstructions))
    })

    setNewExerciseName('')
  }

  return (
    <form onSubmit={handleFormSubmit} className="form-container">
      <label htmlFor="exercise-name">Exercise name</label>
      <textarea
        id="exercise-name"
        type="text"
        placeholder="Exercise name"
        value={newExerciseName}
        onChange={(event) => setNewExerciseName(event.target.value)}
        rows="2"
      />

      <label htmlFor="instructions">Target muscles</label>
      <select onChange={(event) => setNewTargetMuscles(event.target.value)}>
        <option value={newTargetMuscles}>rintalihakset</option>
        <option value={newTargetMuscles}>ojentajat</option>
        <option value={newTargetMuscles}>olkapäät</option>
        <option value={newTargetMuscles}>hauis</option>
        <option value={newTargetMuscles}>vatsalihakset</option>
      </select>

      <label htmlFor="instructions">Instructions</label>
      <textarea
        id="instructions"
        type="text"
        placeholder="Exercise name"
        value={newInstructions}
        onChange={(event) => setNewInstructions(event.target.value)}
        rows="2"
      />

      <button type="submit">SEND</button>
    </form>
  )
}

export default NewExerciseForm
