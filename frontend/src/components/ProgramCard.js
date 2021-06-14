import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import ListGroup from 'react-bootstrap/ListGroup'

const ProgramCard = ({ name }) => {
  return (
    <Link to={`/program/${name}`}>
      <ListGroup>
        <ListGroup.Item>{name}</ListGroup.Item>
      </ListGroup>
    </Link>
  )
}
export default ProgramCard
