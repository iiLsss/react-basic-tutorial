import React, { Component } from 'react'
import { connect } from 'react-redux'
import Qs from 'qs'

export class index extends Component {
  render() {
    // let { location: { search }, data } = this.props 
    // let id = Qs.parse(search.substr(1)).id || 0
    // id = parseFloat(id)

    // 基于state传值
    let { location: { state }, data } = this.props 
    let id = state || 0
    id = parseFloat(id)

    let item = data.find(item => parseFloat(item.id) === id)
    if (!item) return '当前用户不存在'
    return (
      <div>
        <p>

        编号：{item.id}
        </p>
        <p>

        姓名：{item.name}
        </p>
      </div>
    )
  }
}


export default connect(state => ({...state.custom}))(index)
