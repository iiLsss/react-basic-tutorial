import React, { Component, useState , useRef, useCallback, memo, useMemo} from 'react'

 class Counter extends Component {
  state = { number : 0, name: 'diqiu '}
  render() {
    return (
      <div>
        <p>{this.state.number}</p>

        <button onClick={()=> this.setState({number: this.state.number+1})}>+</button>
      </div>
    )
  }
}

// 函数组件没有状态。
function Counter2() {
  // useState  会返回一个数组 第一个元素当前状态  第一个元素是设置状态方法 
// setState:  相同点 1 修改状态  2 修改后组件会刷新
// setState:  它不会把新的 state 和旧的 state 进行合并
  let [state, setState] = useState({number: 0, name:'diqiu'})
  return (
    <div>
      <p>{state.name}: {state.number}</p>
      <button onClick={()=> setState({number: state.number+1})}>+</button>
    </div>
  )
}

/**
 * 1. 每次渲染都有自己的state props
 * 2. 每次渲染都有自己的事件处理函数
 * 3. alert 会捕获点击安装的状态
 */

 let lastState
 let lastAdd 
function Counter3() {
  // useRef 和createRef 的区别 ： createRef永远返回最新的对象  useRef 永远返回都是一个对象
  // useRef返回的都是上一次的值 use核心作用：就是多次渲染的时候 返回同一个对象 保持不变
  // 给 ref.current 赋值组件不会刷新
  let numRef = useRef() // 和 react.createRef() 很像， 返回一个对象current:null
  let [state, setState] = useState({number: 0, name:'diqiu'})
  let [value, setValue] = useState('')
  let add = () => {
    setState({number: state.number + 1})
    numRef.current = state.number + 1
  } 

  console.log('lastAdd === add', lastAdd === add)
  console.log('lastState === state', lastState === state)
  lastAdd = add
  lastState = state
  // 相当于闭包 只显示当时的值
  function showState() {
    setTimeout(() => {
      alert(JSON.stringify(numRef.current))
    }, 3000);
  }

  function asyncAdd() {
    setTimeout(() => {
      // 如果setState的时候传的是一个函数的话，始终就可以基于最新的状态去修改
      setState((state) => ({number: state.number + 1}))
    }, 1000);
  }

  return (
    <div>
      <p>{state.name}: {state.number}</p>
      <button onClick={add}>+</button>
      <button onClick={asyncAdd}>延迟+1</button>
      <button onClick={showState}>显示最新状态+</button>
      <input value={value} onChange={event =>setValue(event.target.value) } type="text"/>
    </div>
  )
}
// 函数式更新 惰性初始化
// 初始化函数只会在第一次渲染的时候执行一次， 以后不再执行

function sum() {
  console.log('sum')
  return 1 + 2
}
function Counter4 () {
  // let [state, setState] = useState(() => {
  //   console.log('useState')
  //   return {number: 0}
  // })
  // let add = () => {
  //   setState(preState => ({number: preState.number + 1}))
  // } 

  // let [number, setNumber] = useState(sum())
  let [number, setNumber] = useState(() => sum())
   let add = () => {
    setNumber(preState => (preState + 1))
  } 
  return (
    <div>
      <p>{number}</p>
      <button onClick={add}>+</button>
    </div>
  )
}

/**
 * useState 性能优化 pureComponent shouldComponentUpdate
 * Object.js
 */
function Counter5() {
  let [counter, setCounter] = useState({name: 'jishuqi', number: 0})
  console.log('Counter5, render')
  return (
    <div>
      <p>{counter.name} {counter.number}</p>
      <button onClick={() => setCounter({...counter, number:counter.number + 1 })}>++++++</button>
      <button onClick={() => setCounter(counter)}>不会打印</button>
    </div>
  )
}

/**
 * 减少对象和函数的创建
 * 
 */
function App() {
  let [state, setState] = useState({number: 0})
  let [value, setValue] = useState('')
  // useCallback 对函数进行缓存
  // 第二个参数 依赖变量的数组 当数组中变量发送改变后 就会重新生成新的函数
  let add = useCallback(() => {
    setState({number: state.number + 1})
  }, [state.number])
  console.log('lastState === add', lastState === add)
  lastState = add
  return (
    <div>
      <p> {state.number}</p>
      <button onClick={add}>++++++</button>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
    </div>
  )
}

function Child({onBtnClick, data}) {
  console.log('render Child')
  return (
    <>
      <p> {data.number}</p>
      <button onClick={onBtnClick}>++++++</button>
    </>
  )
}
// memory 记忆 返回新组件，如果出组件的属性不改变则不刷新， 类似shouldComponentUpdate
let MemoChild = memo(Child)

// memo useMemo
function App2() {
  let [state, setState] = useState({number: 0})
  let [value, setValue] = useState('')

  let add = useCallback(() => {
    setState({number: state.number + 1})
  }, [state.number])
  // TODO: onchange 放入 useCallback
  // let data = { number: state.number}
  let data = useMemo(() => ({number: state.number}), [state])
  console.log('render app2')
  return (
    <div>
      <MemoChild
        data={data}
        onBtnClick={add}
      />
      
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
    </div>
  )
}

// React Hook "useState" is called conditionally. React Hooks must be called in the exact same order in every component render 
// React Hook "useState" is called in function "add" which is neither a React function component or a custom React Hook function 
// function App3() {
//   let [number, setNumber] = useState(0)
//   if (!number%2) {
//     let [name, setName] = useState('diqiu')
//   }

//   function add() {
//     let [name, setName] = useState('diqiu')
//   }

//   return (
//     <div>{number + '' + name}</div>
//   )
// }

export default App2
