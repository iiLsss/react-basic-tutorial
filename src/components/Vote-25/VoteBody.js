import React from 'react'
import PropsTypes from 'prop-types'
export default class VoteBody extends React.Component {

  constructor (props){
    super(props)
    // init state
    let {store: {getState}} = this.props
    let {n,m} = getState()
    this.state = {n, m}
  }

  componentDidMount () {
    let { store: { getState, subscribe} } = this.props
    let unsubscribe = subscribe(() => {
      let { n, m } = getState()
      this.setState({
        n,m
      })
    })
    // unsubscribe() 把当前追加的方法在移除，解除绑定的方式
  }

  render () {
    let {n,m} = this.state
    let rate = (n / (n + m)) * 100
    isNaN(rate) ? rate = 0 : console.log(1)
    return <div className="panel-body">
      支持人数：<span>{n}</span>
      <br/>
      反对人数：<span>{m}</span>
      <br />
      支持比率：<span>{`${rate.toFixed(2)}%`}</span>
    </div>
  }
}
