import React, { useState } from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components/macro'

const InformationContainer = styled.div`
  display: flex;
  margin: 5px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

const ProfilePage = () => {
  const [coachInfo, setCoachInfo] = useState('')
  return (
    <>
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
    </>
  )
}

export default ProfilePage
