import React from './react'
import ReactDOM from './react-dom'


/**
 * state 只允许在constructor 里赋值
 * 
 */
class Count extends React.Component{
  constructor (props) {
    super(props)
    this.state = {number: 0}
  }
  handleClick = () => {
    // console.log(this.state.number)
    // this.setState({number: this.state.number + 1})
    // console.log(this.state.number)
    // this.setState({number: 4})
    // console.log(this.state.number)
    // console.log('object');
    // setTimeout(() => {
    //   this.setState((state) => ({number: state.number + 1}))
    //   console.log(this.state.number)
    //   this.setState({number: 4})
    //   console.log(this.state.number)
    // })
    // 实现同步异步更新
    this.setState({ number: this.state.number + 1 })
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1 })
    console.log(this.state.number)
    setTimeout(()=>{
      this.setState({ number: this.state.number + 1 })
      console.log(this.state.number)
      this.setState({ number: this.state.number + 1 })
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