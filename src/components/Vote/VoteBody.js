import React from 'react'
import PropsTypes from 'prop-types'
export default class VoteBody extends React.Component {

  constructor (props){
    super(props)
    // init state
    let { n, m } = this.props.store.getState().vote

    this.state = {n, m}
  }

  componentDidMount () {
    this.props.store.subscribe(() => {
      let { n, m } = this.props.store.getState().vote
      this.setState({n,m})
    })
  }

  render () {

    let { n, m } = this.props.store.getState().vote
    console.log(this.props.store.getState().vote)
    console.log(1312312)
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
