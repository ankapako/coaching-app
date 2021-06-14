import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Card from 'react-bootstrap/Card'


const Image = styled.img`
  width: 100%;
  float: left;
  margin-right: 10px;
`

const ExerciseCard = ({ name, category, targetMuscles, instructions, img }) => {
  const [isActive, setIsActive] = useState(true)

  const handleToggle = () => {
    setIsActive(!isActive)
  }
  return (
    <Card>
      <Image src={img} alt="exercise" />
      <h3>{name} </h3>
      <button type="button" onClick={handleToggle}>
        Show instructions
      </button>
      <div className={isActive ? 'hidden' : 'display'}>
        <p>{category}</p>
        <p>{targetMuscles}</p>
        <p>{instructions}</p>
      </div>
    </Card>
  )
}

export default ExerciseCard
