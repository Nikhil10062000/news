import React, { Component } from 'react'
import Nav from './Compo/Navbar'
import News from './Compo/News'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <News/>
      </div>
    )
  }
}

