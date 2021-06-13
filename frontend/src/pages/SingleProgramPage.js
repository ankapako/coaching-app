import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import { fetchPrograms, fetchSingleProgram } from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'

const SingleProgramPageBackground = styled.div`
  background-color: #EA6A9F;
`

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #e5e5e5;
  margin: 10px 2px;
  padding-bottom: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

const SingleProgramPage = () => {
  const programsData = useSelector((store) => store.exercises.programsData)
  const singleProgramData = useSelector(
    (store) => store.exercises.singleProgramData
  )

  const singleProgramArray = Object.values(singleProgramData)
  console.log('moi', singleProgramArray)
  const { name } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPrograms())
    dispatch(fetchSingleProgram(name))
  }, [dispatch, name])
  console.log('hello', singleProgramData)
  console.log('hei', programsData)

  return (
    <SingleProgramPageBackground>
    <Card>
      {singleProgramData && <h4>{singleProgramData.name}</h4>}
      <div>
        <Button>edit</Button>
        <Button>delete</Button>
      </div>
      {singleProgramData.workout &&
        singleProgramData.workout.map((exercise) => {
          return <ExerciseCard key={exercise._id} {...exercise} />
        })}
    </Card>
    </SingleProgramPageBackground>
  )
}

export default SingleProgramPage
