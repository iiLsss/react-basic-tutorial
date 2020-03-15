import React, {useReducer, useEffect} from 'react'
import resolve from 'resolve'


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

function initializer(initializerArg) {
  return {number: initializerArg}
}

let initializerArg = 0

function useLogger (reducer, initializerArg, initializer) {
  let [state, dispatch] = useReducer(reducer, initializerArg, initializer)

  let dispatchWithLogger = (action) => {
    console.log('prev state', state)
    dispatch(action)
  }

  useEffect(() => {
    console.log('next state', state)
  }, [state])

  return [state, dispatchWithLogger]
}

function usePromise(reducer, initializerArg, initializer) {
  let [state, dispatch] = useReducer(reducer, initializerArg, initializer)

  let dispatchWithPromise= (action) => {
    console.log(22);
    if (action.playload && action.playload.then &&  typeof action.playload.then === 'function') {
      console.log(313);
      action.playload.then(res => {
        dispatch({
          ...action,
          res
        })
      })
    } else {
      dispatch(action)
    }

    // action.then(res => {
    //   dispatch(res)
    // })
  }

  return [state, dispatchWithPromise]
}

function useThunk(reducer, initializerArg, initializer) {
  let [state, dispatch] = useReducer(reducer, initializerArg, initializer)

  let dispatchWithThunk= (action) => {
    if (typeof action === 'function') {
      action(dispatchWithThunk, () => state)
    } else {
      dispatch(action)
    }
  }

  return [state, dispatchWithThunk]
}

function App () {
  let [state, dispatch] = useThunk(reducer, initializerArg, initializer)
  return (
    <>
      <p>{state.number}</p>
      <button onClick={() => dispatch({type: ADD})}>++</button>
      <button onClick={() => dispatch({type: MINUS})}>--</button>
      <button onClick={() => dispatch(new Promise((resolve) => {
        setTimeout(() =>{
          resolve({type: ADD})
        }, 1000)
      }))}>promise + 1</button>
      <button onClick={() => dispatch({
        type: ADD,
        playload: new Promise((resolve) => {
          setTimeout(() =>{
            resolve({type: ADD})
          }, 1000)
        })
      })}>promise + 1</button>
      <button onClick={() => dispatch(function(thunkDispatch, getState) {
        setTimeout(() => {
          thunkDispatch({type: ADD})
        }, 1000)
      })}>thunk ++</button>
    </>
  )
}


export default App

/**
 * logger 状态前打印异常 状态变化后打印一次 redux-logger
 * 
 * 
 */