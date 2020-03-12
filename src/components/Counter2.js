import React, { useReducer } from 'react'
/**
 * useReducer
 * useState是语法糖，是useReducer的语法糖
 * react hooks 和 redux有关系。facebook 把redux挖到了，专门开发hooks
 */

 const ADD = 'ADD'
 const MINUS = 'MINUS'

function reducer(state, action) {
  switch(action.type) {
    case ADD:
      return {number: state.number + 1}
    case MINUS:
      return {number: state.number - 1}
    default:
      return state
  }
}

function initializer(initialArgs) {
  return {number: initialArgs}
}


function Counter1() {
  // 
  // let [state, dispatch] = useReducer(reducer, initialArgs, initializer)
  // state = { number: 0 }
  // let [state, dispatch] = useReducer(reducer, {number: 0})

  let [state, dispatch] = useReducer(reducer, 0, initializer)
  let [state2, dispatch2] = useReducer(reducer, 0, initializer)

  return (
    <div>
      <div>
        <p>{state.number}</p>
        <button onClick={()=> dispatch({type: ADD})}>+++</button>
        <button onClick={()=> dispatch({type: MINUS})}>---</button>
        <hr/>
        <p>{state2.number}</p>
        <button onClick={()=> dispatch2({type: ADD})}>+++</button>
        <button onClick={()=> dispatch2({type: MINUS})}>---</button>
      </div>
      
    </div>
  )
}

/**
 * 什么时候有useState 什么时候useReducer
 * 1. 当你计算新状态的逻辑非常复杂的时候 用useReducer
 * @param {*} initialState 
 */
function useState(initialState) {
  function reducer(state, action) {
    return {...action.payload}
  }
  
  let [state, dispatch] = useReducer(reducer, initialState)

  function setState(payload) {
    dispatch({type: 'SET_STATE', payload})
  }

  return [state, setState]
}

function Counter2() {
  let [state, setState] = useState({number: 0})

  return (
    <div>
      <div>
        <p>{state.number}</p>
        <button onClick={()=> setState({number: state.number + 1})}>+++</button>
        <button onClick={()=> setState({number: state.number - 1})}>---</button>
      </div>
      
    </div>
  )
}

export default Counter2
