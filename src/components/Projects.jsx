import React, { useState } from 'react'
import RehabGameImage from '../assets/projectImages/RehabGame.png'
import MilanoImage from '../assets/projectImages/MilanoOffice.png'
import CNNLungImage from '../assets/projectImages/vores_cnn.png'
import s2projectImage from '../assets/projectImages/s2.png'
import ST6Image from '../assets/projectImages/ST6.png'
import ST5Image from '../assets/projectImages/ST5.png'
import ST4Image from '../assets/projectImages/ST4.png'
import ST3Image from '../assets/projectImages/ST3.png'


const projects = [
    {
        id: 1,
        semester: '10th semester · Master\'s thesis',
        title: 'Embedded EMG-Controlled Gamification System for Rehabilitation of Hand Function after Stroke',
        image: RehabGameImage,
        description: 'A real-time embedded system that uses EMG signals to control a rehabilitation game for stroke patients training their hand function.',
        details: 'I developed a real-time embedded system on an STM32 microcontroller that processes EMG signals and uses them to control a rehabilitation game. The project covered the full communication pipeline from firmware to app, and combined hardware, software and an understanding of the patients\' needs to create a motivating training environment.',
        methods: [
            'Embedded C on STM32',
            'Real-time EMG signal processing',
            'Communication pipeline from firmware to app',
            'Integration of hardware and software',
            'Testing and validation',
        ],
    },
    {
        id: 2,
        semester: '9th semester · Politecnico di Milano',
        title: 'Risk of Dysgraphia Detection Using Raw Time Series Data from a Sensor Equipped Ink Pen',
        image: MilanoImage,
        description: 'A machine learning algorithm that detects the risk of handwriting difficulties in children from the raw sensor data of a smart ink pen.',
        details: 'During my exchange semester at Politecnico di Milano, I developed a machine learning algorithm that detects risk of dysgraphia (handwriting difficulties) in children. It works directly on raw time-series data recorded by a sensor-equipped ink pen, and the project was carried out in an international research environment.',
        methods: [
            'Preparation of raw sensor time-series data',
            'Feature extraction',
            'End-to-end machine learning in Python',
            'Collaboration in an international research group',
        ],
    },
    {
        id: 3,
        semester: '8th semester',
        title: 'Temporal 3D Convolutional Neural Network for Predicting Radiation Pneumonitis within 90 days',
        image: CNNLungImage,
        description: 'A deep learning model that compares CT scans from two time points to predict whether a lung cancer patient will develop radiation pneumonitis within 90 days.',
        details: 'Radiation pneumonitis is a lung inflammation that can develop 1–3 months after radiotherapy and range from harmless to life-threatening. Using CT scans from 179 patients with non-small cell lung cancer, we paired each baseline scan with a follow-up scan, extracted features from both and trained a CNN classifier to predict radiation pneumonitis within 90 days. The best model reached an F1 score of 0.632, which shows the potential of the approach, although it is not yet good enough for clinical use.',
        methods: [
            'CT pre-processing: conversion to Hounsfield units, resampling and z-score normalisation',
            'Rigid image registration of baseline and follow-up scans',
            'Lung segmentation with a pre-trained U-Net (R231)',
            'Feature extraction with a pre-trained 3D ResNet-50',
            'Custom CNN classifier in Python',
            'Handling class imbalance with sampling and class weighting',
            'Evaluation with F1 score, precision, recall and confusion matrix',
        ],
    },
    {
        id: 4,
        semester: '7th semester · Published at Computing in Cardiology 2025',
        title: 'Non-Invasive Diagnosis of Pulmonary Hypertension: The Role of ECG and SCG in Assessing S2 Deviations',
        image: s2projectImage,
        description: 'Investigating whether the timing of the second heart sound relative to the ECG can detect pulmonary hypertension, using data from pigs.',
        details: 'Pulmonary hypertension can change when the pulmonary valve closes. We developed methods to detect the end of the T-wave in the ECG and the onset of the second heart sound (S2) in the seismocardiogram (SCG), and compared the two in 8 pigs exposed to hypercapnia and hypoxemia. S2-onset came significantly earlier relative to T-end during hypercapnia (p = 0.01), but not during hypoxemia. The work was published at Computing in Cardiology 2025.',
        methods: [
            'ECG and SCG signal processing',
            'Detection of R-, T- and P-peaks with filtering, local maxima detection and segmentation',
            'T-end detection using the midpoint between T- and P-peak',
            'Heart sound detection with a Shannon energy envelope',
            'Heart-rate correction with the Fridericia formula',
            'Two-tailed paired t-tests',
        ],
        link: 'https://doi.org/10.22489/CinC.2025.127',
    },
    {
        id: 5,
        semester: '6th semester · Bachelor project',
        title: 'Monitoring of Cuff Pressure in Intubated Patients',
        image: ST6Image,
        description: 'CPATool: an information system that records and visualises cuff pressure over time, supporting quality control in the intensive care unit.',
        details: 'When a patient is intubated, the cuff on the breathing tube must have the right pressure, as both over- and under-inflation can cause complications. Together with a chief physician at Regional Hospital Gødstrup and AW Technologies, the developers of the TrachFlush device, we designed CPATool: a system that stores cuff pressure data in a database and presents it in dashboards, so staff can follow single treatments or compare many of them for quality management.',
        methods: [
            'Requirements gathered with clinicians and an industry partner',
            'Use cases, UML and system design',
            'Python application with MVC architecture',
            'Database for storing cuff pressure data',
            'Login page and two dashboards for single and multiple treatments',
            'Medical Device Regulation and ISO standards',
            'Verification and validation (V-model) testing',
        ],
    },
    {
        id: 6,
        semester: '5th semester',
        title: 'Information System for IMU Data in the Diagnosis of Benign Paroxysmal Positional Vertigo',
        image: ST5Image,
        description: 'An information system that calculates and visualises head movement data from an IMU sensor, to make BPPV diagnosis more reliable.',
        details: 'Benign paroxysmal positional vertigo (BPPV) affects around 30,000 people in Denmark every year. It is diagnosed with manual manoeuvres, where the reliability depends on how precisely the angles, angular velocity and duration are carried out. In collaboration with a doctor and PhD student at the Balance & Dizziness Center, Aalborg University Hospital, we developed an information system that calculates and visualises these values from IMU sensor data recorded during the Dix-Hallpike and Supine Roll manoeuvres.',
        methods: [
            'Requirements developed with an external clinical partner',
            'Object-oriented analysis, design and programming',
            'Java application with a Swing GUI and MVC architecture',
            'Database integration',
            'Calculation of angles, mean angular velocity and duration from IMU data',
            'MoSCoW prioritisation and the V-model',
        ],
    },
    {
        id: 8,
        semester: '4th semester',
        title: 'Visual Control of a Hearing Aid',
        image: ST4Image,
        description: 'Using eye movements measured with electrooculography (EOG) to steer which sound source a hearing aid amplifies.',
        details: 'People with hearing aids struggle with the "cocktail party problem": in a room with many sound sources, the hearing aid amplifies everything equally. We built a system that records EOG to detect where the user is looking, compares the eye position to thresholds calibrated for each test subject, and plays the sound from that direction. The system did not yet solve the problem reliably, mainly because of DC drift and difficulties with time thresholds, which gave valuable insight into the challenges of using DC-coupled biosignals.',
        methods: [
            'EOG recording with a DC-coupled amplifier',
            'Analogue low-pass and high-pass filters',
            'Analogue-to-digital conversion on an Arduino',
            'Per-subject calibration and threshold-based gaze detection',
            'Signal processing and analysis in MATLAB',
        ],
    },
    {
        id: 7,
        semester: '3rd semester',
        title: 'Patient Monitoring in a Neonatal Environment',
        image: ST3Image,
        description: 'A monitoring system for premature infants that measures pulse and oxygen saturation and sends an alarm to a phone when values go outside safe limits.',
        details: 'Around 6.2% of Danish children are born prematurely, and they need continuous monitoring because their condition can change rapidly. We built a system that records ECG through an analogue circuit, detects R-R intervals digitally and converts them to beats per minute, and measures oxygen saturation with a sensor. If a value goes outside the limits, an ESP32 immediately sends an alarm to a phone. The system was tested with a simulated ECG similar to that of a premature infant.',
        methods: [
            'Analogue ECG front end with amplifiers and filters',
            'Digital R-R interval detection and heart rate calculation',
            'Oxygen saturation (SpO2) sensor',
            'Arduino and ESP32 with WiFi alarms to a phone',
            'Top-down system design with block-level tests',
        ],
    },
]

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasMore = project.details || project.methods

  return (
    <div className='theme-card px-6 pb-6 rounded-lg text-left hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
        <p className='pt-4 text-sm font-semibold theme-accent'>
            {project.semester}
        </p>
        <h3 className='mt-2 mb-4 text-xl font-bold text-transparent bg-clip-text theme-gradient'>
            {project.title}
        </h3>
        {project.image && (
            <img src={project.image} alt="" className='rounded-lg mb-4 w-full h-48 object-cover'/>
        )}
        <p className='mt-2 theme-muted'>
            {project.description}
        </p>

        {isOpen && (
            <div className='mt-4 space-y-4'>
                {project.details && <p>{project.details}</p>}

                {project.methods && (
                    <div>
                        <h4 className='font-semibold'>Central methods</h4>
                        <ul className='mt-2 list-disc space-y-1 pl-5 theme-muted'>
                            {project.methods.map(method => (
                                <li key={method}>{method}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.link && (
                    <a href={project.link} target='_blank' rel='noreferrer' className='theme-accent inline-block hover:underline'>
                        Read the paper
                    </a>
                )}
            </div>
        )}

        {hasMore && (
            <button
                type='button'
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                className='theme-accent mt-4 inline-block hover:underline'
            >
                {isOpen ? 'Show less' : 'Read more'}
            </button>
        )}
    </div>
  )
}

const Projects = () => {
  return (
    <div className='theme-section py-20'id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Highlighted Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-8'>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects
