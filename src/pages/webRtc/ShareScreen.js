import React, { useRef} from 'react'
import { Button } from 'antd'
let captureStream = null;

export default () => {

  const videoRef = useRef(null)

  const play = (s) => {
    videoRef.current.srcObject = s
    videoRef.current.onloadedmetadata = function(e) {
      videoRef.current.play();
    }
  }

  const share = async (displayMediaOptions) => {
    try {
      captureStream = await navigator.mediaDevices.getDisplayMedia(
        {
          audio:  {
            mandatory: {
              chromeMediaSource: 'desktop'
            }
          },
          video:   {
            mandatory: {
              chromeMediaSource: 'desktop',
              maxWidth: window.screen.width,
              maxHeight: window.screen.height
              /*cursor:"never" */
              /*取消录制鼠标，以免鼠标闪烁，这个目前标准定义了各浏览器还没实现，
              如果需要请使用webrtc-adapter，使用最新API，
              视频录制被单独分离成getDisplayMedia，
              但是cursor约束条件是否有效暂时也不确定。没试过。*/
            }
          }  
        }
      );
      play(captureStream)
    } catch(err) {
      console.error("Error: " + err);
    }
  }

   

  return (
    <>
      <video ref={videoRef}></video>
      <Button onClick={share}>分析屏幕</Button>
    </>
  )
}