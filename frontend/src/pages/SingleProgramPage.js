import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'
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
      <Card.Content>
        <Button>edit</Button>
        <Button>delete</Button>
      </Card.Content>
      <Card.Content>
        <Card.Header>{singleProgramData.name}</Card.Header>
      </Card.Content>
      <Image src="https://picsum.photos/200" size="small" wrapped ui={false} />
     {/* <Card.Content>{singleProgramData.workout[0].name}</Card.Content> */}
    </Card>
  )
}

export default SingleProgramPage