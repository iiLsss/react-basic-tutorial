import React, { Component } from 'react'
import { Row, Col, Button } from 'antd';
import './index.css'

export class BlackSon extends Component {

  state = {
    isShowBall: false,
    blueBall: '',
    redBall: []
  }

  doubleBall = () => {
    let redArr = []
    while (redArr.length < 6) {
      let num = Math.floor(Math.random() * 33 + 1)
      if (redArr.indexOf(num) === -1){
        redArr.push(num)
      }
    }
    this.setState({
      blueBall: Math.floor(Math.random() * 7 + 1),
      redBall: redArr.sort((a, b) => a - b),
      isShowBall: true
    })
    
  }
  render() {
    let { blueBall,redBall, isShowBall} = this.state
    return (
      <div>
        <Row>
          <Col span={6}>
            随机生成功能
          </Col>
          <Col span={18}>
            <Button onClick={this.doubleBall}>生成</Button>
            {
              isShowBall && (
                <div className="ballwall">
                  {redBall.map(item => <div className="red" key={item}>{item}</div>)}
                  <div className="blue">{blueBall}</div>
                </div>
              )
            }
           
            
            
          </Col>
        </Row>
      </div>
    )
  }
}

export default BlackSon
