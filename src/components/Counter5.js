
import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle, useLayoutEffect } from 'react'

// eeffect销毁
// useEffect 里面的方法会有返回值，返回值是一个函数，一般用来执行清理动作
// 每次执行effect之前都会执行uneffect函数
function App() {
  let [state, setState] = useState({number: 0})
  useEffect(()=>{
    let timer = setInterval(() => {
      setState(prevState => ({number: prevState.number + 1}))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [state.number])
  return (
    <div>
    <p>{state.number}</p>
      <button onClick={() => setState(prevState => ({number: prevState.number + 1}))}>++++</button>
    </div>
      
  )
}

// let lastInputRef 
// useRef React.creatRef
function Child (props, ref) {
  // let inputRef = React.creatRef() 都会返回一个新的对象
  // let inputRef = useRef() // {current: null} 每次都会返回同一个对象

  // console.log('lastInputRef === inputRef', lastInputRef === inputRef);
  // lastInputRef = inputRef

  // let getFocus = () => {
  //   inputRef.current.focus()
  // }

  return (
    <>
      {/* <input type="text" ref={props.ref2} /> */}
      <input type="text" ref={ref} />
      {/* <input type="text" ref={inputRef} /> */}
      {/* <button onClick={getFocus}>获得焦点</button> */}
    </>
  )
}

// ref 第二个参数
let ForwardChild = forwardRef(Child)

// -------------------- -------------------- -------------------- --------------------

// useImperativeHandle 实现
// function useImperativeHandle(parentRef, handler) {
//   parentRef.current = handler()
// }

function Child2 (props, ref) {
  let inputRef = useRef() // {current: null} 每次都会返回同一个对象

  //  相当于代理 暴露给父组件 方法 来操作子组件内部状态

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus()
    },
    setValue(newVal) {
      inputRef.current.value = newVal
    }
  }))
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  )
}

let ForwardChild2 = forwardRef(Child2)


function Parent() {
  let [number, setNumber] = useState(0)
  
  let inputRef = useRef() // {current: null} 每次都会返回同一个对象

  let getFocus = () => {
    // 希望在父组件里只能调用focus方法
    inputRef.current.focus()
    inputRef.current.setValue('serval')
  }
  return (
    <>

      {/* <Child ref2={inputRef} /> */}
      <ForwardChild2 ref={inputRef} />
      <br/>
      {number}
      <button onClick={() => setNumber(prevState => prevState + 1)}>++</button>
      <button onClick={getFocus}>获得焦点</button>
    </>
  )
}


function Layout() {
  let [color, setColor] = useState('red')
  useLayoutEffect(() => {
    alert('useLayoutEffect color')
  })
  useEffect(() => {
    alert('useEffect color')
  })
  return (
    <>
      <div id="myDiv" style={{backgroundColor: color }}>颜色</div>
      <button onClick={() => setColor('red')}>红</button>
      <button onClick={() => setColor('yellow')}>黄</button>
      <button onClick={() => setColor('blue')}>蓝</button>
    </>
  )
}


export default Layout