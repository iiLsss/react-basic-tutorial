import React from 'react'
import PropTypes from 'prop-types'
/**
 * provider 当前项目的根组件
 * 1. 接受通过属性传递进来的store，把store挂载到上下文中，这样当前项目中任何一个组件中，想要使用redux中的store，直接通过上下文获取即可 
 * 2. 在组件的render中，把传递给provider的子元素渲染
 *  */

class Provider extends React.Component{
  // 设置上下文信息
  static childContextTypes = {
    store: PropTypes.object
  }
  // 设置上下文信息值
  getChildContext() {
    return {
      store: this.props.store
    }
  }
  // 
  constructor(props, context){
    super(props, context)
  }

  render () {
    return this.props.children
  }
}

export {
  Provider
} 