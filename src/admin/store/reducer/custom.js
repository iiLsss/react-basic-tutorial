import * as TYPES from '../action-types'

export default function todo(state = {
  data:[{
    id: 1,
    name: '哈哈哈哈哈哈'
  }]
}, action) {
  // 防止不直接修改原来的状态信息，把原有的深度克隆一份，return的结果才是股改原有的信息
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.CUSTOM_CREATE:
      let { payload } = action
      state.data.push(payload)
      break;
    default:
      break;
  }
  return state
}