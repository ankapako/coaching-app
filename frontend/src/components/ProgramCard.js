import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'

const ProgramCard = ({ name }) => (
  <Card>
    <Link to={`/program/${name}`}>
      <Card.Content header={name} />
    </Link>
  </Card>
)

export default ProgramCard
