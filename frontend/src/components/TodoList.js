import React from 'react'
import { Button, List } from 'semantic-ui-react'

const TodoList = () => (
  <List divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button>remove</Button>
      </List.Content>
      <List.Content>todo</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated="right">
        <Button>remove</Button>
      </List.Content>
      <List.Content>todo</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated="right">
        <Button>remove</Button>
      </List.Content>
      <List.Content>todo</List.Content>
    </List.Item>
    <List.Item>
      <List.Content floated="right">
        <Button>remove</Button>
      </List.Content>
      <List.Content>todo</List.Content>
    </List.Item>
  </List>
)

export default TodoList
