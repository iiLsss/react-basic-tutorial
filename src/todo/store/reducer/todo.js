import * as TYPES from '../action-types'

export default function todo(state = {
  data: [],
  flag: 'all'
}, action) {
  // 防止不直接修改原来的状态信息，把原有的深度克隆一份，return的结果才是股改原有的信息
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.TODO_ADD:
      let {payload} = action
      payload.id = state.data.length === 0 ? 1 : parseFloat(state.data[state.data.length - 1]['id']) + 1
      state.data.push(payload)
      break;
    case TYPES.TODO_FILTER:
      state.flag = action.text;
      break;
    case TYPES.TODO_UPDATE_STATE:
      let { taskId, newState} = action
      let item = state.data.find(item => item.id === taskId)
      if (item) {
        item.state = newState
      }
      break;
    case TYPES.TODO_DELETE:
      let { taskId:id } = action
      state.data = state.data.filter(item => item.id !== id)
      break;
    default:
      break;
  }
  return state
}