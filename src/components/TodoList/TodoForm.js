import React, { useState } from 'react'
import { Input,Button } from 'antd'


const useInputState = initialValue => {
  const [value, setValue] = useState('')
  let onChange = event => setValue(event.target.value)
  return {
    value,
    onChange,
    reset: () => setValue('')
  }
}

const TodoForm = ({saveTodo}) => {
  let {value, onChange, reset} = useInputState()

  const addItem = () => {
    let val = value.trim()
    if(val.length) {
      saveTodo(val)
      reset()
    }
  }

  return (
    <>
    <Input 
      className="input"
      placeholder="please add todo"
      onChange={onChange}
      value={value}
      onPressEnter={addItem}
    />
    <Button onClick={addItem}>添加</Button>
    </>
  )
}

export default TodoForm