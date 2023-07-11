import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Call from './pages/Call/Call'

function App() {

  return (
    <>
      <Routes>
        <Route path=''  element={<Home/>}/>
        <Route path='/call/:callId' element={<Call/>}/>
      </Routes>
    </>
  )
}

export default App
