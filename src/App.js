import React from 'react'
import Login from './components/Login'

// import Practice from'./components/practice'
import "./components/app.css"
import { Route,Routes } from 'react-router-dom'
import Home from './components/home'
// import { Form } from 'react-bootstrap'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={  <Login/>}/>
        <Route path='/home' element={  <Home/>}/>
        <Route path='/login' element={  <Login/>}/>
      </Routes>

    </div>
  )
}

export default App
