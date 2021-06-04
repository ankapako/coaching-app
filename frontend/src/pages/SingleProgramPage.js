import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

import exercises from '../reducers/exercises'

const SingleProgramPage = () => {
  const { name } = useParams()
  const singleProgramData = useSelector(
    (store) => store.exercises.singleProgramData
  )

  const dispatch = useDispatch()

  useEffect(() => {
    fetch(`http://localhost:8081/programs/name/${name}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(exercises.actions.setSingleProgramData(json))
        console.log(json)
      })
  }, [name, dispatch])

  return (
    <Card>
      <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
      <Card.Content>
        <Card.Header>{singleProgramData.name}</Card.Header>
        <Card.Description>
        {singleProgramData.workout[0].name}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default SingleProgramPage
