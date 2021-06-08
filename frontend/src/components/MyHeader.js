import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import logo from '../images/PTAKH_valkoinen.png'

const Header = styled.header`
  padding: 40px;
  text-align: center;
  background: #050708;
  opacity: 80%;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Image = styled.img`
  width: 46%;
  float: left;
  @media (min-width: 767px) {
    width: 25%;
  }
`

const Title = styled.h1`
  font-size: 20px;
`

const StyledMenu = styled.div`
  display: flex;
`

const MyHeader = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <Image src={logo} alt="logo" />
        </Link>
        <Title>TITLE</Title>
        <StyledMenu>
          <Link to="/exercises">Exercises</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/coachprofile">Profile</Link>
        </StyledMenu>
      </Header>
    </>
  )
}
export default MyHeader
