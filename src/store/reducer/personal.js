import * as TYPE from '../action-types'

export default function personal(state = {
  baseInfo: {}
}, action) {
  switch (action.type) {
    case TYPE.VOTE_SUPPORT:
      state = { ...state, n: state.n + 1 }
      break;
    case TYPE.VOTE_AGAINST:
      state = { ...state, m: state.m + 1 }
      break;
    default:
      break;
  }
  return state
}