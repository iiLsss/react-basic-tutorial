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

  constructor (props){
    super(props)
    let { count:{n,m}, myRedux } = this.props
    myRedux.updateState(state => {
      return {
        ...state,
        n,
        m
      }
    })
  }

  render () {
    return <section 
      className={'panel panel-default'}
      style={{width: '50%', margin: '0 auto'}}
    >
      <VoteHead title={this.props.title} />
      <VoteBody myRedux={this.props.myRedux}/>
      <VoteFooter myRedux={this.props.myRedux}/>
    </section>
  }
}
