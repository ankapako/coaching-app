import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Button from 'react-bootstrap/Button'

import TodoList from '../components/TodoList'

const Container = styled.div`
  margin: 18px;
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
`
const ButtonContainer = styled.div``

const ButtonText = styled.h2`
  font-size: 20px;
`

const StartingPage = () => {
  return (
    <>
      <Container>
        <TodoList />
      </Container>
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
