import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 5px;
  padding: 20px;
  border: 2px solid blue;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
`

const ProfilePage = () => {
  return (
    <Container>
      <h2>profile page</h2>
    </Container>
  )
}

export default ProfilePage
