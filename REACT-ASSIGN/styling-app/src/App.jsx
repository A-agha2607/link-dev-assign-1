import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Accordian from './components/Accordian.jsx'
import DisplayCards from './components/DisplayCards.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
<div className='bg-body-tertiary'>
       <Header/>
  <Accordian/>
  <DisplayCards/>
</div>
  )
}

export default App
