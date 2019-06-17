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
  componentWillMount () {
    let { data } = this.props
    let cloneData = data.slice(0);
    cloneData.push(data[0])
    cloneData.unshift(data[data.length - 1])
    this.cloneData = cloneData
  }
  render () {
    let {data} = this.props
    let {cloneData} = this
    if (data.length === 0) return ''
    return (
      <section className='container'>
        <ul className='wrapper'>
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
              return <li key={index}></li>
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
}