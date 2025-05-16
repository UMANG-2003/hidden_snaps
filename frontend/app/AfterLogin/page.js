import React from 'react'
import Navbar2 from './Navbar2'

function page() {
  return (
    <div>
      <Navbar2 />
      <div className='h-screen flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>Welcome to the After Login Page</h1>
      </div>
    </div>
  )
}

export default page