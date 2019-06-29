import React from 'react'
import ReactDOM from 'react-dom'
import Vote from './components/Vote/Vote'
import 'bootstrap/dist/css/bootstrap.min.css'

/**
 * 创建容器 需要把reducer传递进来
 *  reducer 作用
 *    1. 记录了所有状态修改的信息 （根据行为标识走不同的修改任务）
 *    2. 修改容器中的状态信息
 *  参数
 *    state 容器中原有的状态信息（如果第一次使用，没有原有状态，给一个初始默认值）
 *    action dispatch 任务派发的时候 传递的行为对象（这个对象中必有一个type属性，是操作的行为表示，reducer就是根据这个行为来识别该如何修改状态信息）
 */
import {createStore} from 'redux'

let reducer = (state ={n:0, m: 0}, action) => {
  switch (action.type) {
    case 'VOTE_SUPPORT':
      state = {...state, n: state.n + 1}
      break;
    case 'VOTE_AGANISt':
      state = { ...state, m: state.m + 1 }
      break;
    default:
      break;
  }
  return state; // 只有把最新的state返回，原有的状态才会被修改
}
let store = createStore(reducer)
/**
 * 创建的store中提供三个放方法
 *  dispatch： 派发行为（传递一个对象， 对象中有个TYPE属性），通知reducer修改状态信息
 *  subscribe： 实践池追加方法
 *  getState： 获取最新管理的状态信息
 */


ReactDOM.render(<main>
  <Vote 
    title={'勇士对战猛龙，勇士是冠军'}
    count={{
      n: 100,
      m: 78
    }}
    store = {store}
  />
</main>,document.querySelector('#root'))
