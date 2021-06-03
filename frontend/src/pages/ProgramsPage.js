import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 5px;
  padding: 20px;
  border: 2px solid pink;
  border-radius: 20px;
  text-align: center;
  background-color: #ffffff;
`

const ProgramsPage = () => {
  return (
    <Container>
      <h2>programs page</h2>
      <div>exerciselist here</div>
    </Container>
  )
}

export default ProgramsPage
