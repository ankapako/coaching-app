import React from 'react'
import { Card } from 'semantic-ui-react'

const ExerciseCard = ({ name, targetMuscles, instructions }) => (
    <Card>
      <Card.Content header={name} />
      <Card.Content description={targetMuscles} />
      <Card.Content description={instructions} />
    </Card>
)

export default ExerciseCard
