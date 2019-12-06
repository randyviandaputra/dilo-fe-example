import React from 'react'
import './todo.css'

const Todo = props => {
  return (
    <div className={props.completed ? 'todo marked' : 'todo'}>
      {props.description}
    </div>
  )
}

export default Todo
