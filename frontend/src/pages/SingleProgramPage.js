import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import { fetchPrograms, fetchSingleProgram } from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'

const SingleProgramPageBackground = styled.div`
  background-color: #ea6a9f;
`

const Card = styled.div`
  margin: 5px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
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
      {singleProgramData && <h4>{singleProgramData.name}</h4>}
      <Card>
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
