import React from 'react'
import AboutImage from '../assets/kanotur.png'

const About = () => {
  return (
    <div className='theme-section py-20'id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col items-center gap-8 md:flex-row md:gap-12'>
              <img src={AboutImage} alt="" className='mx-auto w-72 h-80 shrink-0 rounded object-cover md:mx-0'/>
              <div className='flex-1 text-left'>
                  <p className='text-lg mb-8'>
                  Biomedical Engineer with a passion for software development and building technical solutions. I enjoy understanding the bigger picture and turning ideas into intuitive, reliable, and practical software.
                I am naturally curious and enjoy diving into complex technical challenges. I am motivated by challenges that require me to learn something new and apply it in practice, whether that means exploring a new technology, programming language, or development tool.
                With experience in software development, embedded systems, biomedical signal processing, and interdisciplinary collaboration, I bring a structured and analytical mindset while enjoying working in ambitious teams where ideas are shared, challenged, and turned into better solutions.
                </p>
                <div className='mt-8 space-y-4'>

                  <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>HTML and CSS</label>
                    <div className='grow theme-progress-track rounded-full h-2.5'>
                        <div className='theme-gradient h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'> </div>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>Python</label>
                    <div className='grow theme-progress-track rounded-full h-2.5'>
                      <div className='theme-gradient h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'> </div>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <label htmlFor="htmlandcss" className='w-2/12'>MATLAB</label>
                    <div className='grow theme-progress-track rounded-full h-2.5'>
                      <div className='theme-gradient h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-8/12'> </div>
                    </div>
                  </div>
                </div>
                <div className='mt-12 flex justify-between text-center'>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text theme-gradient'>
                      3+
                    </h3>
                    <p>Years Experience</p>
                  </div>
                                    <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text theme-gradient'>
                      11+
                    </h3>
                    <p>Projects completed</p>
                  </div>
                                    <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text theme-gradient'>
                      99+
                    </h3>
                    <p>Good Ideas</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About