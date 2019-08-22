import React from 'react'
import {render} from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import './index.css'
import A from './router-dom/components/A'
import B from './router-dom/components/B'
import C from './router-dom/components/C'

render(
  <HashRouter>
    <Switch>
      <Route path="/" exact component={A}></Route>
      <Route path="/b" component={B}></Route>
      <Route path="/pay" render={() => {
        let flag = localStorage.getItem('f')
        if (flag && flag ==='s') {
          return <C />
        } else {
          return '啊打底袜'
        }
      }}></Route>
      {/* 上述设置完成后，会在末尾设置一个匹配，以上都不符合，统一处理 */}
      <Route render={() => {
        return <h1>404</h1> 
      }} />

      {/* 
      也可以基于Redirect 进行重定向 
      to {string} 重新定向到新地址
      to {Object} 重新定向到新地址
      {
        pathname: 重定向地址
        search: 给定向的地址传参
        state: 给定向后的组件传递一些参数 
      }
      push 如果设置了这个属性，当前跳转的地址会加入history stack中记录一条
       */}
      <Redirect to="/" />
    </Switch>
  </HashRouter>
, document.querySelector('#root'))

