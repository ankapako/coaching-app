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
  justify-content: space-between;
`

const PlusButton = styled.button`
  font-family: 'Ubuntu', sans-serif;
  font-size: 20px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
`

const Content = styled.div`
  padding: 20px 10px;
  border-top: 1px dotted lightgrey;
`

const SubTitle = styled.h6`
  margin-top: 5px;
  text-align: left;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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
        <ButtonContainer>
          <Button variant="outline-success" size="sm">
            edit
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => deleteExercise(_id)}
          >
            delete
          </Button>
        </ButtonContainer>
        <Image src={img} alt="exercise-instructions-imagecd" />
        <SubTitle>Category:</SubTitle>
        <Card.Subtitle className="subtitle"> {category}</Card.Subtitle>
        <SubTitle>Target muscles:</SubTitle>
        <Card.Subtitle className="subtitle"> {targetMuscles}</Card.Subtitle>
        <SubTitle>Instructions: </SubTitle>
        <Card.Text className="instructions">{instructions}</Card.Text>
      </Content>
    </Card>
  )
}

export default ExerciseCard
