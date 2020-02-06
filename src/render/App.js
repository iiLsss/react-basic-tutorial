import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0
    }
  }
  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render() {
    let { x ,y } = this.state
    return (
      <div onMouseMove={this.handleMouseMove}>
        <p>当前鼠标位置x:{x} y:{y}</p>
      </div>
    )
  }
}

