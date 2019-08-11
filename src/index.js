import React from 'react'
import ReactDOM, {render} from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'


import './todo/static/less/todo.less'

import Head from './todo/components/head'
import Body from './todo/components/body'
import Footer from './todo/components/footer'

render(<main className="panel panel-default">
  <Head></Head>
  <Body></Body>  
  <Footer></Footer>
</main>, document.querySelector('#root'))
