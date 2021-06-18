import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import uniqid from 'uniqid'
import styled from 'styled-components/macro'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'

import AddWorkout from '../components/NewWorkout'
import AddNewWeek from '../components/AddNewWeek'

import {
  fetchExercises,
  fetchWorkoutPrograms,
  postNewProgram,
} from '../reducers/exercises'

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

const CreateProgramTool = () => {
  const exercisesData = useSelector((store) => store.exercises.exercisesData)
  const workoutsData = useSelector((store) => store.exercises.workoutsData)

  const dispatch = useDispatch()

  const [place, setPlace] = useState(exercisesData)
  const [newProgramName, setNewProgramName] = useState('')
  const [newWeek, setNewWeek] = useState(1)
  const [newWorkout, setNewWorkout] = useState([])

  useEffect(() => {
    dispatch(fetchExercises())
    dispatch(fetchWorkoutPrograms())
  }, [dispatch])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    dispatch(postNewProgram(newProgramName, newWeek, newWorkout))
    setNewProgramName('')
  }
  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const items = Array.from(place)
    const [renderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, renderedItem)

    setPlace(items)
  }

  console.log(workoutsData)
  return (
    <Container>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="workout-items">
          {(provided) => (
            <Row {...provided.droppableProps} ref={provided.innerRef}>
              {provided.placeholder}
              <Col>
                <Form onSubmit={handleFormSubmit}>
                  <Draggable draggableId={uniqid()} index={1}>
                    {(provided) => (
                      <ListGroup
                        sm={8}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="add-new-workout-form"
                      >
                        <Form.Label>Exercise name</Form.Label>
                        <Input
                          id="program-name"
                          type="text"
                          placeholder="Program name"
                          value={newProgramName}
                          onChange={(event) =>
                            setNewProgramName(event.target.value)
                          }
                        />
                        <AddNewWeek setNewWeek={setNewWeek} />

                        <AddWorkout setNewWorkout={setNewWorkout} />
                      </ListGroup>
                    )}
                  </Draggable>
                  <button type="submit">ADD</button>
                </Form>
              </Col>
              <Col>
                {exercisesData &&
                  exercisesData.map((exercise, index) => {
                    return (
                      <Draggable
                        key={exercise._id}
                        draggableId={exercise._id}
                        index={index}
                      >
                        {(provided) => (
                          <Card
                            sm={4}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <div>{exercise.name}</div>
                          </Card>
                        )}
                      </Draggable>
                    )
                  })}
              </Col>
            </Row>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  )
}

export default CreateProgramTool
