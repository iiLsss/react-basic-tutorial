import React, { Component } from 'react'
import WithLogger from './WithLogger'

class App extends Component {
  render() {
    return (
      <div>
        Logger
      </div>
    )
  }
}

export default WithLogger(App)