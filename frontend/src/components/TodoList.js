import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import ListGroup from 'react-bootstrap/ListGroup'

import todos from '../reducers/todos'

const TodoForm = styled.form`
  display: flex;
  align-items: center;
  @media (min-width: 767px) {
    width: 40%;
  }
`
const Input = styled.input`
  border: 1px solid lightgrey;
  border-radius: 4px;

  width: 100%;
  ::placeholder {
    color: lightgrey;
  }
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`
const Button = styled.button`
  font-family: 'Ubuntu', sans-serif;
  font-size: 14px;
  line-height: 2;
  border-radius: 4px;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
`

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)

  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      description: value,
      isComplete: false,
    }

    dispatch(todos.actions.addTodo(newTodo))
    setValue('')
  }

  return (
    <>
      <TodoForm onSubmit={onFormSubmit} className="todo-form">
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-field"
          placeholder="Add todo!"
          rows="3"
        />
        <Button type="submit" className="add-todo-button">
          ADD
        </Button>
      </TodoForm>
      {items.map((todo) => (
        <ListGroup>
          <ListGroup.Item>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              className="checkbox"
            />
            <p className="todo-text">{todo.description}</p>
            <button
              onClick={() => dispatch(todos.actions.removeTodo(todo.id))}
              className="delete-button"
            >
              delete
            </button>
          </ListGroup.Item>
        </ListGroup>
      ))}
    </>
  )
}

export default TodoList
