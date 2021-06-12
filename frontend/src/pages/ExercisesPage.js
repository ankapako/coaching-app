import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components/macro'

import { fetchExercises } from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'
import AddNewExercise from '../components/AddNewExercise'
// import SearchField from '../components/SearchField'
// import NewExerciseForm from '../components/NewExerciseForm'

const SearchContainer = styled.div`
  text-align: center;
`
const ExercisesPageBackground = styled.div`
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
const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
`

const ExercisesPage = () => {
  const [search, setSearch] = useState('')
  const exercisesData = useSelector((store) => store.exercises.exercisesData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchExercises())
  }, [dispatch])
  
  console.log(exercisesData)
  return (
    <ExercisesPageBackground>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        <ButtonContainer>
          <Button>Filter</Button>
          <Button>Sort</Button>
          <Button>Search</Button>
        </ButtonContainer>
      </SearchContainer>
      <ExercisesContainer>
        <AddNewExercise />
        {exercisesData.map((exercise) => {
          return <ExerciseCard {...exercise} key={exercise._id} />
        })}
      </ExercisesContainer>
    </ExercisesPageBackground>
  )
}

export default ExercisesPage
