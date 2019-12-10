import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid col-md-2">
          <span className="navbar-brand">admin</span>
        </div>
        <div className="collapse navbar-collapse col-md-10">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/">首页</NavLink>
            </li>
            <li>
              <NavLink to="/blackson">黑儿</NavLink>
            </li>
            <li>
              <NavLink to="/manage">管理</NavLink>
            </li>
            <li>
              <NavLink to="/center">中心</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect()(Nav)
