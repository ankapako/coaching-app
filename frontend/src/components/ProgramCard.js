import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Button = styled.button`
  font-family: 'Ubuntu', sans-serif;
  margin: 0 5px;
  width: 100%;
  font-weight: 400;
  font-size: 15px;
  line-height: 2;
  border-radius: 4px;
  letter-spacing: 1px;
  border: 1px solid grey;
  cursor: pointer;
  box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);
`

const ProgramCard = ({ name }) => {
  return (
      <Link to={`/program/${name}`}>
        <Button>{name}</Button>
      </Link>
  )
}
export default ProgramCard
