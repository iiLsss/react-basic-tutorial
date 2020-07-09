import React,  { useEffect, useRef }  from 'react'
import { Button, Divider} from 'antd'

export default () => {

  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  let mediaStream = null
  const openCamera = () => {
    var constraints = { video: {
      width: { min: 1280 },
      height: { min: 720 }
    }}
    // https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
      mediaStream = stream
      var video = videoRef.current;
      /**
       * 在旧版本的媒体资源规范中，添加流作为<video>元素需要创建一个关于 MediaStream的对象URL。现已没必要这样做了，浏览器已经移除了该操作的支持。
       * URL.createObjectURL  & srcObject
       * https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL  
       */
      if ("srcObject" in video) {
        video.srcObject = stream;
      } else {
        // 防止在新的浏览器里使用它，应为它已经不再支持了
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

  const closeCamera = () => {
    console.log(mediaStream.getTracks())
    mediaStream.getTracks().forEach(track => track.stop());
  }

  const photograph = () => {
    let ctx = canvasRef.getContext('2d')
    ctx.drawImage(videoRef.current, 0, 0, 600, 300)
  }


  return (
    <>
      <video ref={videoRef} width="600" height="300"></video>
      <canvas ref={canvasRef} width="600" height="300"></canvas>
      <br/>
      <Button type="primary" onClick={openCamera}>开启</Button> 
      <Divider type="vertical" />
      <Button type="danger" onClick={closeCamera}>关闭</Button>
      <Divider type="vertical" />
      <Button onClick={closeCamera}>截图</Button> 
    </>
          
  )
}