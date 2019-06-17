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
  }
  render () {
    let {data} = this.props
    console.log(data)
    if (data.length === 0) return ''
    let cloneData = data.slice(0);
    cloneData.push(data[0])
    cloneData.unshift(data[data.length-1])
    return (
      <section className='container'>
        <ul className='wrapper'>
          <li>
            <img src="" alt=""/>
          </li>
        </ul>
        <ul className='focus'>
          <li></li>
        </ul>
        <a href="javascript:;" className="arrow arrowLeft"></a>
        <a href="javascript:;" className="arrow arrowRight"></a>
      </section>
    )
  }
}