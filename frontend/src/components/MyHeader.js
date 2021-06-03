import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'

import logo from '../images/PTAKH_valkoinen.png'

const MyHeader = () => {
  return (
    <>
      <Menu inverted size="massive">
        <Menu.Item>
          <img src={logo} alt="logo" />
        </Menu.Item>
        <Menu.Item name="page name" />
        <Dropdown item>
          <Dropdown.Menu>
            <Link to="/exercises">
              <Dropdown.Item>Exercises</Dropdown.Item>
            </Link>
            <Link to="/programs">
              <Dropdown.Item>Programs</Dropdown.Item>
            </Link>
            <Link to="/coachprofile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </>
  )
}
export default MyHeader
