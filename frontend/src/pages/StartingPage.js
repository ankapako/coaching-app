import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const StartingPage = () => {
  return (
    <>
      <h2>Hello user</h2>
      <Link to="/exercises">
        <Button color="teal">Exercises</Button>
      </Link>
      <Link to="/programs">
        <Button color="pink">Programs</Button>
      </Link>
      <Link to="/coachprofile">
        <Button color="blue">Profile</Button>
      </Link>
    </>
  )
}

export default StartingPage
