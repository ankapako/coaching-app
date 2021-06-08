import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components/macro'

import { fetchExercises } from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'
// import AddNewExercise from '../components/AddNewExercise'
import SearchField from '../components/SearchField'
import NewExerciseForm from '../components/NewExerciseForm'

const SearchContainer = styled.div`
  text-align: center;
`
const ExercisesPageBackground = styled.body`
  background-color: #67d29d;
`
const ButtonContainer = styled.div``

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
    dispatch(fetchExercises())
  }, [dispatch])

  return (
    <ExercisesPageBackground>
      <SearchContainer>
        <SearchField />
        <ButtonContainer>
          <Button>Filter</Button>
          <Button>Sort</Button>
          <Button>Search</Button>
        </ButtonContainer>
      </SearchContainer>
      <ExercisesContainer>
        <NewExerciseForm />
        {exercisesData.map((exercise) => {
          return <ExerciseCard {...exercise} key={exercise._id} />
        })}
      </ExercisesContainer>
    </ExercisesPageBackground>
  )
}

export default ExercisesPage
