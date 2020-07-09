import React from 'react'
import { List, Checkbox } from 'antd';


let style = {height: '220px', overflow: 'auto'}

const Item = ({item, selectedKey, currentSelectKey, onClick}) => {
  console.log(selectedKey, currentSelectKey)
  let isChecked = selectedKey.includes(item.uid)
  return (
    <List.Item onClick={() => onClick(item)}>
      <div>
        {
          item.is_distribute ? (<span></span>) : (
            <Checkbox checked={isChecked}  />
          )
        }
        <span style={{marginLeft: '5px'}}>{item.employee_name}</span>
      </div>
    </List.Item>
  )
}

class Index extends React.Component {
  state = { 
    currentSelectKey: []
  }


  // onClick = (data) => {
  //   console.log(data, '-------------');
  //   let {currentSelectKey } = this.state
  //   let pos =  currentSelectKey.indexOf(data.uid)
  //   if (pos < 0) {
  //     currentSelectKey.push(data.uid)
  //   } else {
  //     currentSelectKey.splice(pos, 1)
  //   }
  //   this.setState({
  //     currentSelectKey
  //   })
  // }

  render() {
    let { list, userKeys, onClick } = this.props
    let { currentSelectKey } = this.state
    return (
      <div style={style}>
        <List
          size="small"
          dataSource={list}
          renderItem={item => (
            <Item 
              item={item}
              selectedKey={userKeys}
              currentSelectKey={currentSelectKey}
              onClick={onClick}
            />
          )}
        />
      </div>
    );
  }
}

export default Index