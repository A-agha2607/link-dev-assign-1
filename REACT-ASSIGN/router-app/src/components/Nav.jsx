import React from 'react'
import { Link } from 'react-router'
Link

export default function () {
  return (
    <div>
        <ul className='d-flex flex-row'>
            <Link to='/' className='pe-4'>Home</Link>
            <Link to='/movies'>Movies</Link>
        </ul>
    </div>
  )
}
