
import { updateQueue } from './Component'

/**
 * 给哪个DOM元素绑定哪种类型的事件
 * @param {*} dom 给哪个DOM元素绑事件 button 真实DOM元素
 * @param {*} eventType 事件类型  onclick
 * @param {*} listener 事件处理函数 handleClick
 */
export function addEvent (dom, eventType, listener) {
  //给dom增加一个store属性,值是一个空对象
  let store = dom.store || (dom.store={})
  store[eventType]=listener //store.onclick=handleClick
  if(!document[eventType]){
      document[eventType]=dispatchEvent //document.onclick=dispatchEvent
  }
}

let syntheticEvent ={};
function dispatchEvent(event){ //event是原生的DOM事件对象
   let {target,type}= event;//type=click target事件源button dom
   let eventType = `on${type}`;//onclick
   updateQueue.isBatchingUpdate=true;
   let syntheticEvent = createSyntheticEvent(event);
   while(target){
    let {store} = target;
    let listener = store && store[eventType];
    listener&&listener.call(target,syntheticEvent);
    target=target.parentNode;
   }
   for(let key in syntheticEvent){
    syntheticEvent[key]=null;
   }
   updateQueue.batchUpdate();
}
function createSyntheticEvent(nativeEvent){
  for(let key in nativeEvent){
    syntheticEvent[key]=nativeEvent[key];
  }
  return syntheticEvent;
}