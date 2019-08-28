import React, { Component } from 'react'
import { ConfigProvider, DatePicker, Calendar, Icon, Button } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
// import 'mone'
import '../../common/css/antd.css'
import 'moment/locale/zh-cn';
export class Home extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <DatePicker/>
        <Calendar/>
      </ConfigProvider>
    )
  }
}

export default Home
