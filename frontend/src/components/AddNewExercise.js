import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import exercises, { postNewExercise } from '../reducers/exercises'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 6px 4px;
  width: 100%;
  margin-bottom: 10px;
  ::placeholder {
    color: lightgrey;
  }
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`

const Label = styled.div`
  text-align: left;
`

const AddNewExercise = ({ handleToggle }) => {
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
    dispatch(
      exercises.actions.setExercisesData(
        newExerciseName,
        newInstructions,
        newTargetMuscles,
        newMuscleGroup,
        newCategory,
        newImg
      )
    )

    setNewExerciseName('')
  }
  return (
    <Form onSubmit={handleFormSubmit}>
      <div>
        <Label>
          <label>Exercise name</label>
        </Label>
        <Input
          id="exercise-name"
          type="text"
          placeholder="Exercise name"
          value={newExerciseName}
          onChange={(event) => setNewExerciseName(event.target.value)}
        />
      </div>
      <div>
        <Label>
          <label>Target muscles</label>
        </Label>
        <Input
          id="target-muscles"
          type="text"
          placeholder="Target muscles"
          value={newTargetMuscles}
          onChange={(event) => setNewTargetMuscles(event.target.value)}
        />
      </div>
      <div>
        <Label>
          <label>Category</label>
        </Label>
        <Input
          id="category"
          type="text"
          placeholder="category"
          value={newCategory}
          onChange={(event) => setNewCategory(event.target.value)}
        />
      </div>
      <div>
        <Label>
          <label>Muscle group</label>
        </Label>
        <Input
          id="muscle-group"
          type="text"
          placeholder="Muscle group"
          value={newMuscleGroup}
          onChange={(event) => setNewMuscleGroup(event.target.value)}
        />
      </div>
      <div>
        <Label>
          <label>Instructions</label>
        </Label>
        <Input
          id="instructions"
          type="text"
          placeholder="Instructions"
          value={newInstructions}
          onChange={(event) => setNewInstructions(event.target.value)}
        />
      </div>
      <div>
        <Label>
          <label>Image</label>
        </Label>
        <Input
          id="image-url"
          type="text"
          placeholder="Image url"
          value={newImg}
          onChange={(event) => setNewImg(event.target.value)}
        />
      </div>
      <button type="submit">ADD</button>
    </Form>
  )
}

export default AddNewExercise
