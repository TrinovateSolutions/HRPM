import { Routes, Route } from 'react-router-dom';
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
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/domain" element={<Domain />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/dashboard" element={/* <Dashboard /> */ null} />
      <Route path="/payroll" element={<Payroll />} />
    </Routes>
  )
}

export default App