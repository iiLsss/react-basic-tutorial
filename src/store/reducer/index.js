
// 把每一个模块单独设定的reducer函数最后合并成为总的reducer
import { combineReducers } from "redux";
import vote from './vote'
import personal from './personal'

let reducer = combineReducers({
  vote, personal
})

export default reducer

// 为了保证合并reducer 过程中，每个模块管理的状态信息不会相互冲突，redux在合并的时候把容器中的状态进行分开管理（已合并的reducer时候设置的属性名）
/* 
原始
state = {
  n: 0,
  m: 0,
  baseInfo: {}
} 
合并
state = {
  vote:{}
  personal: {}
}
store.getState().vote.n
获取状态信息的时候，也需要把模块名加上

*/