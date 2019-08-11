import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../store/action'

export class Head extends Component {
  render() {
    let { data } = this.props,
        len = data.filter(item => parseFloat(item['state']) === 0).length
    
    return (
      <div className="panel-heading">
        <h3 className="panel-title">
          任务列表【当前未完成的任务书 <span className="count">{len}</span>】
        </h3>
        <input type="text" 
          className="form-control"
          onKeyUp={this.keyup}
          placeholder="added 8 packages from 66 contributors and audited 902237 packages in 7.436s
  found 0 vulnerabilities"
        />
      </div>
    )
  }
  // 1. 向redux中追加一条新的任务
  keyup = ev => {
    if(ev.keyCode === 13) {
      let value = ev.target.value.trim()
      if (value.length === 0) return
      this.props.add({
        name: value,
        state: 0
      })
      ev.target.value = ''
    }
  }

}

export default connect(state => ({ ...state.todo }), action.todo)(Head)
