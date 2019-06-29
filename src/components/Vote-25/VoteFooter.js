import React from 'react'
import PropTypes from 'prop-types'

export default class VoteFooter extends React.Component{



  constructor (props, context) {
    super(props, context)
    console.log(context)
    console.log(this.props)
  }

  render () {
    let {store: {dispatch} } = this.props
    return <div className={'panel-footer'}>
      <button 
        className={'btn btn-success'} 
        onClick={() => {
          dispatch({
            type: 'VOTE_SUPPORT'
          })
        }}
        >支持</button>
      &nbsp;&nbsp;
      <button 
        className={'btn btn-danger'}
        onClick={() => {
          dispatch({
            type: 'VOTE_AGANISt'
          })
        }}
        >反对</button>
    </div>
  }
}