import {createDom } from './react-dom'
import { isFunction } from './utils'

// 更新队列
// 单例 对象就够了  需要很多对象实例的话 用类
/**
 * 
 */
export let updateQueue = {
  updaters: new Set(), // 更新器的数组
  isBatchingUpdate: false, // 标志  是否处于批量更新模式 默认是非批量更新
  add(updater) { // 增加一个更新器
    this.updaters.add(updater)
  },
  batchUpdate() { // 强制批量实现组件更新
    this.updaters.forEach(updater=>updater.updateComponent())
    this.isBatchingUpdate = false
    this.updaters.clear()
  }
}

/**
 * 
 */
class Updater {
  constructor(classInstance) {
    this.classInstance = classInstance // 类组件的实例
    this.pendingStates = [] // 等待更新的状态
  }
  /**
   * 添加状态
   * @param {*} partialState 
   */
  addState(partialState) {
    // 先把分状态添加到pendingStates数组中去
    this.pendingStates.push(partialState)
    // 如果当前处于批量更新状态，也就是异步更新模式，把当前的updater实例放到updateQueue里
    // 如果非批量更新，也就是同步更新，则调用updateComponent直接更新
    updateQueue.isBatchingUpdate ? updateQueue.add(this) : this.updateComponent()
  }
  // 开始用 pendingStates 更新状态
  updateComponent() {
    let { pendingStates,  classInstance } = this
    if(pendingStates.length) {  // 说明有等待更新的状态
      // 组件的老状态和数组中的新状态合并后得到最新的状态
      classInstance.state = this.getState()
      // 让组件强行更新
      classInstance.forceUpdate()
    }
  } 
  // 根据老状态和等待更新的新状态，得到最后的老状态
  getState() {
    let { classInstance,pendingStates } = this
    let { state } = classInstance
    if (pendingStates.length) { 
      this.pendingStates.forEach(nextState => {
        if (isFunction(nextState)) { // 如果是函数
          nextState = nextState.call(classInstance, state)
        } 
        state = { ...state, ...nextState} // 用新状态覆盖老状态
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
    // 会为每个组件实例配一个updater类的实例
    this.Updater = new Updater(this)
  }
  /**
   * 
   * @param {*} partState 新的state
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