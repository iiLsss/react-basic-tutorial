import React, { Component, useReducer , useRef, useCallback, memo, useMemo, useContext} from 'react'


/**
 * 
 * useContext
 */

 let Context = React.createContext()


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

function Counter(props) {
  // useContext可以从Context 拿到向Provider 里传的value值
  let { state, dispatch } = useContext(Context)
  return (

    <div>
      <p>{state.number}</p>
      <button onClick={()=> dispatch({type: ADD})}>+++</button>
      <button onClick={()=> dispatch({type: MINUS})}>---</button>
    </div>
  )
}

function APP() {
  let [state, dispatch] = useReducer(reducer, {number: 0})

  return (
    <Context.Provider value={{state, dispatch}}>
      <Counter />
      
    </Context.Provider>
      
  )
}

export default APP