import React from 'react'
import { Link } from 'react-router-dom'

const Reactroute = () => {
  return (
    <div className='container mx-auto'>
        <nav className='bg-gray-100 gap-4 text-[40px]'>
          <Link to="/invoice"><span>Invoice</span></Link>
          <Link to="/expenses"><span>Expenses</span></Link>
        </nav>
    </div>
  )
}

export default Reactroute