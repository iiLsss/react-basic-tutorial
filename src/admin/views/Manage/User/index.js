import React, { Component } from 'react'
import { connect } from 'react-redux'
import action from '../../../store/action'

export class index extends Component {
  submit = ev => {
    let { USER_ID, USER_NAME } = this.refs
    console.log(USER_ID)
    console.log(USER_NAME)
    let { create, history } = this.props
    create({
      id: USER_ID.value,
      name: USER_NAME.value,
    })
    USER_ID.value = ''
    USER_ID.value = ''
    history.push('/manage/other')
  }
  render() {
    return (
      <div>
        <p> 
          用户编号： <input type="text" ref='USER_ID' />
        </p>
        <p>
          用户姓名 <input type="text" ref="USER_NAME" />
        </p>
        <p>
          <button onClick={this.submit}>增加用户</button>
        </p>
      </div>
    )
  }
}


export default connect(state => ({...state.custom}), action.custom)(index)
