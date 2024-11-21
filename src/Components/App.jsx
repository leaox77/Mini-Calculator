import Display from './Display.jsx'
import ButtonGroup from './ButtonGroup.jsx'
import '../css/App.css'
import React from 'react'
import { Component } from 'react'
import operation from '../functions/operations.js'
import MouseFollower from './MouseFollowe.jsx'

class App extends Component {

  state = {
    total: null,
    next: null,
    operation: null,
  }

  handleClick = buttonName => {
    this.setState(operation(this.state, buttonName))
  }

  render() {
  return (
    <div className='component-app'>
      <h1>Calculadora Simple</h1>
      <MouseFollower />
      <Display value={this.state.next || this.state.total || '0'} />
      <ButtonGroup clickHandle={this.handleClick} />
    </div>
  )
  }
}

export default App
