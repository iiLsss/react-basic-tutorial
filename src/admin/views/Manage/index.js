import React, { Component } from 'react'
import { Route, Switch, Link, Redirect} from 'react-router-dom'
import User from './User'
import Content from './Content'
import Other from './Other'
import Details from './Details'

export class Custom extends Component {
  render() {
    return (
      <div>
        <div className="col-md-2">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/manage/user">添加用户</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/content">内容管理</Link>
            </li>
            <li className="list-group-item">
              <Link to="/manage/other">人员列表</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <Switch>
            {/* <Route path="/manage" exact component={User}></Route> */}
            <Route path="/manage/user" component={User} />
            <Route path="/manage/content" component={Content} />
            <Route path="/manage/other" component={Other} />
            <Route path="/manage/details" component={Details} />
            {/* 进入管理页默认显示用户管理list */}
            <Redirect from="/manage" to="/manage/user"/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Custom
