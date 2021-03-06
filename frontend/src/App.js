import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import StartingPage from './pages/StartingPage'
import ExercisesPage from './pages/ExercisesPage'
import CreateProgramTool from './pages/CreateProgramTool'
import ClientsPage from './pages/ClientsPage'
import About from './pages/About'

import exercises from './reducers/exercises'
import MyHeader from './components/MyHeader'
import todos from './reducers/todos'

const reducer = combineReducers({
  exercises: exercises.reducer,
  todos: todos.reducer,
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MyHeader />
        <Switch>
          <Route exact path="/" component={StartingPage} />
          <Route path="/exercises" component={ExercisesPage} />
          <Route path="/createprogram" component={CreateProgramTool} />
          <Route path="/clients" component={ClientsPage} />
          <Route path="/about" component={About} />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default App
