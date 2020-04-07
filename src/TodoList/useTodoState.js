import { useState } from 'react'

export default (initialValue) => {
  const [todos, setTodos] = useState(initialValue)
  console.log(todos);
  let addTodo = (val) => {
    setTodos([...todos, {
      id: todos[todos.length - 1].id + 1,
      content: val,
      isDone: false
    }])
  }
  let delTodo = val => {
    const newTodos = todos.filter(item=> item !== val)
    setTodos(newTodos)
  }
  return {
    todos,
    addTodo,
    delTodo
  }
}