import React from 'react'
import ReactDOM from 'react-dom'
import Banner from './components/Banner'
import './static/css/reset.css'

let IMG_DATA = [{
    id: 1,
    title: '',
    pic: './static/images/1.jpg'
  }, {
    id: 2,
    title: '',
    pic: './static/images/2.jpg'
  }, {
    id: 3,
    title: '',
    pic: './static/images/3.jpg'
  }]

ReactDOM.render(<main>
  {/* 
    * data: 轮播图绑定的数据（[]）
    * intenrval：自动轮播间隔的时间（3000ms）
    * step：默认展示图片的索引（前后各克隆一张）（1）
    * speed：每一张切换所需要的运动时间（300ms）
    */}
  <Banner 
    data={IMG_DATA}
    interval={3000}
    step={1}
    speed={300}/>
</main>,document.querySelector('#root'))