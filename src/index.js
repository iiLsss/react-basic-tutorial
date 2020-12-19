import React from './react'
import ReactDOM from './react-dom'


/**
 * 想在react中获取真实dom元素
 * 1. ref
 */
class Sum extends React.Component {

  constructor(props) {
    super(props)
    this.a = React.createRef()
    this.b = React.createRef()
    this.c = React.createRef()
  }
  add = (event) => {
    let aVal = this.a.current.value
    let bVal = this.b.current.value
    this.c.current.value = aVal + bVal
  }

  render() {
    return (
      <div>
        <input ref={this.a} type="text" />
        +
        <input ref={this.b} type="text"/>
        <button onClick={this.add}>+</button>
        <input ref={this.c} type="text"/>
      </div>
    )
  }
}

ReactDOM.render(<Sum />, document.querySelector('#root'))