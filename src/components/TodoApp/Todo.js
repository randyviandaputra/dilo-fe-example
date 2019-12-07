import './Todo.css'

import React from 'react'

const Todo = props => {
  return (
    <div className={props.completed ? 'todo marked' : 'todo'}>
      {props.description}
    </div>
  )
}

export default Todo
