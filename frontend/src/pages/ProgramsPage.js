import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import { fetchPrograms } from '../reducers/exercises'

import ProgramCard from '../components/ProgramCard'

const ProgramPageBackGround = styled.div`
  background-color: #DB87CC;
  height: 100vh;
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
const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
`

const Button = styled.button`
  font-family: 'Ubuntu', sans-serif;
  margin: 0 5px;
  width: 100px;
  font-weight: 400;
  font-size: 15px;
  line-height: 2;
  border-radius: 4px;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);
`
const AddNewButton = styled.button`
  font-family: 'Ubuntu', sans-serif;
  position: relative;
  left: 115px;
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

const ProgramsPage = () => {
  const programsData = useSelector((store) => store.exercises.programsData)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPrograms())
  }, [dispatch])

  return (
    <ProgramPageBackGround>
      <SearchContainer>
        <Input type="text" placeholder="Search" />
        <ButtonContainer>
          <Button>Filter</Button>
          <Button>Sort</Button>
          <Button>Search</Button>
        </ButtonContainer>
      </SearchContainer>
      <ProgramsContainer>
        <AddNewButton>add new</AddNewButton>
        {programsData.map((program) => {
          return <ProgramCard {...program} key={program._id} />
        })}
      </ProgramsContainer>
    </ProgramPageBackGround>
  )
}

export default ProgramsPage
