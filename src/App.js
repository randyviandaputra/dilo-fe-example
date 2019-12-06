import './App.css'

import React from 'react'
import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom'

import Home from './components/Home/Home'
import TodoApp from './components/TodoApp/TodoApp'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header className="topnav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">Todo App</NavLink>
          <NavLink to="/user">User</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" component={TodoApp} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
