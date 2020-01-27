import { Component } from 'react'

// 浅比较 比较obj1, obj2 是否相等（之比较第一层）
function shallowEqual(obj1,obj2){
  if(obj1 === obj2){
      return true;
  }
  if(typeof obj1 !== 'object' || obj1 === null ||typeof obj2 !== 'object' || obj2 === null ){
      return false;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if(keys1.length !== keys2.length){
      return false;
  }
  for(let key of keys1){
      if(!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]){
          return false;
      }
  }
  return true;
}

export default class PureComponent extends Component {
  isPureComponent = true
  // 传入新的属性对象和状态对象=，然后返回一个是否需要更新的boolean值
  shouldComponentUpdate(nextProps, nextStates) {
    return !shallowEqual(this.props, nextProps) || !!shallowEqual(this.state, nextStates) 
  }
}
