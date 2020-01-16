import React from 'react'
import {render} from 'react-dom'
// import Galaxy from '@galaxy/test'

let Element = <div>hello world</div>

let a = React.createElement('div', {className: 'box'}, 'hello world')
console.log(Element)

render(
  a
, document.querySelector('#root'))

