import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AddNewWeek from '../components/AddNewWeek'
import New from './New'
import ProgramCard from '../components/ProgramCard'

import { fetchExercises, fetchPrograms } from '../reducers/exercises'

const CreateProgramTool = () => {
  const programsData = useSelector((store) => store.exercises.programsData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchExercises())
    dispatch(fetchPrograms())
  }, [dispatch])

  console.log(programsData)


  return (
    <Container>
      <Row>
        <Col>
          <h3>Workout programs</h3>
          {programsData &&
            programsData.map((program) => {
              return <ProgramCard key={program._id} {...program} />
            })}
        </Col>
        <Col>
          <AddNewWeek />
          <New />
        </Col>
      </Row>
    </Container>
  )
}

export default CreateProgramTool
