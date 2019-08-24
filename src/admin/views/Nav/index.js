import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <span>admin</span>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>首页</li>
            <li>客户管理</li>
            <li>计划管理</li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect()(Nav)
