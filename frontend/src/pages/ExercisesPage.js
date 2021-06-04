import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Search } from 'semantic-ui-react'
import styled from 'styled-components/macro'

import exercises from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'
import AddNewExercise from '../components/AddNewExercise'

const SearchContainer = styled.div`
  text-align: center;
`

const ButtonContainer = styled.div`
  margin: 10px;
`

const ExercisesContainer = styled.div`
  margin: 5px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

const ExercisesPage = () => {
  const exercisesData = useSelector((store) => store.exercises.exercisesData)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:8081/exercises')
      .then((res) => res.json())
      .then((json) => {
        dispatch(exercises.actions.setExercisesData(json.data))
        console.log(json.data)
      })
  }, [dispatch])

  return (
    <>
      <SearchContainer>
        <Search placeholder="Search" size="large" />
        <ButtonContainer>
          <Button color="teal">Filter</Button>
          <Button color="teal">Sort</Button>
          <Button color="teal">Search</Button>
        </ButtonContainer>
      </SearchContainer>
      <ExercisesContainer>
      <AddNewExercise />
        {exercisesData.map((exercise) => {
          return <ExerciseCard {...exercise} key={exercise._id} />
        })}
      </ExercisesContainer>
    </>
  )
}

export default ExercisesPage
