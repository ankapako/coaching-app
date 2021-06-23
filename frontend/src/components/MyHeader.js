import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Navbar from 'react-bootstrap/Navbar'

const Title = styled.h1`
  margin: auto 10px;
  font-family: 'Courgette', cursive;
  letter-spacing: 1px;
  font-size: 18px;
  color: #ffffff;
`

const MyHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar"
    >
      <Link to="/">
        <Title>coaching app</Title>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle" />
      <Navbar.Collapse id="responsive-navbar-nav" className="nav-links">
        <Link to="/exercises" className="nav-link">
          Exercises
        </Link>
        <Link to="/createprogram" className="nav-link">
          Create program
        </Link>
        <Link to="/clients" className="nav-link">
          Clients
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/" className="nav-link">
          Log out
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default MyHeader
