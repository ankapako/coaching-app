import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navbar from 'react-bootstrap/Navbar'

import logo from '../images/PTAKH_valkoinen.png'

const Image = styled.img`
  width: 80px;
`

const Title = styled.h1`
  font-size: 18px;
  color: #ffffff;
`

const MyHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <Image src={logo} alt="logo" />
      </Link>
      <Title>coaching app</Title>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
        <Link to="/exercises" className="nav-link">Exercises</Link>
        <Link to="/programs" className="nav-link">Programs</Link>
        <Link to="/coachprofile" className="nav-link">Profile</Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MyHeader
