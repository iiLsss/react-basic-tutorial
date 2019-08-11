import React from 'react'
import {render} from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import A from './router-dom/components/A'
import B from './router-dom/components/B'

render(
  <HashRouter>
    <Route path="/" exact component={A}></Route>
    <Route path="/b" component={B}></Route>
  </HashRouter>
, document.querySelector('#root'))
