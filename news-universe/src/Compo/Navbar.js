import React, { Component } from 'react'
import {Navbar , Container} from 'react-bootstrap'
export default class Nav extends Component {
  render() {
    return (
      <>
        <Navbar>
      <Container>
        <Navbar.Brand href="#home">News World</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Nikhil Zavare</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    )
  }
}
