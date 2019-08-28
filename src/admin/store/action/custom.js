import * as TYPES from '../action-types'

let custom = {
  create(payload) {
    return {
      type: TYPES.CUSTOM_CREATE,
      payload
    }
  }
}

export default custom
