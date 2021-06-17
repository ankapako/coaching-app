import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { fetchExercises } from '../reducers/exercises'
import { fetchWorkoutPrograms } from '../reducers/exercises'

const CreateProgramTool = () => {
  const exercisesData = useSelector((store) => store.exercises.exercisesData)
  const workoutsData = useSelector((store) => store.exercises.workoutsData)
  const dispatch = useDispatch()
  const [place, setPlace] = useState(exercisesData)

  useEffect(() => {
    dispatch(fetchExercises())
    dispatch(fetchWorkoutPrograms())
  }, [dispatch])

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
      <Row>
        <Col sm={8}>program here</Col>
        <ul>
          <li></li>
        </ul>

        <Col sm={4}>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="exerecise-items">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {provided.placeholder}
                  {exercisesData &&
                    exercisesData.map((exercise, index) => {
                      return (
                        <Draggable
                          key={exercise._id}
                          draggableId={exercise._id}
                          index={index}
                        >
                          {(provided) => (
                            <li
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <div>{exercise.name}</div>
                            </li>
                          )}
                        </Draggable>
                      )
                    })}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateProgramTool
