import React from 'react'

export default class VoteBody extends React.Component {
  constructor (props){
    super(props)
  }
  render () {
    return <div className="panel-bi">
      支持人数：<span>0</span>
    </div>
  }
}
