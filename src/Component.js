import {createDom } from './react-dom'

class Updater {
  constructor() {
    this.queue = []
  }
}

class Component {
  static isReactComponent = true
  constructor(props) {
    this.props = props
    this.state = {}
    this.queue = []
  }
  /**
   * 
   * @param {*} partState 部分state
   */
  setState(partState){
    this.state = {...this.state, ...partState} // 合并state
    let newRenderDom = this.render()
    updateClassInstance(this, newRenderDom)
  }
}



function updateClassInstance(classInstance, newRenderDom) {
  console.log(classInstance,newRenderDom )
  let { dom }  = classInstance
  console.log(classInstance);
  let newDom = createDom(newRenderDom)
  console.log(dom.parentNode, dom,newDom);
  dom.parentNode.replaceChild(newDom, dom)
  classInstance.dom = newDom

}

export default Component