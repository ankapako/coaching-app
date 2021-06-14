import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components/macro'

import { fetchPrograms, fetchSingleProgram } from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'

const SingleProgramPageBackground = styled.div`
  background-color: #DB87CC;
`
const Button = styled.button`
font-family: 'Ubuntu', sans-serif;
margin: 0 5px;
width: 90px;
font-size: 12px;
line-height: 2;
border-radius: 4px;
letter-spacing: 1px;
border: 1px solid lightgrey;
cursor: pointer;
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
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
  const singleProgramData = useSelector(
    (store) => store.exercises.singleProgramData
  )

  const { name } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPrograms())
    dispatch(fetchSingleProgram(name))
  }, [dispatch, name])

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
