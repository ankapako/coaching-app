import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import StartingPage from './pages/StartingPage'
import ExercisesPage from './pages/ExercisesPage'
import ProgramsPage from './pages/ProgramsPage'
import ProfilePage from './pages/ProfilePage'

import exercises from './reducers/exercises'
import MyHeader from './components/MyHeader'

const reducer = combineReducers({
  exercises: exercises.reducer,
})

const store = configureStore({ reducer })

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <MyHeader />
        <Switch>
          <Route exact path="/" component={StartingPage}/>
          <Route path="/exercises" component={ExercisesPage}/>
          <Route path="/programs" component={ProgramsPage}/>
          <Route path="/coachprofile" component={ProfilePage}/>
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default App
