import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import logo from '../images/PTAKH_valkoinen.png'

const Header = styled.header`
  padding: 40px;
  display: flex;
  background: #050708;
  opacity: 80%;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Image = styled.img`
  width: 48%;
  float: left;
  @media (min-width: 767px) {
    width: 25%;
  }
`

const Title = styled.h1`
  font-size: 9px;
  color: #FFFFFF;
  font-weight: 200;
  letter-spacing: 1px;
  position: relative;
  top: 27px;
  right: 35px;
`

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
`

const MyHeader = () => {
  return (
    <>
      <Header>
        <Link to="/">
          <Image src={logo} alt="logo" />
          <Title>coaching app</Title>
        </Link>
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
