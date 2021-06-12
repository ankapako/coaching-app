import React from 'react'
import styled from 'styled-components/macro'

const TodoForm = styled.form`
  @media (min-width: 767px) {
    width: 40%;
  }
`

const ListedTodos = styled.div`
`

const TodoList = () => {
  return (
    <>
      <TodoForm>Todo</TodoForm>
      <ListedTodos>You have done all your tasks!</ListedTodos>
    </>
  )
}

export default TodoList
