import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import Form from 'react-bootstrap/Form'

import { postNewExercise } from '../reducers/exercises'

const Input = styled.input`
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 6px 4px;
  width: 100%;
  margin-bottom: 10px;
  ::placeholder {
    color: lightgrey;
  }
`

const AddNewExercise = () => {
  const dispatch = useDispatch()

  const [newExerciseName, setNewExerciseName] = useState('')
  const [newInstructions, setNewInstructions] = useState('')
  const [newTargetMuscles, setNewTargetMuscles] = useState('')
  const [newMuscleGroup, setNewMuscleGroup] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [newImg, setNewImg] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    dispatch(
      postNewExercise(
        newExerciseName,
        newInstructions,
        newTargetMuscles,
        newMuscleGroup,
        newCategory,
        newImg
      )
    )
    setNewExerciseName('')
    setNewInstructions('')
    setNewTargetMuscles('')
    setNewMuscleGroup('')
    setNewCategory('')
    setNewImg('')
  }

  return (
    <Form onSubmit={handleFormSubmit} className="add-new-exercise-form">
      <Form.Label>Exercise name</Form.Label>
      <Input
        id="exercise-name"
        type="text"
        placeholder="Exercise name"
        value={newExerciseName}
        onChange={(event) => setNewExerciseName(event.target.value)}
      />

      <Form.Label>Target muscles</Form.Label>
      <Input
        id="target-muscles"
        type="text"
        placeholder="Target muscles"
        value={newTargetMuscles}
        onChange={(event) => setNewTargetMuscles(event.target.value)}
      />

      <Form.Label>Category</Form.Label>
      <Input
        id="category"
        type="text"
        placeholder="category"
        value={newCategory}
        onChange={(event) => setNewCategory(event.target.value)}
      />

      <Form.Label>Muscle group</Form.Label>
      <Input
        id="muscle-group"
        type="text"
        placeholder="Muscle group"
        value={newMuscleGroup}
        onChange={(event) => setNewMuscleGroup(event.target.value)}
      />

      <Form.Label>Instructions</Form.Label>
      <Input
        id="instructions"
        type="text"
        placeholder="Instructions"
        value={newInstructions}
        onChange={(event) => setNewInstructions(event.target.value)}
      />

      <Form.Label>Image </Form.Label>
      <Input
        id="image-url"
        type="text"
        placeholder="Image url"
        value={newImg}
        onChange={(event) => setNewImg(event.target.value)}
      />

      <button type="submit">ADD</button>
    </Form>
  )
}

export default AddNewExercise
