const timeline = [
  {
    type: 'Work',
    start: '2025',
    end: 'Present',
    title: 'Full-Stack Developer',
    organization: 'Company name',
    description:
      'Building responsive web applications and developing practical software solutions.',
    details: ['React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    type: 'Education',
    start: '2023',
    end: '2025',
    title: 'Biomedical Engineering',
    organization: 'University name',
    description:
      'Focused on biomedical systems, signal processing, software development, and embedded systems.',
    details: ['Signal Processing', 'Embedded Systems', 'Programming'],
  },
  {
    type: 'Education',
    start: '2020',
    end: '2023',
    title: 'Previous Degree',
    organization: 'School name',
    description: 'Relevant education and technical experience.',
    details: ['Engineering', 'Mathematics'],
  },
]

const Education = () => {
  return (
    <section id='education' className='theme-section py-20'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>
          Education & Work
        </h2>

<div className='relative mx-auto max-w-5xl'>
  <div className='absolute left-4 top-0 h-full w-0.5 bg-green-400 md:left-1/2 md:-translate-x-1/2' />

  {timeline.map((item, index) => (
    <article
      key={`${item.title}-${item.start}`}
      className='relative mb-12 pl-12 last:mb-0 md:grid md:grid-cols-2 md:gap-12 md:pl-0'
    >
      <span className='absolute left-1.5 top-1 h-5 w-5 rounded-full border-4 border-green-400 bg-black md:left-1/2 md:-translate-x-1/2' />

      <div
        className={`md:col-span-1 ${
          index % 2 === 0
            ? 'md:col-start-1 md:text-right'
            : 'md:col-start-2 md:text-left'
        }`}
      >
        <p className='theme-accent font-semibold'>
          {item.start} - {item.end}
        </p>

        <p className='theme-muted text-sm uppercase tracking-wide'>
          {item.type}
        </p>

        <h3 className='mt-1 text-2xl font-bold'>
          {item.title}
        </h3>

        <p className='theme-accent mt-1'>
          {item.organization}
        </p>

        <p className='theme-muted mt-3'>
          {item.description}
        </p>

        <div className='mt-4 flex flex-wrap gap-2 md:justify-end'>
          {item.details.map((detail) => (
            <span
              key={detail}
              className='theme-card rounded-full px-3 py-1 text-sm'
            >
              {detail}
            </span>
          ))}
        </div>
      </div>
    </article>
  ))}
</div>
      </div>
    </section>
  )
}

export default Education