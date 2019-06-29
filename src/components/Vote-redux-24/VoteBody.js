import React from 'react'
import PropsTypes from 'prop-types'
export default class VoteBody extends React.Component {

  constructor (props, context){
    super(props, context)
    console.log(context)
    this.state = {
      refresh: 0
    }
  }

  componentDidMount () {
    this.props.myRedux.subScript(() => {
      this.setState({
        refresh: this.state.refresh + 1
      })
    })
  }

  render () {
    let state = this.props.myRedux.getState()
    let {n = 0, m = 0} = state
    let rate = (n / (n + m)) * 100
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
