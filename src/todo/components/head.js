import React, { Component } from 'react'

export class Head extends Component {
  render() {
    return (
      <div className="panel-heading">
        <h3 className="panel-title">
          任务列表【当前未完成的任务书 <span className="count">0</span>】
        </h3>
        <input type="text" className="form-control" placeholder="added 8 packages from 66 contributors and audited 902237 packages in 7.436s
found 0 vulnerabilities"/>
      </div>
    )
  }
}

export default Head
