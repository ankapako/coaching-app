import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components/macro'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

import todos, { fetchTodos } from '../reducers/todos'

const Container = styled.div``

const TodoForm = styled.form`
  @media (min-width: 768px) {
    display: flex;
    width: 280px;
    margin: 10px 20px 20px 20px;
  }

  @media (min-width: 1024px) {
    width: 450px;
    font-size: 20px;
  }
`
const Input = styled.textarea`
  border: none;
  border-radius: 2px;
  width: 100%;
  background-color: #eeeeee;
`
const ButtonStyle = styled.button`
  font-family: 'Ubuntu', sans-serif;
  font-size: 14px;
  line-height: 2;
  border-radius: 10px;
  border: none;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: #ffffff;
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
    <Container>
      <TodoForm onSubmit={handleFormSubmit} className="todo-form">
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-field"
          placeholder="Add a new task"
          rows="1"
        />
        <Button type="submit" variant="info">
          ADD
        </Button>
      </TodoForm>
      {items &&
        items.map((todo) => (
          <ListGroup.Item key={todo._id} className="list-group">
            <ul>
              <li className="todo-text">{todo.description}</li>
            </ul>
            <ButtonStyle
              onClick={() => deleteTodo(todo._id)}
              className="delete-button"
            >
              ✔
            </ButtonStyle>
          </ListGroup.Item>
        ))}
    </Container>
  )
}

export default TodoList
