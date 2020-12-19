import React from './react'
import ReactDOM from './react-dom'


/**
 * 属性是外部传入的，不能改。 类组件和函数组件都有事属性
 * 状态是内部产生的，可以改。状态只能在类组件里
 * state 只允许在constructor 里赋值
 * 唯一能改state赋值的地方就是constructor
 * 每当调用setState方法的时候就会引起组件的刷新，组件会重新调用一次render方法，得到新的虚拟DOM,进行dom-diff  覆盖
 */
class Count extends React.Component{
  constructor (props) {
    super(props)
    this.state = {number: 0}
  }
  // event是事件对象 但不是原生事件，而是经过react封装
  handleClick = (event) => {
    // event
    // event.persist()  // 把这个event进行持久化
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

  clickBox = () => {
    console.log('clickBoxs');
  }

  render () {
    return (
      <div onClick={this.clickBox}>
        <p>{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

ReactDOM.render(<Count />, document.querySelector('#root'))