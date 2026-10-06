import React from 'react'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
<footer className='theme-footer py-4'>
  <div className='container mx-auto px-8 md:px-16 lg:px-24'>
    <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
      <div className='flex-1 mb-4 md:mb-0'>
        <h3 className='text-2xl font-bold mb-2'>Natasja</h3>
        <p className='theme-muted'>Based in Denmark</p>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer