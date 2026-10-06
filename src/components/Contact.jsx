import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaLinkedin} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='theme-section py-20'id='contact'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>
                Contact Me
                </h2>
            <div className='flex flex-col md:flex-row item-center md:space-x-12'>
              <div className='flex-1'>
                <h3 className='text-3xl font-bold text-transparent bg-clip-text theme-gradient'>Let's Talk</h3>
                <p>Have a role, a project or just a question? Feel free to reach out. I'm open to new opportunities and would love to hear from you.</p>
                <div className='mb-4 mt-8'>
                    <FaEnvelope className='inline-block theme-accent mr-2'></FaEnvelope>
                    <a href="mailto:natasgar@gmail.com" className='hover:underline'>
                        natasgar@gmail.com
                    </a>
                </div>
                <div className='mb-4'>
                    <a
                    href="https://www.linkedin.com/in/natasja-garner-0052ba28b"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <FaLinkedin className='inline-block theme-accent mr-2'></FaLinkedin><span>Natasja Garner</span> 

                    </a>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
}

export default Contact