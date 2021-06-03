import React from 'react'
import { Menu } from 'semantic-ui-react'

const MyHeader = () => {
  return (
    <>
      <Menu inverted  size='massive'>
        <Menu.Item name="Logo" />
        <Menu.Item name="page name" />
        <Menu.Item name="hamburger" />
      </Menu>
    </>
  )
}
export default MyHeader
