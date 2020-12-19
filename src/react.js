import Component from './Component'

/**
 * 
 * @param {*} type 元素的类型
 * @param {*} config 配置对象，一般来说是属性对象
 * @param {*} children 儿子
 */
function createElement(type, config, children) {
  let ref
  if (config) {
    delete config.__source
    delete config.__self
    ref = config.ref
    delete config.ref
  }
  let props = { ...config }
  if (arguments.length > 3) {
      children = Array.prototype.slice.call(arguments, 2)
  }
  // 可能是数组 可能是 string  number  null  也能是
  props.children = children
  return {
    type,
    props,
    ref
  }
}

/**
{
  "type": "div",
  "props": {
    "className": "title",
    "style": {
      "color": "red"
    },
    "children": [
      {
        "type": "span",
        "props": {
          "children": "hello"
        },
      },
      "diqiu"
    ]
  },
}
 */

function createRef() {
  return {
    current:null
  }
}

const React =  {
  createElement,
  Component,
  createRef
}

export default React