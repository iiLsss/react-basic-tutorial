import React, { Component } from 'react'
import { ConfigProvider, DatePicker, Icon, Button, Upload, } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
// import 'mone'
import '../../common/css/antd.css'
import 'moment/locale/zh-cn';
import axios from 'axios'

const uploadProps = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  multiple: false,
  data: { a: 1, b: 2, c:'adwadwdwa' },
  headers: {
    Authorization: '$prefix $token',
  },
  onStart(file) {
    console.log('onStart', file, file.name);
  },
  onSuccess(ret, file) {
    console.log('onSuccess', ret, file.name);
  },
  onError(err) {
    console.log('onError', err);
  },
  onProgress({ percent }, file) {
    console.log('onProgress', `${percent}%`, file.name);
  },
  customRequest({
    action,
    data,
    file,
    filename,
    headers,
    onError,
    onProgress,
    onSuccess,
    withCredentials,
  }) {
    // EXAMPLE: post form-data with 'axios'
    const formData = new FormData();
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }
    formData.append(filename, file);

    axios
      .post(action, formData, {
        withCredentials,
        headers,
        onUploadProgress: ({ total, loaded }) => {
          onProgress({ percent: Math.round(loaded / total * 100).toFixed(2) }, file);
        },
      })
      .then(({ data: response }) => {
        onSuccess(response, file);
      })
      .catch(onError);

    return {
      abort() {
        console.log('upload progress is aborted.');
      },
    }
  },
};
export class Home extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <DatePicker/>
        <Upload {...uploadProps}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>,
      </ConfigProvider>
    )
  }
}

export default Home
