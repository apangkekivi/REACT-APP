import React from 'react'
import "../App.css";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex items-center w-full justify-center'>
      <nav className='flex items-center justify-between w-[1144px]'>
        <h1 className='text-2xl font-bold text-[blue]'>NagaEd</h1>
        <ul className=' flex gap-5 '>
          <Link className='hover:text-[blue]' to='/'>Home</Link>
          <Link className='hover:text-[blue]' to='/login'>Login</Link>
          <Link className='hover:text-[blue]' to='/register'>Register</Link>
        </ul>
    </nav>
    </div>
    
  )
}

export default Header
