import React from './react'
import ReactDOM from './react-dom'


/**
 * state 只允许在constructor 里赋值
 * 
 */
class Count extends React.Component{
  constructor (props) {
    super(props)
    this.state = {number: 1}
  }
  // 处理函数 生命周期等 异步批量更新
  handleClick = () => {
    console.log(this.state.number)
    this.setState({number: this.state.number + 1})
    console.log(this.state.number)
    this.setState({number: 4})
    console.log(this.state.number)
  }
  // 其他函数比如setTimeout setInterval
  handleClick = () => {
    setTimeout(() => {
      this.setState((state) => ({number: state.number + 1}))
      console.log(this.state.number)
      this.setState({number: 4})
      console.log(this.state.number)
    })
  }
  render () {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

ReactDOM.render(<Count />, document.querySelector('#root'))