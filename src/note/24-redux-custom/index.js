import React from 'react'
import ReactDOM from 'react-dom'
import Vote from './components/Vote/Vote'

import 'bootstrap/dist/css/bootstrap.min.css'


//全局挂载一个容器来实现信息共享和通信
let myRedux = (function anonymous() {
  let stateObj = {}
  let listenAry = []

  function updateState (callBack) {
    // callBack 回调函数中一定是修改并且返回最新的状态信息,用返回的替换原有的状态信息
    console.log(callBack)
    let newObj = callBack(stateObj)
    stateObj = {...stateObj, ...newObj}
    // 当状态更改：通知计划表中的方法执行
    listenAry.forEach(item => {
      if (typeof item === 'function'){
        item()
      }
    })
  }

  function getState () {
    return stateObj
  }

  function subScript (fn) {
    for (let i = 0; i < listenAry.length; i++) {
      let item = listenAry[i];
      if (item === fn) {
        return
      }
    }
    listenAry.push(fn)
  }

  return {
    updateState,
    getState,
    subScript
  }
})()
ReactDOM.render(<main>
  <Vote 
    title={'勇士对战猛龙，勇士是冠军'}
    count={{
      n: 100,
      m: 78
    }}
    myRedux={myRedux}
  />
</main>,document.querySelector('#root'))
