import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class index extends Component {
  render() {
    let {data} = this.props
    return (
      <ul className="list-group">
        {
          data.map((item, index) => {
            return (

              <li 
                className="list-group-item"
                key={index}
                // onClick={ev => { this.props.history.push('/manage/details')}}
              >
                <Link to={{
                  pathname: '/manage/details',
                  // search:`?id=${item.id}`,
                  state: item.id
                }}>
                  编号：{item.id}
                  姓名：{item.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default connect(state => ({...state.custom}))(index)
