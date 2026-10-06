import React from 'react'
import CV from "../assets/CV.png"

const hero = () => {
  return (
    <div className='theme-section text-center py-16'>
        <img src={CV} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
          I'm{" "}
          <span className='text-transparent bg-clip-text theme-gradient'>Natasja Garner</span>
          , Civil Engineer
        </h1>
        <p className='mt-4 text-lg theme-muted'>Biomedical Technologi and Informatics </p>
        <div className='mt-8 space-x-4'>
          <button className='theme-gradient text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact With Me
            </button>
          <button className='theme-gradient-warm text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Resume
            </button>
        </div>

    </div>

  )
}

export default hero
