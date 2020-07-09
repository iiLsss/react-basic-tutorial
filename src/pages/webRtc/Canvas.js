import React,  { useState, useRef }  from 'react'
import { Button, Divider, Select} from 'antd'
import './canvas.css'
const { Option } = Select
export default () => {

  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const [filterStyle, setStyle] = useState('none')

  let mediaStream = null
  const openCamera = () => {
    var constraints = { video: true }
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      mediaStream = stream
      var video = videoRef.current;
      if ("srcObject" in video) {
        video.srcObject = stream;
      } else {
        video.src = window.URL.createObjectURL(stream);
      }
      video.onloadedmetadata = function(e) {
        video.play();
      }
    })
    .catch(function(err) {
      /* 处理error */
      console.log(err);
    })
  }


  const screenshots = () => {
    let ctx = canvasRef.current.getContext('2d')
    let width = canvasRef.current.width  = videoRef.current.videoWidth
    let height =  canvasRef.current.height = videoRef.current.videoHeight


    console.log(width, height)
    ctx.drawImage(videoRef.current, 0, 0, width, height);
  }

  const onSelect = (value) => {
    setStyle(value)
  } 


  return (
    <>
      <video className={filterStyle} ref={videoRef} ></video>
      <canvas className={filterStyle} ref={canvasRef} ></canvas>
      <br/>
      <Button type="primary" onClick={openCamera}>开启</Button> 
      <Divider type="vertical" />

      <Button type="primary" onClick={screenshots}>截图</Button> 
      <Select defaultValue="none" style={{ width: 120 }} onSelect={onSelect}>
        <Option value="none">none</Option>
        <Option value="blur">blur</Option>
        <Option value="grayscale">grayscale</Option>
        <Option value="invert">invert</Option>
        <Option value="sepia">sepia</Option>
      </Select>
    </>
  )
}