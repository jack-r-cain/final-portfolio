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
              AI engineer who builds agentic systems — and ships them.
            </h2>
            <div className='space-y-4 text-base md:text-lg leading-relaxed text-grey-dark'>
              <p>
                I specialize in multi-agent orchestration with LangGraph, RAG
                architectures, and vector databases, built on a React, FastAPI,
                and Python stack. Previously contracted at Meta (top 1%
                entry-level, Rising Star Award) and built AI tooling at an
                early-stage startup.
              </p>
              <p>
                I care about systems that are well-designed end to end, from
                agent orchestration to the UI. Currently focused on Forward
                Deployed Engineer and AI engineering roles - the kind of work
                where shipping real agentic systems matters more than whiteboard
                algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
