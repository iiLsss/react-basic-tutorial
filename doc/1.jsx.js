import React from './react'
import ReactDOM from './react-dom'

// let element = <div className="title" style={{ color: 'red' }}><span>hello</span>world</div>
// let element = React.createElement("div", {
//   className: "title",
//   style: {
//     color: 'red'
//   }
// }, React.createElement("span", null, "hello"), "diqiu");
// console.log(JSON.stringify(element,null,2))

/**
 *  函数组件 首字母大写
 * @param {*} props 
 * 1. 定义一个React元素，也就是虚拟DOM， 他的type=Welcome
 * 2. render函数会执行这个Welcome函数，并传入props对象，得到返回的虚拟dom
 * 3. 把返回的虚拟dom转成真实DOM
 */
// let Welcome = (props) =>{
//   return  <div className="title" style={{ color: 'red' }}><span>hello</span>{props.name}</div>
// }

// let element = <Welcome name="地球"/>
// console.log(JSON.stringify(element,null,2))


/**
 * 1. React元素是字符串（原生DOM类型） 函数（函数组件） 类 （类组件）
 * 2. 在定义组件元素的时候，会把JSX的所有属性封装props对象传递给组件
 * 3. 组件的名称首字节大写 ，react通过首字母来区分原生还是自定义组件
 * 4. 组件先定义，在使用
 * 5. 组件要返回一个react元素
 * 类组件如何渲染
 * 1. render 先创建类组件的示例 new Welcome(props) this.props = props
 * 2. 调用示例的render方法得到react元素
 * 3. 把react元素转成真实dom元素
 */
class Welcome extends React.Component{

  // constructor(props) { 自实现
  //   super(props)
  //   this.props = props
  // }
  render() {
    return <div className="title" style={{ color: 'red' }}><span>hello</span>{this.props.name}</div>
  }
}

let element = <Welcome name="地球"/>
console.log(JSON.stringify(element,null,2))

ReactDOM.render(
  element,
  document.getElementById('root')
)

/**
{
  "type": "div",
  "key": null,
  "ref": null,
  "props": {
    "className": "title",
    "style": {
      "color": "red"
    },
    "children": [
      {
        "type": "span",
        "key": null,
        "ref": null,
        "props": {
          "children": "hello"
        },
        "_owner": null,
        "_store": {}
      },
      "diqiu"
    ]
  },
  "_owner": null,
  "_store": {}
}
 */

/**
函数组件
{
  "key": null,
  "ref": null,
  "props": {
    "name": "地球"
  },
  "_owner": null,
  "_store": {}
}
 */