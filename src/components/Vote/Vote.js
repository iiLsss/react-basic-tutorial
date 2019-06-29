import React from 'react'
import PropTypes from 'prop-types'

import VoteHead from './VoteHead'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'

export default class vote extends React.Component {

  constructor (props){
    super(props)
  }

  render () {
    let {store} = this.props;
    console.log(store)
    return <section 
      className={'panel panel-default'}
      style={{width: '50%', margin: '0 auto'}}
    >
      <VoteHead title={this.props.title} />
      <VoteBody store={store}/>
      <VoteFooter store={store}/>
    </section>
  }
}
