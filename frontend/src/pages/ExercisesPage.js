import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import CardColumns from 'react-bootstrap/CardColumns'
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'

import { fetchExercises } from '../reducers/exercises'

import ExerciseCard from '../components/ExerciseCard'
import AddNewExercise from '../components/AddNewExercise'
import SearchExercises from '../components/SearchExercises'

const SearchContainer = styled.div`
  text-align: center;
`
const ExercisesPageBackground = styled.div`
  background-color: #92d2d3;
`
const ButtonContainer = styled.div``

const Button = styled.button`
  font-family: 'Ubuntu', sans-serif;
  margin: 0 5px;
  width: 100px;
  font-weight: 400;
  font-size: 15px;
  line-height: 2;
  border-radius: 4px;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  box-shadow: 0 12px 35px 0 rgba(16, 39, 112, 0.25);
`
const AddNewButton = styled.button`
  font-family: 'Ubuntu', sans-serif;
  position: relative;
  left: 105px;
  margin: 0 5px;
  width: 90px;
  font-size: 12px;
  line-height: 2;
  border-radius: 4px;
  letter-spacing: 1px;
  border: 1px solid lightgrey;
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`

const ExercisesContainer = styled.div`
  margin: 5px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`

const ExercisesPage = () => {
  const [show, setShow] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [exercises, setExercises] = useState([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const exercisesData = useSelector((store) => store.exercises.exercisesData)
  const loading = useSelector((store) => store.exercises.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`https://coaching-app-db.herokuapp.com/exercise?name=${searchValue}`)
      .then((res) => res.json())
      .then((json) => setExercises(json))
  }, [searchValue])

  useEffect(() => {
    dispatch(fetchExercises())
  }, [dispatch])

  return (
    <ExercisesPageBackground>
      <SearchContainer>
        <SearchExercises setSearchValue={setSearchValue} />
        <ButtonContainer>
          <Button>Filter</Button>
          <Button>Sort</Button>
          <Button>Search</Button>
        </ButtonContainer>
      </SearchContainer>
      <ExercisesContainer>
        <AddNewButton type="button" onClick={handleShow}>
          Add new
        </AddNewButton>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>ADD NEW EXERCISE</Modal.Header>
          <AddNewExercise />
        </Modal>
        <div>
          {loading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </div>
        <CardColumns>
          {exercises &&
            exercises.map((exercise) => {
              return <ExerciseCard key={exercise._id} {...exercise} />
            })}
          {exercisesData &&
            exercisesData.map((exercise) => {
              return <ExerciseCard key={exercise._id} {...exercise} />
            })}
        </CardColumns>
      </ExercisesContainer>
    </ExercisesPageBackground>
  )
}

export default ExercisesPage
