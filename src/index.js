import React from 'react'
import {render} from 'react-dom'
import Admin from './admin'

import Galaxy from '@galaxy/test'

console.log(Galaxy)
let a = new Galaxy()
render(
  <Admin />
, document.querySelector('#root'))

