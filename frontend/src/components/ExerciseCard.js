import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { fetchExercises } from '../reducers/exercises'

const Image = styled.img`
  width: 100%;
  margin-right: 10px;
`

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PlusButton = styled.button`
  font-family: 'Ubuntu', sans-serif;
  margin: 0 5px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
`

const Content = styled.div`
  padding: 20px 10px;
  border-top: 1px dotted lightgrey;
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
      .then((json) => dispatch(fetchExercises(json)))
  }

  return (
    <Card className="exercise-card">
      <ContentHeader>
        <Card.Title className="card-title">{name}</Card.Title>
        <PlusButton onClick={handleToggle}>+</PlusButton>
      </ContentHeader>
      <Content className={isActive ? 'hidden' : 'display'}>
        <Image src={img} alt="exercise-instructions-imagecd" />
        <h6>Category:</h6>
        <Card.Subtitle className="subtitle"> {category}</Card.Subtitle>
        <h6>Target muscles:</h6>
        <Card.Subtitle className="subtitle"> {targetMuscles}</Card.Subtitle>
        <h6>Instructions: </h6>
        <Card.Text className="instructions">{instructions}</Card.Text>
        <Button variant="outline-success" >
          edit
        </Button>
        <Button variant="outline-danger" onClick={() => deleteExercise(_id)}>
          delete
        </Button>
      </Content>
    </Card>
  )
}

export default ExerciseCard
