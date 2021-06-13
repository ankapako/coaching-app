import React, { useState } from 'react'
import styled from 'styled-components/macro'

const ProfilePageContainer = styled.div`
  background-color: #6780ff;
  height: 100vh;
  text-align: center;
`
const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  padding: 20px;
  padding-bottom: 150px;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`
const Image = styled.img`
  border-radius: 50%;
  width: 120px;
`

const ProfilePage = () => {
  const [coachInfo, setCoachInfo] = useState('')
  return (
    <ProfilePageContainer>
      <h2>profile page</h2>
      <InformationContainer>
        <textarea
          name="description"
          placeholder="Coach info"
          rows="5"
          value={coachInfo}
          onChange={(e) => setCoachInfo(e.target.value)}
        />
        <Image src="https://picsum.photos/200" size="small" circular />
      </InformationContainer>
    </ProfilePageContainer>
  )
}

export default ProfilePage
