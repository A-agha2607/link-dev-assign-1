import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route , Routes } from 'react-router'

import Movies from './pages/Movies.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
