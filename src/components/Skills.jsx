import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skillCategories } from '../data/skillsData'

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id='skills' className='border-b border-black'>
      <div className='max-w-7xl mx-auto px-6 md:px-20 py-20'>
        <div className='mb-16'>
          <p className='text-sm uppercase tracking-widest mb-4 text-accent'>
            Toolkit
          </p>
          <h2 className='text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight'>
            The stack behind the systems I build.
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-3 gap-12 fade-in ${isVisible ? 'visible' : ''}`}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category}>
              <p className='text-xs uppercase tracking-widest mb-6 text-grey-dark'>
                {category}
              </p>
              <ul className='space-y-3'>
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className='text-base md:text-lg text-grey-dark hover:text-black transition-colors'>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
