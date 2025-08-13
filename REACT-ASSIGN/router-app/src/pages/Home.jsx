import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div className='d-flex flex-column align-items-center'>
        <h2 className='text-light'>Welcome to the home page!</h2>
        <Link to={'/movies'}>click here to see movies page</Link>

    </div>
  )
}

export default Home
