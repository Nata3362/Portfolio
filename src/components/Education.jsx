import { FaGraduationCap, FaBriefcase, FaHandsHelping } from 'react-icons/fa'

const typeStyles = {
  Education: {
    icon: FaGraduationCap,
    dot: 'bg-[var(--button-accent)]',
    border: 'border-[var(--accent)]',
    text: 'text-[var(--accent)]',
  },
  Work: {
    icon: FaBriefcase,
    dot: 'bg-[var(--button-accent-warm)]',
    border: 'border-[var(--accent-warm)]',
    text: 'text-[var(--accent-warm)]',
  },
  Volunteer: {
    icon: FaHandsHelping,
    dot: 'bg-[var(--button-accent-warm)]',
    border: 'border-[var(--border)]',
    text: 'text-[var(--accent-warm)]',
  },
}

const timeline = [
  {
    type: 'Education',
    start: '2024',
    end: '2026',
    title: 'MSc in Health Technology',
    organization: 'Aalborg University',
    description:
      " ",
    details: [],
  },
  {
    type: 'Work',
    start: '2025',
    title: 'Software Developer',
    organization: 'CardioTech – Aalborg University',
    description:
      'Developed an interactive Python-based analysis tool for 12-lead ECG used by cardiologists and researchers. Took ownership of the system and worked agilely in ongoing dialogue with researchers about needs and priorities.',
    details: ['Python', 'OOP', 'UML', 'Agile'],
  },
  {
    type: 'Work',
    start: '2024',
    title: 'Product Developer',
    organization: 'Region Nordjylland',
    description:
      'Further developed a digital health solution for processing IMU sensor data. Worked with clinicians on needs and feedback, and was responsible for requirements, documentation, testing and new functionality.',
    details: ['IMU Data', 'Requirements', 'Testing', 'Documentation'],
  },
  {
    type: 'Volunteer',
    start: '2022',
    end: '2024',
    title: 'Board Member, PR & Events',
    organization: 'Bajers Bar – Student Society at Aalborg University',
    description:
      'Coordinated events and communication across a volunteer team, with responsibility for meeting deadlines and delegating tasks.',
    details: ['Coordination', 'Communication', 'Teamwork'],
  },
  {
    type: 'Education',
    start: '2021',
    end: '2024',
    title: 'BSc in Health Technology',
    organization: 'Aalborg University',
    description:
      'Analysis and development of health technology solutions with a focus on data, systems and signal processing. Built information systems supporting clinical workflows through interdisciplinary project work.',
    details: ['MVC Architecture', 'Databases', 'System Design', 'Signal Processing'],
  },
  {
    type: 'Work',
    start: '2021',
    title: 'Healthcare Assistant',
    organization: 'Karolinelundcenteret',
    description:
      'Gained experience with interdisciplinary collaboration, responsibility, communication and structure in a healthcare setting.',
    details: ['Healthcare', 'Collaboration', 'Communication'],
  },
  {
    type: 'Education',
    start: '2017',
    end: '2020',
    title: 'STX',
    organization: 'Silkeborg Gymnasium',
    description:
      '',
    details: ['Biologi', 'Kemi', 'Idræt'],
  },
  {
    type: 'Volunteer',
    start: '2014',
    end: '2021',
    title: 'Coach & Assistant Coach',
    organization: 'GFG Voel and Silkeborg IF',
    description:
      'Planned and led training sessions focused on motivating and developing each player individually, while creating a safe and supportive environment.',
    details: ['Leadership', 'Planning', 'Motivation'],
  },
]

const Education = () => {
  return (
    <section id='education' className='theme-section py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-left mb-12'>
          Education & Work
        </h2>

<div className='mb-10 hidden md:grid md:grid-cols-2 md:gap-24'>
  <h3 className='flex items-center gap-3 text-2xl font-bold text-[var(--accent)]'>
    <FaGraduationCap /> Education
  </h3>
  <h3 className='flex items-center gap-3 text-2xl font-bold text-[var(--accent-warm)]'>
    <FaBriefcase /> Work & Experience
  </h3>
</div>

<div className='relative'>
  <div className='absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-[var(--border)] md:left-1/2' />

  {timeline.map((item) => {
    const style = typeStyles[item.type]
    const Icon = style.icon
    const isEducation = item.type === 'Education'

    return (
    <article
      key={`${item.title}-${item.start}`}
      className='relative mb-12 pl-14 last:mb-0 md:grid md:grid-cols-2 md:gap-24 md:pl-0'
    >
      <span className={`absolute left-4 top-6 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full text-white md:left-1/2 ${style.dot}`}>
        <Icon />
      </span>

      <div
        className={`theme-card rounded-lg border-2 p-6 text-left ${style.border} ${
          isEducation ? 'md:col-start-1' : 'md:col-start-2'
        }`}
      >
        <div className='flex flex-wrap items-baseline gap-x-3'>
          <p className={`font-semibold ${style.text}`}>
            {item.end ? `${item.start} - ${item.end}` : item.start}
          </p>
          <p className='theme-muted text-sm uppercase tracking-wide'>
            {item.type}
          </p>
        </div>

        <h3 className='mt-1 text-2xl font-bold'>
          {item.title}
        </h3>

        <p className={`mt-1 ${style.text}`}>
          {item.organization}
        </p>

        <p className='theme-muted mt-3'>
          {item.description}
        </p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {item.details.map((detail) => (
            <span
              key={detail}
              className='rounded-full bg-[var(--surface-muted)] px-3 py-1 text-sm'
            >
              {detail}
            </span>
          ))}
        </div>
      </div>
    </article>
    )
  })}
</div>
      </div>
    </section>
  )
}

export default Education