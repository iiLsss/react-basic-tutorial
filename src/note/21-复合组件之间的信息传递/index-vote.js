import React from 'react'
import ReactDOM from 'react-dom'
import Vote from './components/Vote/Vote'

import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(<main>
  <Vote 
    title={'勇士对战猛龙，勇士是冠军'}
    count={{
      n: 100,
      m: 78
    }}
  />
</main>,document.querySelector('#root'))