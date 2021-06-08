import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'
//import { useParams } from 'react-router-dom'

//import ExerciseCard from '../components/ExerciseCard'

const SingleProgramPage = () => {
  const singleProgramData = useSelector(
    (store) => store.exercises.singleProgramData
  )

  //const dispatch = useDispatch()

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
    </Card>
  )
}

export default SingleProgramPage
