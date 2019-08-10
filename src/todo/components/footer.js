import React, { Component } from 'react'
export class Footer extends Component {

  render() {
    return (
      <div className="panel-footer">
        <ul className="nav nav-pills">
          <li className="presentation">
            <span className="btn btn-primary">全部</span>
          </li>
          <li className="presentation">
            <span className="btn">已完成</span>
          </li>
          <li className="presentation">
            <span className="btn">未完成</span>
          </li>
        </ul>  
      </div>
    )
  }
}

export default Footer
