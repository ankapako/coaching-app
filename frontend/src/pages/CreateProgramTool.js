import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { fetchExercises } from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'

const CreateProgramTool = () => {
  const exercisesData = useSelector((store) => store.exercises.exercisesData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchExercises())
  }, [dispatch])

  return (
    <Container>
      <Row>
        <Col sm={8}>program here</Col>

          <Col sm={4}>
            {exercisesData &&
              exercisesData.map((exercise) => {
                return <ExerciseCard key={exercise._id} {...exercise} />
              })}
          </Col>

      </Row>
    </Container>
  )
}

export default CreateProgramTool
