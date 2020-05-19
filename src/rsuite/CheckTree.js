import React, { Component } from 'react'
import {data} from './data.js'
import { CheckTree } from 'rsuite'
import './index.css'
console.log(data)

class Index extends Component {

  state = {
    value: [],

  }

  handleChange = (val) => {
    console.log(val)
    this.setState({
      value: [...val]
    })

  }
  showUser = (ev, data) => {
    console.log(ev);
    ev.stopPropagation()
    console.log(data, '2313')
    
  }

  render () {
    let { value } = this.state
    console.log(value, '2313213');
    return (
      <CheckTree 
        childKey={'son'}
        valueKey={'org_id'}
        data={data}
        value={value}
        onChange={this.handleChange}
        renderTreeNode={nodeData => {
          let isHasUser = nodeData.user_list.length
          return (
            <p className='item'>
               {nodeData.org_name}
               {isHasUser ? (<span className='user-list' onClick={(event) => this.showUser(event, nodeData)}>----查看人员</span>) : '' }
            </p>
          );
        }}
        virtualized  
      />
    )
  }
}

export default Index