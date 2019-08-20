import React, { Component } from 'react'
import s from  './a.module.less'
export default class A extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }
  render() {
    return (
      <div className={s.container}>
        <ul>
          <li className={this.state.isShow ? s.active : ''}>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    )
  }
}
