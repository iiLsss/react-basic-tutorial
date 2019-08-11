import React, { Component } from 'react'
import { connect } from 'react-redux'
import action from '../store/action'

export class Footer extends Component {

  constructor(props) {
    super(props)
    this.showData = [
      { text: '全部', flag: 'all' },
      { text: '已完成', flag: 'complete' },
      { text: '未完成', flag:'uncomplete'},
    ]
  }

  render() {
    let {flag} = this.props
    return (
      <div className="panel-footer">
        <ul className="nav nav-pills" onClick={this.updateFilter}>
          {
            this.showData.map((item, index) => {
              let {text, flag: itemFlag} = item
              return <li key={index} className={itemFlag === flag ? 'presentation active' : 'presentation'}> 
                <a href="javascript:;" flag={itemFlag}>{text}</a>
              </li>
            })
          }
        </ul>  
      </div>
    )
  }

  updateFilter = ev => {
    let target = ev.target,
        tarTag = target.tagName
    // 合并事件源: 事件源是LI 也让变成A
    if (tarTag === 'LI') {
      target = target.firstElementChild
      tarTag = target.tagName
    }
    if (tarTag === 'A') {
      let text = target.getAttribute('flag')
      // 当前筛选状态和点击按钮是一致的 这样是没有必要再重新更新筛选状态的
      if (this.props.flag === text) {
        return
      }
      this.props.filter(text)
    }
  }
}
export default connect(state => ({ ...state.todo }), action.todo)(Footer)
