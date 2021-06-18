import React, { useState } from 'react'
//import { useDispatch, useSelector } from 'react-redux'

//import { fetchWorkoutPrograms, postNewProgram } from '../reducers/exercises'

const AddWorkout = ({ setNewWorkout }) => {
  const [fields, setFields] = useState([{ value: null }])

  const handleChange = (i, event) => {
    const values = [...fields]
    values[i].value = event.target.value
    setFields(values)
    setNewWorkout(event.target.value)
  }

  const handleAdd = () => {
    const values = [...fields]
    values.push({ value: null })
    setFields(values)
  }

  const handleRemove = (i) => {
    const values = [...fields]
    values.splice(i, 1)
    setFields(values)
  }

  return (
    <div className="App">
      <label>Add exercise</label>

      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type="text"
              placeholder="Enter text"
              value={field.value || ''}
              onChange={(e) => handleChange(idx, e)}
            />
            <button type="button" onClick={() => handleAdd()}>
              +
            </button>
            <button type="button" onClick={() => handleRemove(idx)}>
              X
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default AddWorkout
