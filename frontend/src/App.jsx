import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Layout from './components/Layout'
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import Subscription from './components/Subscription'
import Otp from './components/Otp'
import Domain from './components/Domain'
// import Dashboard from './components/Dashboard'
import Payroll from './components/Payroll'
function App() {

  return (
    <>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Otp/> */}
      {/* <Domain/> */}
      <Employee/>
      {/* <AddEmployee/> */}
      {/* <Subscription /> */}
      {/* <Dashboard/> */}
      {/* <Payroll /> */}
    </>
  )
}

export default App