import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

import FeedExampleContentDateShortHand from '../components/FeedExampleContentDateShorthand'

const Container = styled.div`
  margin: 5px;
  padding: 20px;
  border: 2px solid pink;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
`

const StartingPage = () => {
  return (
    <>
     <h2>Hello user</h2>
      <Container>
        <h2>todo</h2>
      </Container>
      <Link to="/exercises">
        <Button color="teal">Exercises</Button>
      </Link>
      <Link to="/programs">
        <Button color="pink">Programs</Button>
      </Link>
      <Link to="/coachprofile">
        <Button color="blue">Profile</Button>
      </Link>
      <Container>
        <FeedExampleContentDateShortHand />
      </Container>
    </>
  )
}

export default StartingPage
