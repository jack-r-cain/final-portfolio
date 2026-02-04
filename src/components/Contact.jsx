export default function Contact() {
  return (
    <section id='contact' className='border-b border-black'>
      <div className='max-w-7xl mx-auto px-6 md:px-20 py-20'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Left column - Header */}
          <div>
            <p className='text-sm uppercase tracking-widest mb-6 text-grey'>
              Get in Touch
            </p>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              Let's build
              <br />
              together
            </h2>
          </div>

          {/* Right column - Links */}
          <div className='flex flex-col justify-end gap-6'>
            <a
              href='https://github.com/jack-r-cain'
              target='_blank'
              rel='noopener noreferrer'
              className='text-xl border-b border-black pb-2 hover:border-accent hover:text-accent transition-all flex justify-between items-center group'>
              <span>GitHub</span>
              <span className='text-sm group-hover:translate-x-2 transition-transform'>
                →
              </span>
            </a>

            <a
              href='https://linkedin.com/in/cain-jack'
              target='_blank'
              rel='noopener noreferrer'
              className='text-xl border-b border-black pb-2 hover:border-accent hover:text-accent transition-all flex justify-between items-center group'>
              <span>LinkedIn</span>
              <span className='text-sm group-hover:translate-x-2 transition-transform'>
                →
              </span>
            </a>

            <a
              href='mailto:jackcaindev@gmail.com'
              className='text-xl border-b border-black pb-2 hover:border-accent hover:text-accent transition-all flex justify-between items-center group'>
              <span>Email</span>
              <span className='text-sm group-hover:translate-x-2 transition-transform'>
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
