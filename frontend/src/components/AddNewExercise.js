import React, { useState } from 'react'
import { useDispatch, batch } from 'react-redux'
import { Button, Dropdown, Form, Modal } from 'semantic-ui-react'

import exercises, { postNewExercise } from '../reducers/exercises'

const muscleOptions = [
  {
    key: 'biceps',
    text: 'biceps',
    value: 'biceps',
  },
  {
    key: 'triceps',
    text: 'triceps',
    value: 'triceps',
  },
  {
    key: 'gluteus',
    text: 'gluteus',
    value: 'gluteus',
  },
]

const categoryOptions = [
  {
    key: 'body weight',
    text: 'body weight',
    value: 'body weight',
  },
  {
    key: 'single-joint',
    text: 'single-joint',
    value: 'single-joint',
  },
  {
    key: 'multi-joint',
    text: 'multi-joint',
    value: 'multi-joint',
  },
]

const muscleGroupOptions = [
  {
    key: 'upper-body pushing',
    text: 'upper-body pushing',
    value: 'upper-body pushing',
  },
  {
    key: 'upper-body pulling',
    text: 'upper-body pulling',
    value: 'upper-body pulling',
  },
  {
    key: 'lower-body pushing',
    text: 'lower-body pushing',
    value: 'lower-body pushing',
  },
  {
    key: 'lower-body pulling',
    text: 'lower-body pulling',
    value: 'lower-body pulling',
  },
  {
    key: 'middle-body',
    text: 'middle-body',
    value: 'middle-body',
  },
]

const AddNewExercise = () => {
  const [open, setOpen] = useState(false)
  const [newExerciseName, setNewExerciseName] = useState('')
  const [newInstructions, setNewInstructions] = useState('')
  const [newTargetMuscles, setNewTargetMuscles] = useState([])
  const dispatch = useDispatch()

  const handleFormSubmit = (event) => {
    event.preventDefault()
    batch(() => {
      dispatch(
        exercises.actions.setExercisesData(
          newExerciseName,
          newInstructions,
          newTargetMuscles
        )
      )

      dispatch(
        postNewExercise(newExerciseName, newInstructions, newTargetMuscles)
      )
    })
    setNewExerciseName('')
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add new</Button>}
    >
      <Modal.Header>Add new exercises</Modal.Header>
      <Modal.Content image>
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <label htmlFor="exercise-name">Exercise name</label>
            <input
              id="exercise-name"
              type="text"
              placeholder="First Name"
              value={newExerciseName}
              onChange={
                (event) => setNewExerciseName(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Target muscles</label>
            <Dropdown
              multiple
              search
              selection
              closeOnChange
              options={muscleOptions}
              placeholder="Choose"
              value={newTargetMuscles}
              onChange={(event) => setNewTargetMuscles(newTargetMuscles => [...newTargetMuscles, event.target.value])}
            />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <Dropdown
              multiple
              search
              selection
              closeOnChange
              options={categoryOptions}
              placeholder="Choose"
            />
          </Form.Field>
          <Form.Field>
            <label>Muscle group</label>
            <Dropdown
              multiple
              search
              selection
              closeOnChange
              options={muscleGroupOptions}
              placeholder="Choose"
            />
          </Form.Field>
          <Form.Field>
            <label>Instructions</label>
            <input
              placeholder="Instructions"
              value={newInstructions}
              onChange={(event) => setNewInstructions(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input placeholder="Image url" />
          </Form.Field>

          <Modal.Actions>
            <Button type="submit" color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Form.Button content="Submit" />
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default AddNewExercise
