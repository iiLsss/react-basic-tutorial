import React, { useEffect, useState } from 'react'

/**
 * useEffect 封装后的钩子 可以实现didMount didUpdate willUnMount
 * 通过class组件改变标题
 * 保持窗口的标题和数字一直
 */

class App extends React.Component {

  state = {
    number: 1
  }

  componentDidMount() {
    document.title = this.state.number
  }
  componentDidUpdate() {
    document.title = this.state.number
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => this.setState(prevState => ({number: prevState.number + 1}))}>++++</button>
      </div>
    )
  }
}

function App2() {
  let [state, setState] = useState({number: 0})
  useEffect(()=>{
    document.title = state.number
  }, [state.number])
  return (
    <div>
    <p>{state.number}</p>
      <button onClick={() => setState(prevState => ({number: prevState.number + 1}))}>++++</button>
    </div>
      
  )
}

export default App2