import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter  } from 'react-router-dom';
import Router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav'
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Router />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
