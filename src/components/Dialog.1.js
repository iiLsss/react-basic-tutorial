import React from 'react'
// 每一个组件中都要导入react 因为需要基于它的createElement把jsx进行解析渲染
/**
 * 函数式声明组件
 * 1 函数返回结果是一个新的JSX
 * 2 props参数存储的值是一个对象，包含了调取组件时候传递的属性值，不传递是个空对象
 */
export default function Dialog (props) {
  let { con, number = 0, children } = props
  console.log(children) // 代表双闭合组件中的子元素
  
  return (
    <section>
      <h2>系统提示{number}</h2>
      <div>{con}</div>
      {/* {children} */}
      {/* 也可以基于react中提供的专门便利children的方法来完成遍历操作 */}
      {
        // React.children.map(children, item => item)
      }
    </section>
  )
}