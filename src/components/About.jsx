import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skillCategories } from '../data/skillsData'

export default function About() {
  const [leftRef, leftVisible] = useScrollAnimation()
  const [rightRef, rightVisible] = useScrollAnimation()

  return (
    <section id='about' className='border-b border-black'>
      <div className='max-w-7xl mx-auto px-6 md:px-20 py-20'>
        <div className='grid md:grid-cols-12 gap-12'>
          {/* Left column - About */}
          <div
            ref={leftRef}
            className={`md:col-span-7 fade-in ${leftVisible ? 'visible' : ''}`}>
            <p className='text-sm uppercase tracking-widest mb-6 text-grey'>
              About
            </p>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight'>
              {' '}
              Full-stack engineer
              <br />
              building exciting
              <br />
              AI applications
            </h2>
            <div className='space-y-4 text-base md:text-lg leading-relaxed text-grey-dark'>
              <p>
                I build practical applications that leverage modern machine
                learning capabilities, with a focus on agentic AI, RAG
                architectures, vector databases, and semantic search.
              </p>
              <p>
                With experience in different environments: 3+ years of contract
                work with Meta through HCLTech and 2 years of startup work at
                CollegeHouse, I bring hands-on development and creative problem
                solving experience to any and every project, emphasizing clean
                code and thoughtful design.
              </p>
            </div>
          </div>

          {/* Right column - Skills */}
          <div
            ref={rightRef}
            className={`md:col-span-5 fade-in ${rightVisible ? 'visible' : ''}`}>
            <p className='text-sm uppercase tracking-widest mb-6 text-grey'>
              Expertise
            </p>
            <div className='space-y-8'>
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category}>
                  <h3 className='text-sm uppercase tracking-widest font-bold mb-3'>
                    {category}
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className='bg-grey-dark/10 text-black px-3 py-1.5 text-sm font-medium hover:bg-accent hover:text-white transition-colors cursor-default'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
