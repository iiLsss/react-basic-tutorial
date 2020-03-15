import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle, useLayoutEffect } from 'react'

/**
 * 自定义hook其实是一个函数，但是要以use开头
 * 复用的是逻辑 而非状态
 */
function useCounter() {
  let [number, serNumber] = useState(0)
  useEffect(() => {
    setInterval(() => {
      serNumber(number + Math.random())
    }, 1000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return number
}
function Counter1 () {
  let number = useCounter()
  return (
    <div>{number}</div>
  )
}

function Counter2 () {
  let number = useCounter()
  return (
    <div>{number}</div>
  ) 
}


function App () {
  return (
    <>
      <Counter1/>
      <br/>
      <Counter2/>
    </>
  )
}

export default App