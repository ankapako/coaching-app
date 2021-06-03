import React from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components/macro'

const InformationContainer = styled.div`
  margin: 5px;
  padding: 20px;
  border: 2px solid blue;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
`

const ProfilePage = () => {
  return (
    <>
      <h2>profile page</h2>
      <InformationContainer>
        <p>coach info</p>
        <Image src="https://picsum.photos/200" size="small" circular />
      </InformationContainer>
    </>
  )
}

export default ProfilePage
