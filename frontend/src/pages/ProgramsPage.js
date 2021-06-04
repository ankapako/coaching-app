import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Search } from 'semantic-ui-react'
import styled from 'styled-components/macro'

import exercises from '../reducers/exercises'

import ProgramCard from '../components/ProgramCard'

const SearchContainer = styled.div`
  text-align: center;
`

const ButtonContainer = styled.div`
  margin: 10px;
`

const ProgramsContainer = styled.div`
  margin: 5px;
  padding: 20px;
  border: 2px solid pink;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
`

const ProgramsPage = () => {
  const programsData = useSelector((store) => store.exercises.programsData)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:8081/programs')
      .then((res) => res.json())
      .then((json) => {
        dispatch(exercises.actions.setProgramsData(json))
        console.log(json)
      })
  }, [dispatch])
  return (
    <>
      <SearchContainer>
        <Search placeholder="Search" size="large" />
        <ButtonContainer>
          <Button color="pink">Filter</Button>
          <Button color="pink">Sort</Button>
          <Button color="pink">Search</Button>
        </ButtonContainer>
      </SearchContainer>
      <ProgramsContainer>
        <Button>add new</Button>
        {programsData.map((program) => {
          return <ProgramCard {...program} key={program._id} />
        })}
      </ProgramsContainer>
    </>
  )
}

export default ProgramsPage
