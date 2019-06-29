// 合并所有的action-creater 类似于reducer合并，为了防止冲突，合并后的对象是一板块名称单独划分管理


import vote from './vote'
import personal from './personal'

let action = {
  vote,
  personal
}

export default action