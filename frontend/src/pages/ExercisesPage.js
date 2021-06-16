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

const Container = styled.div`
  background-color: #92d2d3;
  text-align: center;
  margin: auto;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const AddNewButton = styled.button`
  font-family: 'Ubuntu', sans-serif;
  margin: 5px;
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
  border-radius: 5px;
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
    <Container>
      <SearchExercises setSearchValue={setSearchValue} />
      <ExercisesContainer>
        <ButtonContainer>
          <AddNewButton type="button" onClick={handleShow}>
            Add new
          </AddNewButton>
        </ButtonContainer>
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
    </Container>
  )
}

export default ExercisesPage
