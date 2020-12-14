
import { addEvent } from './event'

/**
 * 虚拟dom 转换成真是dom
 * @param {*} vDom 虚拟对象
 * @param {*} container 插入到那个容器呢 
 */
function render(vDom, container) {
  let dom = createDom(vDom)
  console.log(dom);
  container.appendChild(dom)
}

/**
 * 把虚拟DOM 变成真是DOM
 * @param {*} vDom 虚拟DOM null number string array function class
 */
export function createDom(vDom) {
  // 如果vDom 是一个字符串或者数字，创建一个文本的DOM节点返回
  if (typeof vDom === 'string' || typeof vDom === 'number') {
    return document.createTextNode(vDom)
  }
  if (!vDom) {
    return ''
  }
  // react元素
  let { type, props } = vDom
  let dom
  // 如果是一个组件 
  if (typeof type === 'function') {
    // 区分是类组件还是函数组件
    if (type.isReactComponent) {
      // 类组件增加属性 isReactComponent
      return updateClassComponent(vDom)
    } else {
      // 函数组件
      return mountFunctionComponent(vDom)
    }
  
  } else {
    dom = document.createElement(type)
  }
  
  updateProps(dom, props) // 更新属性，把虚拟dom上的属性设置到真是dom上
  // 处理子节点
  // 说明是文本 直接挂载dom textContent即可
  if (typeof props.children === 'number' || typeof props.children === 'string' ) {
    dom.textContent = props.children 
    // 说明是元素节点 继续render处理
  } else if (typeof props.children === 'object' && props.children.type) {
    render(dom, props.children)
    // 如果children是个数组
  } else if(Array.isArray(props.children)){
    reconcileChildren(props.children,dom)
  } else {
    dom.textContent = props.children ? props.children.toString() : ''
  }
  return dom
}

/**
 * 得到真实dom
 * @param {*} vDom 虚拟dom 组件的虚拟dom 
 */
function mountFunctionComponent(vDom) {
  let { type, props } = vDom
  let rendervDom = type(props)
  return createDom(rendervDom)
}

/**
 * 得到真实dom
 * 创建类组件的示例
 * 调用示例的render方法得到需要渲染的react元素
 * @param {*} vDom 
 */
function updateClassComponent(vDom) {
  let { type, props } = vDom
  let classInstance = new type(props)
  let rendervDom = classInstance.render()
  let dom = createDom(rendervDom) 
  classInstance.dom = dom // 类组件示例上挂载dom 指向类组件示例的真实dom
  return  dom 
}

/**
 * 把子节点的虚拟DOM转成真是DOM 插入父节点
 * @param {*} childrenDom  子节点
 * @param {*} parentDom  父节点
 */
function reconcileChildren(childrenDom, parentDom) {
  for (let i = 0; i < childrenDom.length; i++) {
    render(childrenDom[i], parentDom)
  }
}

/**
 * 属性设置到dom元素上
 * @param {*} dom DOM元素
 * @param {*} props 属性对象
 */
function updateProps(dom, props) {
  for (let key in props) {
    if (key === 'children') continue
    if (key === 'style') { // style: {color: 'red'}
      let styleObj = props[key] 
      for(let k in styleObj) {
        dom.style[k] = styleObj[k]
      }
    } else if(key.startsWith('on')) {
      // dom[key.toLocaleLowerCase()] = props[key]
      addEvent(dom,key.toLocaleLowerCase(),props[key]);
    } else {
      dom[key] = props[key] // dom.className = title
    }
  }
}

const ReactDOM = {
  render
}

export default ReactDOM