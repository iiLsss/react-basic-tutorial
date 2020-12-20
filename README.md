
# react 

## 1 JSX语法

1. 什么是JSX？
2. 什么是React元素？
3. 什么是JSX表达式？
4. JSX属性
5. 条件渲染
6. 列表渲染

## 2 React组件

1. 组件分为类组件和函数组件？
2. 组件如何渲染？
3. 组件的属性和类型检查
4. 组件的状态和状态更新
  状态对象不可变
  状态的更新可能是异步
  状态可能会被合并
5. 单向数据流

## React事件

1. 什么是合成事件
2. 如何在事件上处理函数中的this
  公共属性（箭头函数）
  匿名函数
  bind进行绑定
3. 如何向事件中传递参数

## 组件生命周期

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## React高级

1. 受控组件和非受控组件
2. ref
  ref值是字符串 x
  ref值是函数 x
  ref值是对象
  给类组件添加ref
  通过forwardRef给函数组件加ref
3. Protal
4. Context
5. 异步组件和懒加载
  lazy suspense
  import
6. shouldComponentsUpdate
7. immutable.js
8. 展示组件和容器组件
9. 高阶组件HOC
10. render props
11. Fragment
12. Error Boundary
13. React Hooks
  useState
  useEffect
  useReducer
  useContext
  useLauoutEffect
  自定义hooks

## redux

1. reducer
2. action
3. store
4. dispatch
5. subscribe
6. middlware

## redux生态

1. redux中间件
  redux-thunk
  redux-promise
  redux-logger
  redux-saga
  redux-undo
  redux-persist
  redux-actions
  reselect
2. react-redux
  provider
  connect
  mapStateToProps
  mapDispatchToProps

## react-router

1. react-router-dom
  HashRouter & BrowseRouter
  History
  Route
  Link
  Redirect
  Switch
  withRouter
  Prompt

2. connect-react-router

## 原理

1. JSX本质是什么
2. 不同类型的组件如何渲染
3. setState如何工作
4. 虚拟DOM和DOM-diff
5. 什么是合成事件
6. React fiber是什么 它解决什么问题 如何工作
