import React, { useState } from 'react'
import {Button} from 'antd'

export default () => {

  let [isSupport, setSupport ] = useState(false)
  const isCheckWebTRC = () => {
    navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;
    if (!!navigator.getUserMedia) {
      setSupport('恭喜您，经过测试')
    } else {
      setSupport('不支持')
    }
  }
 
  return (
    <>
      <Button onClick={isCheckWebTRC}>检查是否支持</Button>
      <p>{isSupport}</p>
    </>
  )
}
