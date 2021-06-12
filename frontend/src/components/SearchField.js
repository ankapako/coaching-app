import React, { useState } from 'react'
import styled from 'styled-components/macro'

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 3px;
`

const SearchField = () => {
  const [search, setSearch] = useState('')
  return (
    <Input
      type="text"
      placeholder="Search"
      onChange={(event) => {
        setSearch(event.target.value)
      }}
    />
  )
}

export default SearchField
