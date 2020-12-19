
import { updateQueue } from './Component'

/**
 * 给哪个DOM元素绑定哪种类型的事件
 * @param {*} dom 给哪个DOM元素绑事件 button 真实DOM元素
 * @param {*} eventType 事件类型  onclick
 * @param {*} listener 事件处理函数 handleClick
 */
/**
  为什么合成事件 作用是什么
  1. 实现批量更新
  2. 可以实现事件对象的缓存和回收
 */
export function addEvent (dom, eventType, listener) {
  //给dom增加一个store属性,值是一个空对象
  let store = dom.store || (dom.store={})
  store[eventType]=listener //store.onclick=handleClick
  // document.addEventListener(eventType.slice(2), dispatchEvent, false)
  if(!document[eventType]){
      document[eventType]=dispatchEvent //document.onclick=dispatchEvent
  }
}

let syntheticEvent ={}
function dispatchEvent(event){ //event是原生的DOM事件对象
  let { target,type } = event//type=click target事件源button dom
  let eventType = `on${type}`//onclick
  updateQueue.isBatchingUpdate = true
  let syntheticEvent = createSyntheticEvent(event)
  // 实现事件冒泡
  while (target) {
    let { store } = target
    let listener = store && store[eventType]
    listener && listener.call(target,syntheticEvent)
    target = target.parentNode
  }
  for (let key in syntheticEvent) {
    syntheticEvent[key] = null
  }
  updateQueue.batchUpdate()
}
function createSyntheticEvent(nativeEvent){
  for(let key in nativeEvent){
    syntheticEvent[key] = nativeEvent[key]
  }
  return syntheticEvent
}