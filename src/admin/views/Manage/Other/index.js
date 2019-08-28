import React, { Component } from 'react'
import { connect } from 'react-redux'

export class index extends Component {
  render() {
    let {data} = this.props
    return (
      <ul className="list-group">
        {
          data.map((item, index) => {
            return (

              <li className="list-group-item" key={index}>
                编号：{item.id}
                姓名：{item.name}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default connect(state => ({...state.custom}))(index)
