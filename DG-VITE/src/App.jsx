import { useState } from 'react'

import reactLogo from './assets/react.svg'

import NavBar from './components/NavBar/NavBar'
import HomeIndex from './components/HomeIndex/HomeIndex'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
 
  return (
    <div>    

        < NavBar />

        <HomeIndex/>  
   
  </div>
   
  )
}

export default App
