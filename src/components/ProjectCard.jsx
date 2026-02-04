import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ProjectCard({ project, index }) {
  const [ref, isVisible] = useScrollAnimation()
  const hasLinks = project.demoLink || project.githubLink

  return (
    <article
      ref={ref}
      className={`border-b border-black py-12 group hover:bg-grey-light/5 transition-all duration-300 px-4 -mx-4 fade-in ${isVisible ? 'visible' : ''}`}>
      <div className='grid md:grid-cols-12 gap-6 md:gap-8 items-start'>
        {/* Number */}
        <div className='md:col-span-2'>
          <span className='text-4xl md:text-6xl font-bold text-grey-light group-hover:text-black transition-colors'>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Content */}
        <div className={hasLinks ? 'md:col-span-7' : 'md:col-span-10'}>
          <h3 className='text-3xl md:text-4xl font-bold mb-4'>
            {project.title}
          </h3>

          <p className='text-base md:text-lg leading-relaxed text-grey-dark mb-6'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-3'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='text-xs uppercase tracking-widest border border-grey-dark px-3 py-2 hover:border-accent hover:text-accent transition-colors'>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {hasLinks && (
          <div className='md:col-span-3 flex md:flex-col gap-4 text-sm'>
            {project.demoLink && (
              <a
                href={project.demoLink}
                className='uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-2'>
                View Live →
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                className='uppercase tracking-widest hover:text-accent transition-colors flex items-center gap-2'>
                View Code →
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
