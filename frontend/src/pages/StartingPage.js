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
`
const FlexTodoCalendar = styled.div`
  @media (min-width: 767px) {
    display: flex;
    margin: 10px 30px;
  }
`

const ButtonContainer = styled.div`
  @media (min-width: 767px) {
    display: flex;
    justify-content: space-around;
    margin: 10px 20px;
  }
`
const ButtonText = styled.h2`
  font-size: 20px;
`

const StartingPage = () => {
  const [value, onChange] = useState(new Date())
  return (
    <>
      <FlexTodoCalendar>
        <Calendar onChange={onChange} value={value} className="calendar" />
        <TodoContainer>
          <TodoList />
        </TodoContainer>
      </FlexTodoCalendar>
      <ButtonContainer>
        <Link to="/exercises">
          <Button className="starting-page-button exercise-button">
            <ButtonText>exercises</ButtonText>
          </Button>
        </Link>
        <Link to="/createprogram">
          <Button className="starting-page-button programs-button">
            <ButtonText>programs</ButtonText>
          </Button>
        </Link>
      </ButtonContainer>
    </>
  )
}

export default StartingPage
