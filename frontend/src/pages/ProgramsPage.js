import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components/macro'

import { fetchPrograms } from '../reducers/exercises'

import ProgramCard from '../components/ProgramCard'
import SearchField from '../components/SearchField'

const ProgramPageBackGround = styled.div`
  background-color: #ea6a9f;
`

const SearchContainer = styled.div`
  text-align: center;
`

const ButtonContainer = styled.div`
  margin: 10px;
`

const ProgramsContainer = styled.div`
  margin: 5px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

const ProgramsPage = () => {
  const programsData = useSelector((store) => store.exercises.programsData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPrograms())
  }, [dispatch])

  console.log(programsData)

  return (
    <ProgramPageBackGround>
      <SearchContainer>
        <SearchField />
        <ButtonContainer>
          <Button>Filter</Button>
          <Button>Sort</Button>
          <Button>Search</Button>
        </ButtonContainer>
      </SearchContainer>
      <ProgramsContainer>
        <Button>add new</Button>
        {programsData.map((program) => {
          return <ProgramCard {...program} key={program._id} />
        })}
      </ProgramsContainer>
    </ProgramPageBackGround>
  )
}

export default ProgramsPage
