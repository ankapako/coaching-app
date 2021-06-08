import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components/macro'

import { fetchSingleProgram } from '../reducers/exercises'

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

const ProgramCard = ({ name }) => {
  const dispatch = useDispatch()
  const fetchPrograms = () => {
    dispatch(fetchSingleProgram(name))
  }
  return (
    <Card>
      <Link to={`/program/${name}`}>
        <Button onClick={fetchPrograms}>{name}</Button>
      </Link>
    </Card>
  )
}
export default ProgramCard
