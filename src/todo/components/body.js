import React, { Component } from 'react'

export class Body extends Component {
  render() {
    return (
      <div className="panel-body">
        <ul className="list-group">
          <li className="list-group-item">
            <input type="checkbox" />
            <span className="text">吃饭</span>
            <span className="btn btn-danger">删除</span>
          </li>  
        </ul>
      </div>
    )
  }
}

export default Body
