import React from 'react'

import PureComponent1 from './PureComponent.js'

class Title extends PureComponent1 {
  render() {
    console.log('Title render');
    return <div>{this.props.title}</div>
  }
}
class Counter extends PureComponent1 {
  render() {
    console.log('Counter render');
    return <div>{this.props.number}</div>
  }
}

export default class App extends PureComponent1 {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = {
      title: '计数器',
      number: 0
    }
  }
  add = () => {
    this.setState({
      number:  this.state.number + parseInt(this.inputRef.current.value)
    })
  }
  render() {
    console.log('App render');
    return (
      <div>
        <Title title={this.state.title}/>
        <Counter number={this.state.number} />
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}
