import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Card from 'react-bootstrap/Card'

const Image = styled.img`
  width: 100%;
  float: left;
  margin-right: 10px;
`
const Button = styled.button`
  font-family: 'Ubuntu', sans-serif;
  margin: 0 5px;
  font-size: 15px;
  line-height: 2;
  border-radius: 4px;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
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
      <Button type="button" onClick={handleToggle}>
        Show instructions
      </Button>
      <div className={isActive ? 'hidden' : 'display'}>
        <p>{category}</p>
        <p>{targetMuscles}</p>
        <p>{instructions}</p>
      </div>
    </Card>
  )
}

export default ExerciseCard
