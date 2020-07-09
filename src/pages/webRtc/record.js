import React,  { useState, useRef }  from 'react'
import { Button, Divider, Select} from 'antd'

let mediaRecorder;
let recordedBlobs;
let stream = null


export default () => {

  const videoRef = useRef(null)
  const playBackRef = useRef(null)
  const [btn, setBtn] = useState('开始')


  const openCamera = () => {
    var constraints = { 
      audio: true,
      video: true
    }
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(s) {
      videoRef.current.srcObject = s
      stream = s
      videoRef.current.onloadedmetadata = function(e) {
        videoRef.current.play();
      }
    })
    .catch(function(err) {
      /* 处理error */
      console.log(err);
    })
  }

  const startRecording = () => {
    recordedBlobs = [];
    let options = {mimeType: 'video/webm;codecs=vp9,opus'};
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.error(`${options.mimeType} is not supported`);
      options = {mimeType: 'video/webm;codecs=vp8,opus'};
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.error(`${options.mimeType} is not supported`);
        options = {mimeType: 'video/webm'};
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.error(`${options.mimeType} is not supported`);
          options = {mimeType: ''};
        }
      }
    }
  
    try {
      mediaRecorder = new MediaRecorder(stream, options);
    } catch (e) {
      console.error('Exception while creating MediaRecorder:', e);
      return;
    }
  
    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    setBtn('结束')
    mediaRecorder.onstop = (event) => {
      console.log(event)
    };
    mediaRecorder.ondataavailable = (event) =>{
      if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
      }
    };
    mediaRecorder.start();
  }
  
  const stopRecording = () => {
    console.log(mediaRecorder);
    mediaRecorder.stop();
  }
  

  const open = () => {
    openCamera()
  }
  const record = () => {
    btn === '开始' ? startRecording() : stopRecording()
  }
  const play = () => {
    const superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
    playBackRef.current.src = null;
    playBackRef.current.srcObject = null;
    playBackRef.current.src = window.URL.createObjectURL(superBuffer);
    playBackRef.current.controls = true;
    playBackRef.current.play();
  }
  const download = () => {
    const blob = new Blob(recordedBlobs, {type: 'video/webm'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  }

  return (
    <>
      <video ref={videoRef} muted></video>
      <video ref={playBackRef}></video>
      <Button type="primary" onClick={open}>开启</Button>
      <Divider />
      <Button onClick={record}>{btn}</Button> 
      <Divider />
      <Button onClick={play}>播放</Button> 
      <Divider />
      <Button onClick={download}>播放</Button> 
    </>
  )
}
