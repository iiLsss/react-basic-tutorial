// 每个版块单独的action-creator： 就是把dispatch派发时候需要传递的action对象进一步封装统一处理

import * as TYPE from '../action-types'

let vote = {
  support () {
    // dispatch 派发的时候需要传递啥就返回啥
    return {
      type: TYPE.VOTE_SUPPORT
    }
  },
  against() {
    // dispatch 派发的时候需要传递啥就返回啥
    return {
      type: TYPE.VOTE_AGAINST
    }
  },
}

export default vote