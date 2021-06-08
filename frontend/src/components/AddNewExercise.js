import React from 'react'
import { Button, Dropdown, Form, Modal } from 'semantic-ui-react'


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
  }
]

const AddNewExercise = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Add new</Button>}
    >
      <Modal.Header>Add new exercises</Modal.Header>
      <Modal.Content image>
        <Form>
          <Form.Field >
            <label>Exercise name</label>
            <input placeholder="First Name" />
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
            <input placeholder="Instructions" />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input placeholder="Image url" />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button type="submit" color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button type="submit" onClick={() => setOpen(false)} positive>
          Add new
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AddNewExercise
