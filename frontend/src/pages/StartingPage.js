import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'
import styled from 'styled-components/macro'
import Button from 'react-bootstrap/Button'

import TodoList from '../components/TodoList'

const TodoContainer = styled.div`
  margin: 20px;
  padding: 20px 40px;
  letter-spacing: 1px;
  background: #ffffff;

  @media (min-width: 768px) {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
  }
`

const ButtonContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`
const ButtonText = styled.h2`
  font-size: 20px;
  padding: 10px 20px;
  border: 1px solid #ffffff;
  backdrop-filter: brightness(70%);

`

const StartingPage = () => {
  const [value, onChange] = useState(new Date())

  return (
    <>
      <TodoContainer>
        <Calendar onChange={onChange} value={value} className="calendar" />
        <TodoList />
      </TodoContainer>
      <ButtonContainer>
        <Link to="/exercises" className="link">
          <Button className="starting-page-button exercise-button">
            <ButtonText>exercises</ButtonText>
          </Button>
        </Link>
        <Link to="/createprogram" className="link">
          <Button className="starting-page-button programs-button">
            <ButtonText>programs</ButtonText>
          </Button>
        </Link>
        <Link to="/clients" className="link">
          <Button className="starting-page-button clients-button">
            <ButtonText>clients</ButtonText>
          </Button>
        </Link>
        <Link to="/about" className="link">
          <Button className="starting-page-button profile-button">
            <ButtonText>about</ButtonText>
          </Button>
        </Link>
      </ButtonContainer>
    </>
  )
}

export default StartingPage
