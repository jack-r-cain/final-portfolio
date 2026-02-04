export default function Hero() {
  return (
    <section className='min-h-screen flex items-center border-b border-black relative overflow-hidden pt-16 md:pt-0'>
      {/* Grid background */}
      <div
        className='absolute inset-0 opacity-[0.03]'
        style={{
          backgroundImage: `
            linear-gradient(to right, #37393A 1px, transparent 1px),
            linear-gradient(to bottom, #37393A 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className='max-w-6xl w-full px-6 md:px-20 lg:px-32 relative z-10'>
        <div className='space-y-6'>
          <h1 className='text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight'>
            Jack Cain
          </h1>

          <p className='text-xs md:text-sm uppercase tracking-widest text-grey-dark ml-3 md:ml-6'>
            Full Stack Developer • AI Engineer
          </p>

          <div className='pt-6'>
            <a
              href='#work'
              className='text-xs md:text-sm uppercase tracking-widest hover:text-accent transition-colors inline-block ml-8 md:ml-16 group'>
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
