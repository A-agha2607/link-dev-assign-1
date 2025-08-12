import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from './components/ProductForm'
import Products from './pages/Products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Products />
    </>
  )
}

export default App
