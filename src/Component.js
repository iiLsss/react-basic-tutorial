import {createDom } from './react-dom'
import { isFunction } from './utils'

// 更新队列
// 单例
export let updateQueue = {
  updaters: [],
  isBatchingUpdate: false,
  add(updater) {
    this.updaters.push(updater)
  },
  batchUpdate() {
    this.updaters.forEach(updater=>updater.updateComponent())
    this.isBatchingUpdate = false
  }
}


class Updater {
  constructor(classInstance) {
    this.classInstance = classInstance
    this.pendingStates = []
  }
  addState(partialState) {
    this.pendingStates.push(partialState)
    updateQueue.isBatchingUpdate ? updateQueue.add(this) : this.updateComponent()
  }
  updateComponent() {
    let { pendingStates,  classInstance } = this
    if(pendingStates.length) {
      classInstance.state = this.getState()
      classInstance.forceUpdate()
    }
  }
  getState() {
    let { classInstance,pendingStates } = this
    let { state } = classInstance
    if (pendingStates.length) {
      this.pendingStates.forEach(nextState => {
        if (isFunction(nextState)) {
          nextState = nextState.call(classInstance, state)
        } 
        state = { ...state, ...nextState}
      })
      this.pendingStates = []
    }
    return state
  }
}

class Component {
  static isReactComponent = true
  constructor(props) {
    this.props = props
    this.state = {}
    this.queue = []
    this.Updater = new Updater(this)
  }
  /**
   * 
   * @param {*} partState 部分state
   */
  setState(partState){
    this.Updater.addState(partState)
  }
  forceUpdate() {
    let newRenderDom = this.render()
    mountClassComponent(this, newRenderDom)
  }
}

function mountClassComponent(classInstance, newRenderDom) {
  let { dom }  = classInstance
  let newDom = createDom(newRenderDom)
  dom.parentNode.replaceChild(newDom, dom)
  classInstance.dom = newDom
}

export default Component