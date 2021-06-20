import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import Card from 'react-bootstrap/Card'

import exercises from '../reducers/exercises'

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
  background-color: #ffffff;
`

const ExerciseCard = ({
  name,
  category,
  targetMuscles,
  instructions,
  img,
  _id,
}) => {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(true)

  const handleToggle = () => {
    setIsActive(!isActive)
  }

  const deleteExercise = (id) => {
    fetch(`https://coaching-app-db.herokuapp.com/exercises/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => dispatch(exercises.actions.removeExercise(json.id)))
  }
  return (
    <Card>
      <Button onClick={() => deleteExercise(_id)} className="delete-button">
        delete
      </Button>
      <Image src={img} alt="exercise" />
      <Card.Title>{name} </Card.Title>
      <Card.Subtitle>{category}</Card.Subtitle>
      <Card.Subtitle>{targetMuscles}</Card.Subtitle>
      <Button type="button" onClick={handleToggle}>
        +
      </Button>
      <Card.Text className={isActive ? 'hidden' : 'display'}>
        {instructions}
      </Card.Text>
    </Card>
  )
}

export default ExerciseCard
