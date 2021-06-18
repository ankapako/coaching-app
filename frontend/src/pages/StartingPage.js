import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'
import styled from 'styled-components/macro'
import Button from 'react-bootstrap/Button'

import TodoList from '../components/TodoList'
import dumbbell from '../icons/dumbbell.svg'
import whistle from '../icons/quick.svg'

const Container = styled.div`
  margin: 15px;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Icon = styled.img`
  width: 40px;
  filter: invert(93%) sepia(93%) saturate(28%) hue-rotate(125deg) brightness(108%) contrast(106%);
`

const StartingPage = () => {
  const [value, onChange] = useState(new Date())
  return (
    <>
      <Container>
        <TodoList />
      </Container>
      <ButtonContainer>
        <Link to="/exercises">
          <Button variant="primary" size="lg" className="starting-page-button">
            <Icon src={dumbbell} alt="dubbell" />
            <p>exercises</p>
          </Button>
        </Link>
        <Link to="/createprogram">
          <Button variant="primary" size="lg" className="starting-page-button">
            <Icon src={whistle} alt="whistle" />
            <p>programs</p>
          </Button>
        </Link>
      </ButtonContainer>
      <Container>
        <Calendar onChange={onChange} value={value} />
      </Container>
    </>
  )
}

export default StartingPage
