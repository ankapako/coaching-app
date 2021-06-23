import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import uniqid from 'uniqid'

import { fetchExercises } from '../reducers/exercises'

const New = () => {
  const dispatch = useDispatch()

  // const loading = useSelector((store) => store.exercises.loading)

  const fetchExe = () => {
    dispatch(fetchExercises())
    setColumns(columnsFromBackend)
  }
  const exercisesData = useSelector((store) => store.exercises.exercisesData)

  const columnsFromBackend = {
    [uniqid()]: {
      name: 'New workout program',
      items: [],
    },
    [uniqid()]: {
      name: 'Select exercises',
      items: exercisesData,
    },
  }

  const [columns, setColumns] = useState([])

  console.log(exercisesData)

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      })
    }
  }

  return (
    <>
      <button onClick={fetchExe}>Create a new workout</button>
      <div className="drag-drop">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="drag-drop-column" key={columnId}>
                <h2>{column.name}</h2>
                <div>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? 'lightblue'
                              : 'lightgrey',
                            padding: 4,
                            width: 350,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item._id}
                                draggableId={item._id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 0 8px 0',
                                        minHeight: '50px',
                                        backgroundColor: snapshot.isDragging
                                          ? '#263B4A'
                                          : '#456C86',
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <div className="exercise-card-new">
                                        <h4>{item.name}</h4>
                                        <p>{item.category}</p>
                                        <p>{item.targetMuscles}</p>
                                        <input
                                          type="text"
                                          placeholder="add sets"
                                        />
                                        <input
                                          type="text"
                                          placeholder="add reps"
                                        />
                                        <input
                                          type="text"
                                          placeholder="add weight"
                                        />
                                        <input
                                          type="text"
                                          placeholder="add rest"
                                        />
                                      </div>
                                    </div>
                                  )
                                }}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
            )
          })}
        </DragDropContext>
      </div>
      <button>Add</button>
    </>
  )
}

export default New
