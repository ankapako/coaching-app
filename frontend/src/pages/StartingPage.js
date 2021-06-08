import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components/macro'

import FeedComponent from '../components/FeedComponent'
import TodoList from '../components/TodoList'

const Title = styled.h2`
  text-align: center;
`

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  @media (min-width: 767px) {
    width: 40%;
  }
`
const ButtonContainer = styled.div`
  text-align: center;
  margin: 10px 0;
`

const StartingPage = () => {
  return (
    <>
      <Title>Hello user</Title>
      <Container>
        <TodoList />
      </Container>
      <ButtonContainer>
        <Link to="/exercises">
          <Button color="teal">Exercises</Button>
        </Link>
        <Link to="/programs">
          <Button color="pink">Programs</Button>
        </Link>
        <Link to="/coachprofile">
          <Button color="blue">Profile</Button>
        </Link>
      </ButtonContainer>
      <Container>
        <FeedComponent />
      </Container>
    </>
  )
}

export default StartingPage
