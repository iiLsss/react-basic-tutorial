import React from 'react'
import ReactDOM from 'react-dom'
import Vote from './components/Vote/Vote'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'

ReactDOM.render(<main>
  <Vote 
    title={'谁支持谁反对'}
    store={store}
  />
</main>,document.querySelector('#root'))
