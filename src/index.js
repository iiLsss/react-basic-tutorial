import React from 'react';
import ReactDOM from 'react-dom';


let root = document.querySelector('#root')

// function Clock() {
//   return <section>
//     <h3>当前北京时间为：</h3>
//     <div>{new Date().toLocaleString()}</div>
//   </section>
// }

class Clock extends React.Component {
  constructor () {
    super()
    this.state = {
      time: new Date().toLocaleString()
    }
  }
  componentDidMount () {
    // => react生命函数周期函数之一：第一次组件渲染完成后触发（我们在这里只需要间隔1000ms把state状态中的time数据改变，这样react会自动帮我们把组件中的部分内容进行重新的渲染）
    setInterval(() => {
      /** 
       * 修改组件的状态
       * 1.修改部分状态：会用我们传递的对象和初始化的state进行匹配，只把我们传递的属性进行修改，没有传递的保留原始的状态信息（部分状态修改）
       * 2.当状态修改完成，会通知react把组件jsx中的部分元素重新进行渲染
      */
      this.setState({
        time: new Date().toLocaleString() 
      }, () => {
        // => 当通知react把需要重新渲染的jsx元素渲染完成后，执行的回调操作（类似于生命周期函数中的componentDidUpdate），项目中一般使用钩子函数而不是这个回调
        // => 设置回调函数的原因：setState是异步操作
      })
    }, 1000);
  }
  render () {
    return <section>
       <h3>当前北京时间为：</h3>
       <div>{this.state.time}</div>
     </section>
  }
}

ReactDOM.render(
  <div>
    <Clock/>
  </div>
, 
root, () => {
  
})

