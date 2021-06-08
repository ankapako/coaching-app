import React from 'react'
import styled from 'styled-components/macro'

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #E5E5E5;
  margin: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  display: flex;
  justify-content: space-between;
`

const ExerciseCard = ({ name, targetMuscles, instructions }) => (
  <Card>
    <img src="https://picsum.photos/100/50" alt="placeholderimage" />
    <div>
      <h3>{name} </h3>
      <p>{targetMuscles}</p>
      <p>{instructions}</p>
    </div>
  </Card>
)

export default ExerciseCard
