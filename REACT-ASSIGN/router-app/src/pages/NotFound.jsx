import React from 'react'
import { Link } from 'react-router'

function NotFound() {
  return (
    <div className='d-flex flex-column align-items-center'>
        <h2 className='fs-3 text-danger'> 404 PAGE NOT FOUND</h2>
        <p> please head back to home</p>
    </div>
  )
}

export default NotFound