import React, { useState } from 'react'
import './index.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import useTodoState from './useTodoState'

const data = [{
  id: 1,
  content: 'Racing car sprays burning fuel into crowd.',
  isDone: false,
},{
  id: 2,
  content: 'Japanese princess to wed commoner.',
  isDone: false,
},{
  id: 3,
  content: 'Australian walks 100km after outback crash.',
  isDone: false,
}]



const App = () => {
  let {todos, addTodo, delTodo} = useTodoState(data)
  return (
    <div className="wall">
      <h2>TODO</h2>
      <TodoForm 
        saveTodo={addTodo}
      />
      <TodoList 
        todo={todos}
        deleteTodo={delTodo}
      />
    </div>
  )
}

export default App