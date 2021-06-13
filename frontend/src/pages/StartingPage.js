import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import FeedComponent from '../components/FeedComponent'
import TodoList from '../components/TodoList'
import dumbbell from '../icons/dumbbell.svg'
import quick from '../icons/quick.svg'
import whistle from '../icons/whistle.svg'

const Title = styled.h2`
  text-align: center;
`

const Container = styled.div`
  margin: 15px;
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
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
  text-align: center;
`

const ExercisesLink = styled.div`
  width: 95px;
  height: 95px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #67d29d;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`
const ProgramsLink = styled.div`
  width: 95px;
  height: 95px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ea6a9f;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ProfileLink = styled.div`
  width: 95px;
  height: 95px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #6780ff;
  border-radius: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled.img`
  width: 50px;
  padding-top: 20px;
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
          <ExercisesLink>
            <Icon src={dumbbell} alt="dubbell" />
            <p>exercises</p>
          </ExercisesLink>
        </Link>
        <Link to="/programs">
          <ProgramsLink>
            <Icon src={quick} alt="timer" />
            <p>programs</p>
          </ProgramsLink>
        </Link>
        <Link to="/coachprofile">
          <ProfileLink>
            <Icon src={whistle} alt="whistle" />
            <p>profile</p>
          </ProfileLink>
        </Link>
      </ButtonContainer>
      <Container>
        <FeedComponent />
      </Container>
    </>
  )
}

export default StartingPage
