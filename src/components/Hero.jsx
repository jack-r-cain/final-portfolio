export default function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-start border-b border-black relative overflow-hidden'>
      {/* Content */}
      <div
        className='max-w-6xl w-full px-6 md:px-20 lg:px-32 relative z-10'
        style={{ marginTop: '-8vh' }}>
        <div className='space-y-6'>
          <h1
            className='font-display'
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 10rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}>
            Jack Cain
          </h1>

          <p className='text-xs md:text-sm uppercase tracking-widest text-grey-dark ml-3 md:ml-6'>
            Full Stack Developer • AI Engineer
          </p>

          <div className='pt-6'>
            <a
              href='#work'
              className='text-xs md:text-sm uppercase tracking-widest text-accent hover:opacity-70 transition-opacity inline-block ml-8 md:ml-16 group'>
              View Work{' '}
              <span className='inline-block group-hover:translate-y-1 transition-transform'>
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
