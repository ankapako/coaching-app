import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import exercises, { fetchExercises, postNewExercise } from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'


const SearchContainer = styled.div`
  text-align: center;
`
const ExercisesPageBackground = styled.div`
  background-color: #67d29d;
`
const ButtonContainer = styled.div``

const Button = styled.button`
font-family: 'Ubuntu', sans-serif;
margin: 0 5px;
width: 100px;
font-weight: 400;
font-size: 15px;
line-height: 2;
border-radius: 4px;
letter-spacing: 1px;
border: none;
cursor: pointer;
box-shadow: 0 12px 35px 0 rgba(16, 39, 112, .25);
`

const ExercisesContainer = styled.div`
  margin: 5px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`
const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
`

const ExercisesPage = () => {
  const [open, setOpen] = useState(false)
  const [newExerciseName, setNewExerciseName] = useState('')
  const [newInstructions, setNewInstructions] = useState('')
  const [newTargetMuscles, setNewTargetMuscles] = useState('')
  const [newMuscleGroup, setNewMuscleGroup] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [newImg, setNewImg] = useState('')
  const dispatch = useDispatch()

  const handleFormSubmit = (event) => {
    dispatch(
      exercises.actions.setExercisesData()
    )
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
  }

  const exercisesData = useSelector((store) => store.exercises.exercisesData)


  useEffect(() => {
    dispatch(fetchExercises())
  }, [dispatch])

  console.log(exercisesData)
  return (
    <ExercisesPageBackground>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search"
        />
        <ButtonContainer>
          <Button>Filter</Button>
          <Button>Sort</Button>
          <Button>Search</Button>
        </ButtonContainer>
      </SearchContainer>
      <ExercisesContainer>
      <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <label>Exercise name</label>
            <input
              type="text"
              placeholder="Exercises name"
              value={newExerciseName}
              onChange={(event) => setNewExerciseName(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Target muscles</label>
            <input
              type="text"
              placeholder="Target muscles"
              value={newTargetMuscles}
              onChange={(event) => setNewTargetMuscles(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <input
              type="text"
              placeholder="category"
              value={newCategory}
              onChange={(event) => setNewCategory(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Muscle group</label>
            <input
              type="text"
              placeholder="Muscle group"
              value={newMuscleGroup}
              onChange={(event) => setNewMuscleGroup(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Instructions</label>
            <input
              placeholder="Instructions"
              value={newInstructions}
              onChange={(event) => setNewInstructions(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input
              placeholder="Image url"
              value={newImg}
              onChange={(event) => setNewImg(event.target.value)}
            />
          </Form.Field>

          <Modal.Actions>
            <Button type="submit" color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Form.Button content="Submit" />
          </Modal.Actions>
        </Form>
        {exercisesData.map((exercise) => {
          return <ExerciseCard {...exercise} key={exercise._id} />
        })}
      </ExercisesContainer>
    </ExercisesPageBackground>
  )
}

export default ExercisesPage
