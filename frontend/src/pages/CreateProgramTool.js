import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Container from 'react-bootstrap/Container'

import AddWorkout from '../components/NewWorkout'
import AddNewWeek from '../components/AddNewWeek'
import New from './New'

import { fetchExercises, fetchWorkoutPrograms } from '../reducers/exercises'

const CreateProgramTool = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchExercises())
    dispatch(fetchWorkoutPrograms())
  }, [dispatch])

  return (
    <Container>
      <AddNewWeek />
      <AddWorkout />
      <New />
    </Container>
  )
}

export default CreateProgramTool
