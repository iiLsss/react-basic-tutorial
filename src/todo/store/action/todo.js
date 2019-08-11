import * as TYPES from '../action-types'

let todo = {
  // 3. 增加任务信息action
  add(payload) {
    return {
      type: TYPES.TODO_ADD,
      payload
    }
  },
  // 更新筛选的类别
  filter(text) {
    return {
      type:TYPES.TODO_FILTER,
      text
    }
  },
  // 更新指定任务的状态
  updateState(taskId, newState){
    return {
      type: TYPES.TODO_UPDATE_STATE,
      taskId,
      newState
    }
  },
  // 删除任务信息
  remove(taskId) {
    return {
      type: TYPES.TODO_DELETE,
      taskId
    }
  }
}

export default todo