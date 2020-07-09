import React from 'react'
import { List, Checkbox } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const TodoList = ({todo, deleteTodo}) => (
  <List
    size="small"
    className="list"
    bordered
    dataSource={todo}
    renderItem={item => 
      (
        <List.Item>
          <div>
            <Checkbox>
              {item.content}
            </Checkbox>
          </div>
          <DeleteOutlined onClick={() => deleteTodo(item)} />
        </List.Item>
        
      )
    }
  />
)

export default TodoList