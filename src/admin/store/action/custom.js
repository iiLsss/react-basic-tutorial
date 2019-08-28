import * as TYPES from '../action-types'

let custom = {
  create(payload) {
    // thunk
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: TYPES.CUSTOM_CREATE,
          payload
        }) 
      }, 3000);
    }
    // return {
    //   type: TYPES.CUSTOM_CREATE,
    //   payload
    // }
  }
}

export default custom
