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
                <p>I'm open to discussing web development projects or partnerships opportunities</p>
                <div className='mb-4 mt-8'>
                    <FaEnvelope className='inline-block theme-accent mr-2'></FaEnvelope>
                    <a href="mailto:natasgar@gmail.com" className='hover:underline'>
                        natasgar@gmail.com
                    </a>
                </div>
                <div className='mb-4'>
                    <FaPhone className='inline-block theme-accent mr-2'></FaPhone>
                    <span>+45 60 62 34 31</span>
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
                <div className='mb-4'>
                    <FaMapMarkedAlt className='inline-block theme-accent mr-2'></FaMapMarkedAlt>
                    <span>Himmerlandsgade 12, 9000, Aalborg, Denmark</span>
                </div>
              </div>
              <div className='flex-1 w-full'>
                <form className='space-y-4'>
                    <div>
                        <label htmlFor="name" className='block mb-2'>Your Name</label>
                        <input type="text" className='theme-input w-full p-2 rounded border' 
                        placeholder='Enter You Name' />
                    </div>
                    <div>
                        <label htmlFor="email" className='block mb-2'>Email</label>
                        <input type="text" className='theme-input w-full p-2 rounded border' 
                        placeholder='Enter You Email' />
                    </div>
                    <div>
                        <label htmlFor="message" className='block mb-2'>Message</label>
                        <textarea type="text" className='theme-input w-full p-2 rounded border' 
                        rows='5'
                        laceholder='Enter You Email' />
                    </div>
                    <button className="theme-gradient text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">Send</button>
                </form>
              </div>
            </div>
        </div>
    </div>
    )
}

export default Contact