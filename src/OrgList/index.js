import React, { useState } from 'react';
import { Tree, Modal } from 'antd';
import {data} from '../rsuite/data.js'
import List from './List'
console.log(data)

function initData(data) {
  let arr = []
  data.forEach(item => {
    item.key = item.org_id
    if (item.user_list.length) {
      item.title = <>{item.org_name}(<a>查看人员</a>)</>

    } else {
      item.title = item.org_name
    }
    arr.push(item)
    if (item.children) {
      initData(item.children)
    }
  })
  return arr
}

console.log(initData(data))

class Demo extends React.Component {
  state = {
    visible: false, // 弹窗显示
    checkedKeys: [], // 选中的组织id
    currentUserList: [], // 点击当前的人员列表
    userKeys: [], // 选中的人员keys

  }

  onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys); 
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    // setExpandedKeys(expandedKeys);
    // this.statesetAutoExpandParent(false);
  };

  onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    this.setState({
      checkedKeys
    })
    // setCheckedKeys(checkedKeys);
  };

  onSelect = (selectedKeys, info) => {
    let { node } = info
    let { checkedKeys, userKeys } = this.state
    let currentOrgId = node.org_id
    let userList = node.user_list
    // 判断当前点击的org是否被选中
    let isChecked = checkedKeys.includes(currentOrgId)
    console.log(isChecked, selectedKeys, currentOrgId) 
    if (isChecked) {
      // 遍历出当前组织下所有人员 uid
      let orgUserKeys =  userList.map(item => item.uid)
      // 与已选中的人员uid 合并成一个数组
      let newUserKeys = Array.from(new Set([...orgUserKeys, ...userKeys ]))
      console.log(newUserKeys)
      // 更新userkey
      this.setState({
        userKeys: newUserKeys
      })
    }
    
    if (info.node.user_list.length){
      this.setState({
        visible: true,
        currentUserList: info.node.user_list
      })

    }


    console.log(selectedKeys);
    this.setState({
      selectedKeys: selectedKeys
    })
    // setSelectedKeys(selectedKeys);
  };
  // 查看人员列表 选中ok
  handleOk = () =>{
    this.setState({
      visible: false
    })
  }
  // 查看人员列表 取消
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  userClick = (data) => {
    console.log(data, '----');
      //   console.log(data, '-------------');
    let {userKeys } = this.state
    let pos =  userKeys.indexOf(data.uid)
    if (pos < 0) {
      userKeys.push(data.uid)
    } else {
      userKeys.splice(pos, 1)
    }
    this.setState({
      userKeys
    })

  }

  render () {
    let { visible, userKeys, currentUserList, currentSelectKey, checkedKeys } = this.state
    return (
      <>
        选中人员列表{
          userKeys.map(item => (
            <span key={item}>{item}-----</span>
          ))
        }
        <Tree
          checkable
          onExpand={this.onExpand}
          // expandedKeys={expandedKeys}
          // autoExpandParent={this.autoExpandParent}
          onCheck={this.onCheck}
          checkedKeys={checkedKeys}
          onSelect={this.onSelect}
          // selectedKeys={selectedKeys}
          treeData={data}
        />
          <Modal
            title="该组织下所有人员"
            visible={visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            destroyOnClose={true}
          >
            <List 
              list={currentUserList}
              userKeys={userKeys} 
              onClick={this.userClick}
            />
          </Modal>
      </>
      
    );
  }
}


export default Demo