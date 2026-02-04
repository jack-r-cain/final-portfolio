import { projects } from '../data/projectsData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id='work' className='border-b border-black'>
      <div className='max-w-7xl mx-auto px-6 md:px-20 md:py-20'>
        {/* Section header */}
        <div className='mb-16'>
          <p className='text-sm uppercase tracking-widest mb-4 text-grey'>
            Selected Work
          </p>
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold'>
            Projects
          </h2>
        </div>

        {/* Project cards */}
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
