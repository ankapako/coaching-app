import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProgramCard = ({ name, workout }) => {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {workout.map((item) => {
              return (
                <Card key={item._id}>
                  <p>{item.name}</p>
                  <p>{item.muscleGroup}</p>
                  <p>{item.instructions}</p>
                  <p>
                    {item.sets} x {item.reps} {item.load} / {item.rest}
                  </p>
                </Card>
              )
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}
export default ProgramCard
