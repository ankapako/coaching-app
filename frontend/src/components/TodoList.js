import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components/macro'
import ListGroup from 'react-bootstrap/ListGroup'

import todos, { fetchTodos } from '../reducers/todos'

const TodoForm = styled.form`
  display: flex;
  align-items: center;
  @media (min-width: 767px) {
    width: 40%;
  }
`
const Input = styled.textarea`
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
  const items = useSelector((store) => store.todos.todosData)

  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleFormSubmit = (e) => {
    e.preventDefault()

    fetch('https://coaching-app-db.herokuapp.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: value,
      }),
    })
      .then((res) => res.json())
      .then((json) => dispatch(todos.actions.addTodo(json)))
    setValue('')
  }

  const deleteTodo = (id) => {
    fetch(`https://coaching-app-db.herokuapp.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((json) => dispatch(todos.actions.removeTodo(json.id)))
      .then(() => dispatch(fetchTodos()))
  }

  return (
    <>
      <TodoForm onSubmit={handleFormSubmit} className="todo-form">
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-field"
          placeholder="Add todo!"
          rows="1"
        />
        <Button type="submit" className="add-todo-button">
          ADD
        </Button>
      </TodoForm>
      {items &&
        items.map((todo) => (
          <ListGroup.Item key={todo._id} className="list-group">
            <p className="todo-text">{todo.description}</p>
            <Button
              onClick={() => deleteTodo(todo._id)}
              className="delete-button"
            >
              done
            </Button>
          </ListGroup.Item>
        ))}
    </>
  )
}

export default TodoList
