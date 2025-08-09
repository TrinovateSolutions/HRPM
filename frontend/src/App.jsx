import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Layout from './components/Layout';

function App() {

  return (
    <>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Layout>
        <h1 style={{color: 'black'}}>Welcome to the Dashboard</h1>
      </Layout>
    </>
  )
}

export default App
