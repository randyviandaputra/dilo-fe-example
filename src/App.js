import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom'
import TodoApp from './components/TodoApp/TodoApp'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import './App.css'

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const userData = window.localStorage.getItem('userData')
      ? setData(JSON.parse(window.localStorage.getItem('userData')))
      : null
  }, [])

  return (
    <BrowserRouter>
      <div>
        <header className="topnav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">Todo App</NavLink>
          {data ? (
            <NavLink to="/logout">Logout</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" component={TodoApp} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
