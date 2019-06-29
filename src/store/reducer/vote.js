/**
 * vote 版本的reducer
 *  state: 原始redux管理的状态信息（设置初始值）
 *  action：dispatch派发的时候传递的欣慰读写{type：xxx}
 */

import * as TYPE from '../action-types'

export default function vote (state = {
  n: 0,
  m: 0
}, action) {
  console.log(action)
  switch (action.type) {
    case TYPE.VOTE_SUPPORT:
      state = {...state, n: state.n + 1}
      break;
    case TYPE.VOTE_AGAINST:
      state = { ...state, m: state.m + 1 }
      break;
    default:
      break;
  }
  return state
}