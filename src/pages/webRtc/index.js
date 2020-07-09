import React, { Component } from 'react'
import {Button} from 'antd'
import CheckWebRTC from './Support'
import Camera from './Camera'

export default class index extends Component {


  render() {
    return (
      <div>
        <CheckWebRTC />
        <Camera />
  
      </div>
    )
  }
}
