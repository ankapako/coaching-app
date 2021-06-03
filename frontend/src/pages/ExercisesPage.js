import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Search } from 'semantic-ui-react'
import styled from 'styled-components'

import exercises from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'

const SearchContainer = styled.div`
  text-align: center;
`
const ExercisesContainer = styled.div`
  margin: 5px;
  padding: 20px;
  border: 2px solid teal;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
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
        <Search />
        <Button color="teal">Filter</Button>
        <Button color="teal">Sort</Button>
        <Button color="teal">Search</Button>
      </SearchContainer>
      <ExercisesContainer>
        {exercisesData.map((exercise) => {
          return <ExerciseCard {...exercise} key={exercise._id} />
        })}
      </ExercisesContainer>
    </>
  )
}

export default ExercisesPage
