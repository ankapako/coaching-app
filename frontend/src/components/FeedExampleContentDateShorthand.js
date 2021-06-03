import React from 'react'
import { Feed } from 'semantic-ui-react'

const date = Date()
const summary = 'You added Jenny Hess to your coworker group.'

const FeedExampleContentDateShorthand = () => (
  <Feed>
    <Feed.Event date={date} summary={summary} />
    <Feed.Event date={date} summary={summary} />
    <Feed.Event date={date} summary={summary} />
  </Feed>
)

export default FeedExampleContentDateShorthand
