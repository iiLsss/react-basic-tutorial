import React from 'react'
import PropTypes from 'prop-types'
import '../static/css/banner.css'

export default class Banner extends React.Component {
  static defaultProps = {
    data: [],
    interval: 3000,
    step: 1,
    speed: 300
  }
  static propTypes = {
    data: PropTypes.array,
    interval: PropTypes.number,
    step: PropTypes.number,
    speed: PropTypes.number
  }
  constructor(props) {
    super(props)
    // 定义初始化状态
    let {step, speed} = this.props
    this.state = {
      step,
      speed
    }
  }
  componentWillMount () {
    let { data } = this.props
    let cloneData = data.slice(0);
    cloneData.push(data[0])
    cloneData.unshift(data[data.length - 1])
    this.cloneData = cloneData
  }

  componentDidMount () {
    // 把定时器返回值挂载到实例上，方便后期清除，结束自动轮播
    this.autoTimer = setInterval(this.moveRight,this.props.interval)
  }

  componentWillUpdate (nextProps, nextState) {
    // 边界判断：如果最新索引大于最大索引
    if (nextState.step > this.cloneData.length - 1) {
      this.setState({
        step: 1,
        speed: 0
      })
      // clearInterval(this.autoTimer)
    }
    // 向左边界判断
    if (nextState.step < 0) {
      this.setState({
        step: this.cloneData.length - 2,
        speed: 0
      })
    }

  }
  componentDidUpdate () {
    // 只有从克隆的第一张立即切换到真实第一张后，我们才做如下处理
    let {step, speed} = this.state
    if (step === 1 && speed === 0){
      // css3 transition 主栈短时间两次设置duration的代码，以最后一次为准。
      let delayTimer = setTimeout(() => {
        clearTimeout(delayTimer)
        this.setState({
          step: step + 1,
          speed: this.props.speed
        })
      }, 0)
    }

    if (step === this.cloneData.length - 2 && speed === 0) {
      let delayTimer = setTimeout(() => {
        clearTimeout(delayTimer)
        this.setState({
          step: step - 1,
          speed: this.props.speed
        })
      }, 0)
    }

  }

  render () {
    let {data} = this.props
    let {cloneData} = this
    if (data.length === 0) return ''

    let wrapperStyle = {
      width: cloneData.length * 1000 + 'px',
      left: -this.state.step * 1000 + 'px',
      transition: `left ${this.state.speed}ms linear 0ms`
    }
    return (
      <section className='container'
        onMouseEnter={this.movePause}
        onMouseLeave={this.movePlay}
        onClick={this.handleClick}
      >
        <ul className='wrapper' 
          style={wrapperStyle}
          // 当wrapper的动画切换完成在去执行下一次切换任务
          onTransitionEnd={() => this.isRun = false}
        >
          {
            cloneData.map((item, index) => {
              return <li key={index}>
                <img src={item.pic} alt={item.title}/>
              </li>
            })
          }
        </ul>
        <ul className='focus'>
          {
            data.map((item, index) => {
              let step = this.state.step
              let tempIndex = step - 1
              step === 0 ? tempIndex = data.length - 1 : console.log(13)
              step === cloneData.length - 1 ? tempIndex = 0 : console.log(13)
              return <li key={index} className={tempIndex === index ? 'active' : ''}></li>
            })
          }
        </ul>
        {/* // eslint-disable-next-line  */}
        <a href="javascript:;" className="arrow arrowLeft"></a>
        {/* // eslint-disable-next-line  */}
        <a href="javascript:;" className="arrow arrowRight"></a>
      </section>
    )
  }
  // 向右移动
  moveRight = () => {
    this.setState({
      step: this.state.step + 1
    })
  }
  movePause = () => {
    clearInterval(this.autoTimer)
  }
  movePlay = () => {
    this.autoTimer = setInterval(this.moveRight,this.props.interval)
  }
  handleClick = ev => {
    let target = ev.target
    let tarTag = target.tagName
    let tarClass = target.className
    console.log(tarTag)
    // 左右按钮切换
    if (tarTag === 'A' && /(^| +)arrow( +|$)/.test(tarClass)) {
      if (this.isRun) return
      this.isRun = true
      if (tarClass.indexOf('arrowRight') >= 0) {
        this.moveRight()
        return
      }
      if (tarClass.indexOf('arrowLeft') >= 0) {
        this.setState({
          step: this.state.step - 1
        })
        return
      }
    }
  }
}