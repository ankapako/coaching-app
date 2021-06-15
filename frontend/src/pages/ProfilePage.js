import React from 'react'
import styled from 'styled-components/macro'
import EasyEdit, { Types } from 'react-easy-edit'

const ProfilePageContainer = styled.div`
  background-color: #fcd581;
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
  const save = (value) => {
    alert(value)
  }
  const cancel = () => {
    alert('Cancelled')
  }

  return (
    <ProfilePageContainer>
      <h2>profile page</h2>
      <InformationContainer>
        <EasyEdit
          type={Types.TEXT}
          onSave={save}
          onCancel={cancel}
          saveButtonLabel="Save"
          cancelButtonLabel="Cancel"
          attributes={{ name: 'awesome-input', id: 1 }}
          instructions="Add your information"
        />
        <Image src="https://via.placeholder.com/150" />
      </InformationContainer>
    </ProfilePageContainer>
  )
}

export default ProfilePage
