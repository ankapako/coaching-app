import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components/macro'

//import { useDispatch, useSelector } from 'react-redux'

//import { fetchWorkoutPrograms, postNewProgram } from '../reducers/exercises'
const Input = styled.input`
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding: 6px 4px;
  width: 100%;
  margin-bottom: 10px;
  ::placeholder {
    color: lightgrey;
  }
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`

const AddNewWeek = () => {
  const [newProgramName, setNewProgramName] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    setNewProgramName('')
  }

  return (
    <Form onSubmit={handleFormSubmit} className="add-new-exercise-form">
      <Form.Label>Exercise name</Form.Label>
      <Input
        id="program-name"
        type="text"
        placeholder="add program name"
        value={newProgramName}
        onChange={(event) => setNewProgramName(event.target.value)}
      />
    </Form>
  )
}

export default AddNewWeek
