import React from 'react'
import ReactDOM from 'react-dom'
import ReactSwipe from 'react-swipe'
import './static/css/reset.css'
import './static/css/index.css'

let IMG_DATA = [{
  id: 1,
  title: '',
  pic: require('./static/images/1.jpg')
}, {
  id: 2,
  title: '',
  pic: require('./static/images/2.jpg')
}, {
  id: 3,
  title: '',
  pic: require('./static/images/3.jpg')
}]

ReactDOM.render(<main>
  <ReactSwipe
    className={'container'}
    swipeOptions={{
      auto: 2000
    }}
  >
    {
      IMG_DATA.map((item, index) => {
        return <div key={index}>
            <img src={item.pic} alt={item.title} />
          </div>
      })
    }
  </ReactSwipe>
</main>,document.querySelector('#root'))