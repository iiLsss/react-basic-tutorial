import * as TYPE from '../action-types'

export default function todo(state = {
  data: [],
  flag: 'all'
}, action) {
  switch (action.type) {
    case TYPE.xx:
      console.log(12)
      break;
    default:
      break;
  }
  return state
}