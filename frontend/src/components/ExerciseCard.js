import React, { useState } from 'react'
import styled from 'styled-components/macro'

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: #e5e5e5;
  margin: 10px 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`
const Image = styled.img`
  width: 100%;
  float: left;
  margin-right: 10px;
`

const ExerciseCard = ({ name, category, targetMuscles, instructions, img }) => {
  const [isActive, setActive] = useState(true)

  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <Card>
      <div>
        <Image src={img} alt="exercise" />
      </div>
      <div>
        <h3>{name} </h3>
        <button type="button" onClick={handleToggle}>
          Show instructions
        </button>
        <div className={isActive ? 'hidden' : 'display'}>
          <p>{category}</p>
          <p>{targetMuscles}</p>
          <p>{instructions}</p>
        </div>
      </div>
    </Card>
  )
}

export default ExerciseCard
