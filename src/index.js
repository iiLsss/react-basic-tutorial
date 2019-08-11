import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import store from './todo/store'
import 'bootstrap/dist/css/bootstrap.min.css'


import './todo/static/less/todo.less'

import Head from './todo/components/head'
import Body from './todo/components/body'
import Footer from './todo/components/footer'

render(
  <Provider store={store}>
    <main className="panel panel-default">
      <Head></Head>
      <Body></Body>
      <Footer></Footer>
    </main>
  </Provider>
, document.querySelector('#root'))
