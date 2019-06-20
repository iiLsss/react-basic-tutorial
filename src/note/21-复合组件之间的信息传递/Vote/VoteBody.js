import React from 'react'
import PropsTypes from 'prop-types'
export default class VoteBody extends React.Component {
  /**
   * 3. 子组件中设置使用传递进来的上下文类型:设置那个的类型，子组件上下文中才有那个属性，不设置的是不允许使用的
   *  this.context.xxx
   *  指定的上下文属性类型需要和父组件中指定的类型保持一致，否则报错
   */
  static contextTypes = {
    n: PropsTypes.number,
    m: PropsTypes.number
  }
  constructor (props, context){
    super(props, context)
    console.log(context)
  }
  render () {
    let {n, m} = this.context
    let rate = (n / (n+m)) * 100
    isNaN(rate) ? rate = 0 : console.log(rate)
    return <div className="panel-body">
      支持人数：<span>{n}</span>
      <br/>
      反对人数：<span>{m}</span>
      <br />
      支持比率：<span>{`${rate.toFixed(2)}%`}</span>
    </div>
  }
}
