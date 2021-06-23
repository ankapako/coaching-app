import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

import ProgramCard from '../components/ProgramCard'
import { fetchPrograms } from '../reducers/exercises'

const Title = styled.h4`
  font-size: 20px;
  text-align: center;
  margin: 20px;
`

const CreateProgramTool = () => {
  const programsData = useSelector((store) => store.exercises.programsData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPrograms())
  }, [dispatch])

  return (
    <Container>
      <Col>
        <Title>Workout programs</Title>
        {programsData &&
          programsData.map((program) => {
            return <ProgramCard key={program._id} {...program} />
          })}
      </Col>
    </Container>
  )
}

export default CreateProgramTool
