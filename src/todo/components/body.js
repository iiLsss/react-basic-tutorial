import React, { Component } from 'react'
import { connect } from 'react-redux'
import action from '../store/action'

export class Body extends Component {

  render() {
    // 获取 redux 中任务数据 根据flag标识 筛选对应的内容
    let { data, flag } = this.props
    data = data.filter(item => {
      let { state } = item
      state = parseFloat(state)
      if (flag === 'complete') return state === 1
      if (flag === 'uncomplete') return state === 0
      return true
    })
    return (
      <div className="panel-body">
        <ul className="list-group">
          {
            data.map((item, index) => {
              let {id, name, state} = item
              let checked = parseFloat(state) === 1 ? true : false
              return <li key={id} className="list-group-item">
                <input
                  type="checkbox"
                  name="todo"
                  onChange={ev => {
                    // 更新当前任务状态信息
                    let newState = ev.target.checked ? 1 : 0
                    this.props.updateState(id, newState)
                  }}
                  checked={!!state}
                />
                <span className={state === 1 ? 'complete text' : 'text'}>{name}{checked}</span>
                <span className="btn btn-danger"
                  onClick={ev => {
                    let isOK = window.confirm('一但删除将不能还原，确定要删除？')
                    if(isOK) {
                      this.props.remove(id)

                    }
                  }}
                >删除</span>
              </li>  
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(state => ({ ...state.todo }), action.todo)(Body)
