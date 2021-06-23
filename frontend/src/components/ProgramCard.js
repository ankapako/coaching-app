import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components/macro'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Content = styled.div`
  display: flex;
  border: 1px solid gray;
`

const Image = styled.img`
  float: left;
  margin-right: 10px;
`

const ProgramCard = ({ name, workout }) => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            {name}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <div>
            <button onClick={handlePrint}>Print this out!</button>
            <Card.Body ref={componentRef}>
              {workout.map((item) => {
                return (
                  <Content key={item._id}>
                    <Image
                      src="https://via.placeholder.com/150"
                      alt="exercise"
                      className="exercise-img"
                    />
                    <div>
                      <h5>{item.name}</h5>
                      <p>{item.muscleGroup}</p>
                      <p>{item.instructions}</p>
                      <p>
                        {item.sets} x {item.reps} {item.load} / {item.rest}
                      </p>
                    </div>
                  </Content>
                )
              })}
            </Card.Body>
          </div>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}
export default ProgramCard
