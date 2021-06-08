import React from 'react'
import styled from 'styled-components/macro'

const date = Date()

const Feed = styled.div`
`

const FeedComponent = () => {
  return (
    <Feed>
      <p>{date}</p>
    </Feed>
  )
}

export default FeedComponent
