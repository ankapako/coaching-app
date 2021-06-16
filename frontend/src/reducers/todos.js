import { createSlice } from '@reduxjs/toolkit'

const todos = createSlice({
  name: 'todos',
  initialState: {
    todosData: [],
  },
  reducers: {
    setTodosData: (store, action) => {
      store.todosData = action.payload
    },
    removeTodo: (store, action) => {
      const decreasedItems = store.todosData.filter(
        (todo) => todo.id !== action.payload
      )
      store.todosData = decreasedItems
    },
    addTodo: (store, action) => {
      store.todosData = [...store.todosData, action.payload]
    },
  },
})

export const fetchTodos = () => {
  return (dispatch) => {
    fetch('https://coaching-app-db.herokuapp.com/todos')
      .then((res) => res.json())
      .then((json) => {
        dispatch(todos.actions.setTodosData(json))
      })
  }
}

export default todos
