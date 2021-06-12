import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

import { fetchPrograms, fetchSingleProgram } from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'

const SingleProgramPage = () => {
  const programsData = useSelector((store) => store.exercises.programsData)
  const singleProgramData = useSelector(
    (store) => store.exercises.singleProgramData
  )

  // const singleWorkout = singleProgramData.workout

  const { name } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPrograms())
    dispatch(fetchSingleProgram(name))
  }, [dispatch, name])
  console.log("hello", singleProgramData)
  console.log("hei", programsData)
  
  return (
    <Card>
      <Card.Content>
        <Button>edit</Button>
        <Button>delete</Button>
      </Card.Content>
      <Card.Content>
        <Card.Header>{singleProgramData.name}</Card.Header>
      </Card.Content>
      <Card.Content>

      </Card.Content>
    </Card>
  )
}

export default SingleProgramPage
