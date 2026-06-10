import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const [leftRef, leftVisible] = useScrollAnimation()

  return (
    <section id='about' className='border-b border-black'>
      <div className='max-w-7xl mx-auto px-6 md:px-20 py-20'>
        <div className='grid md:grid-cols-12 gap-12'>
          {/* Left column - About */}
          <div
            ref={leftRef}
            className={`md:col-span-10 fade-in ${leftVisible ? 'visible' : ''}`}>
            <p className='text-sm uppercase tracking-widest mb-6 text-accent'>
              About
            </p>
            <h2 className='text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight tracking-tight'>
              Full-stack engineer. I build AI systems that actually ship.
            </h2>
            <div className='space-y-4 text-base md:text-lg leading-relaxed text-grey-dark'>
              <p>
                I specialize in React, FastAPI, and Python — with hands-on
                experience in LangGraph, RAG architectures, and vector
                databases. Previously contracted at Meta (top 1% entry-level,
                Rising Star Award) and built AI tooling at an early-stage
                startup.
              </p>
              <p>
                I care about systems that are well-designed end to end — from
                the API layer to the UI. Currently open to remote roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
