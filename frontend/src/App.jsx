import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Layout from './components/Layout'
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
function App() {

  return (
    <>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Employee/> */}
      <AddEmployee/>
    </>
  )
}

export default App
