import React from 'react'
import PropTypes from 'prop-types'

import VoteHead from './VoteHead'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'

export default class vote extends React.Component {
  static defaultProps = {
    title: '请传入标题',
    count: {
      n: 0,
      m: 0
    }
  }
  /**
   * 在父组件中
   *  1. 设置子组件上下文属性值类型
   *     static childContextTypes = {}
   *  2. 获取子组件的上下文（设置子组件的上下文）
   *     getChildContext (){return {}}
   *  */

  static childContextTypes = {
    n: PropTypes.number,
    m: PropTypes.number,
    callBack: PropTypes.func
  }

  getChildContext () {
    // 只要render重新渲染，就会执行这个方法，重新更新父组件中的上下文信息：如果父组件上下文信息更改了，子组件在重新调取的时候，会使用最新的上下文信息：（render => context => 子组件重新渲染)
    console.log('getChildContext')
    let { n, m } = this.state
    return { n, m,
      callBack: this.updateContext
    }
  }

  updateContext = type => {
    console.log('updateContext')
    if (type === 'support') {
      this.setState({
        n: this.state.n + 1
      })
    } else {
      this.setState({
        m: this.state.m + 1
      })
    }
  }

  constructor (props){
    super(props)
    console.log('constructor') 
    let { count: { n = 0, m = 0 } } = this.props
    this.state = {n,m}
  }
  render () {
    console.log('render')
    let { title } = this.props
    return <section 
      className={'panel panel-default'}
      style={{width: '50%', margin: '0 auto'}}
    >
      <VoteHead title={title}/>
      <VoteBody/>
      <VoteFooter />
    </section>
  }
}
