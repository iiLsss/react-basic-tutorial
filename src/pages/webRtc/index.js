import React, { Component } from 'react'
import {Button, Tabs} from 'antd'
import CheckWebRTC from './Support'
import Camera from './Camera'
import Canvas from './Canvas'
import Audio from './Audio'
import Record from './record'

const { TabPane } = Tabs

export default class index extends Component {


  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Basic" key="1">
            <CheckWebRTC />
            <Camera />
          </TabPane>
          <TabPane tab="Canvas" key="2">
            <Canvas />
          </TabPane>
          <TabPane tab="Audio" key="3">
            <Audio />
          </TabPane>
          <TabPane tab="Record" key="4">
            <Record />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
