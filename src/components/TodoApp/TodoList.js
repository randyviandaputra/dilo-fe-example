import './todo.css'

import React from 'react'

import Todo from './Todo'

const TodoList = props => {
  const todos = props.todos

  const markTodo = id => {
    props.onMark(id)
  }

  const deleteTodo = id => {
    props.onDelete(id)
  }

  return (
    <div style={styles.todoList}>
      {todos.map((todo, index) => (
        <div className="container-list" key={index}>
          <Todo description={todo.description} completed={todo.completed} />
          <div className="action-group">
            {!todo.completed && (
              <button className="mark" onClick={() => markTodo(todo._id)}>
                &#10003;
              </button>
            )}{' '}
            <button className="delete" onClick={() => deleteTodo(todo._id)}>
              &#x2716;
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const styles = {
  todoList: {
    marginTop: '10px',
    marginBottom: '10px',
    outline: 'none',
    border: '1px solid #20232a',
    padding: '5px',
    borderRadius: '5px',
    color: '#20232a',
  },
}

export default TodoList
