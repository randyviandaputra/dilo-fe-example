import './TodoApp.css'

import axios from 'axios'
import React, {useEffect, useState} from 'react'

import AddTodo from './AddTodo'
import Search from './Search'
import TodoList from './TodoList'

const TodoApp = () => {
  const userData = window.localStorage.getItem('userData')
    ? JSON.parse(window.localStorage.getItem('userData'))
    : {}
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('')

  axios.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userData.token}`,
  }

  const onAddTodo = async description => {
    await axios.post('http://localhost:3000/tasks', {
      description,
      completed: false,
    })
    fetchData()
  }

  const onSearchTodo = searchText => {
    setSearch(searchText)
  }

  async function fetchData() {
    const request = await axios.get('http://localhost:3000/tasks')
    const data = request.data
    setTodos(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onDelete = async id => {
    await axios.delete(`http://localhost:3000/tasks/${id}`)
    fetchData()
  }

  const onMark = async id => {
    await axios.patch(`http://localhost:3000/tasks/${id}`, {
      completed: true,
    })
    fetchData()
  }

  const filteredTodos = todos.filter(todo => {
    return todo.description.toLowerCase().includes(search.toLowerCase())
  })

  const doneTodos = todos.filter(todo => {
    return todo.completed
  })

  return (
    <div className="todo-app">
      <h1 className="center">Todo App</h1>
      <h3 className="bold center">
        Total Todo : {filteredTodos.length} <br />
        Total Done Todo : {doneTodos.length}
      </h3>
      <Search onSearch={onSearchTodo} />
      <TodoList todos={filteredTodos} onDelete={onDelete} onMark={onMark} />
      <AddTodo onAdd={onAddTodo} />
    </div>
  )
}

export default TodoApp
