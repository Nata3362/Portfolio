import React from 'react'
import AboutImage from '../assets/kanotur.png'

const skills = [
    { name: 'Python', width: 'w-11/12' },
    { name: 'C / Embedded C', width: 'w-5/12' },
    { name: 'SQL', width: 'w-5/12' },
    { name: 'C#', width: 'w-5/12' },
    { name: 'MATLAB', width: 'w-10/12' },
    { name: 'JavaScript & React', width: 'w-8/12' },
    { name: 'Java', width: 'w-9/12' },

]

const About = () => {
  return (
    <div className='theme-section py-20'id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col items-center gap-8 md:flex-row md:gap-12'>
              <img src={AboutImage} alt="" className='mx-auto w-72 h-80 shrink-0 rounded object-cover md:mx-0'/>
              <div className='flex-1 text-left'>
                  <p className='text-lg mb-4'>
                  I hold an MSc in Biomedical Engineering (Health Technology) from Aalborg University, and I'm passionate about building digital solutions that create real value for their users. I work where IT, data and interactive systems meet, with a strong interest in system architecture, software design and implementation.
                  </p>
                  <p className='text-lg mb-4'>
                  Through study projects and roles at CardioTech and Region Nordjylland, I have worked across the whole development process: uncovering user needs with clinicians and researchers, designing and building systems, and writing requirements, documentation and tests. My experience ranges from FastAPI backends and SQL databases to dashboards built with OOP and MVC, end-to-end machine learning on sensor data, and embedded C on STM32 and ESP32.
                  </p>
                  <p className='text-lg mb-8'>
                  I'm curious, structured and analytical, and I thrive in teams where we share knowledge, help each other and use each other's strengths to find good solutions.
                  </p>
                <div className='mt-8 space-y-4'>
                  {skills.map(skill => (
                    <div key={skill.name} className='flex items-center'>
                      <span className='w-40 shrink-0'>{skill.name}</span>
                      <div className='grow theme-progress-track rounded-full h-2.5'>
                        <div className={`theme-gradient h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.width}`}> </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='mt-12 flex justify-between text-center'>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text theme-gradient'>
                      2
                    </h3>
                    <p>Proffesional Developer roles</p>
                  </div>
                                    <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text theme-gradient'>
                      12+
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