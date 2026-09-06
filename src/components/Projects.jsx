import React from 'react'
import RehabGameImage from '../assets/projectImages/RehabGame.png'
import MilanoImage from '../assets/projectImages/MilanoOffice.png'
import CNNLungImage from '../assets/projectImages/vores_cnn.png'
import s2projectImage from '../assets/projectImages/s2.png'
const projects = [
    {
        id: 1,
        title: 'Embedded EMG-Controlled Gamification System for Rehabilitation of Hand Function after Stroke',
        image: RehabGameImage,
        describtion: 'Combining hardwere, software and patient understand to create a rehabilitation environment'
    },
    {
        id: 2,
        title: 'Risk of Dysgraphia Detection Using Raw Time Series Data from a Sensor Equipped Ink Pen',
        image: MilanoImage,
        describtion: 'Combining hardwere, software and patient understand to create a rehabilitation environment'
    },
    {
        id: 3,
        title: 'Temporal 3D Convolutional Neural Network for Predicting Radiation Pneumonitis within 90 days',
        image: CNNLungImage,
        describtion: 'Combining hardwere, software and patient understand to create a rehabilitation environment'
    },
    {
        id: 4,
        title: 'Rehabilitation Game',
        image: s2projectImage,
        describtion: 'Combining hardwere, software and patient understand to create a rehabilitation environment'
        // https://vbn.aau.dk/ws/portalfiles/portal/814500956/CinC2025-127.pdf
    },
    {
        id: 5,
        title: 'Rehabilitation Game',
        image: RehabGameImage,
        describtion: 'Combining hardwere, software and patient understand to create a rehabilitation environment'
    },
    {
        id: 6,
        title: 'Rehabilitation Game',
        image: RehabGameImage,
        describtion: 'Combining hardwere, software and patient understand to create a rehabilitation environment'
    }
]
const Projects = () => {
  return (
    <div className='theme-section py-20'id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Highligheted Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project =>(
                    <div key={project.id} className='theme-card px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <div className='text-right text-2x1 front-bold text-transparent bg-clip-text theme-gradient'>
                            {project.id}
                        </div>
                        <h3 className='mt-2 text-2x1 font- text-transparent bg-clip-text theme-gradient'>
                            {project.title}
                        </h3>
                        <img src={project.image} alt="" className='rounded-lg mb-4 w-full h-48 object-cover'/>
                        <p className='mt-2 theme-muted'>
                            {project.describtion}
                        </p>
                        <a href="#" className='theme-accent mt-4 inline-block'>Read more</a>

                    </div>
                ))}
            </div>
        </div>
    </div>
              )
}

export default Projects