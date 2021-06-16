import React from 'react'
import styled from 'styled-components/macro'

const Input = styled.input`
  width: 95%;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
`

const SearchExercises = ({ setSearchValue }) => {
  const search = (e) => {
    setSearchValue(e.target.value)
  }

  return <Input type="text" placeholder="Search" onChange={search} />
}

export default SearchExercises
