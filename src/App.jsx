import SideNav from './components/SideNav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-white text-black'>
      <SideNav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className='border-t border-black bg-white'>
        <div className='max-w-7xl mx-auto px-6 md:px-20 py-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm'>
          <p className='text-black'>© 2026 Jack Cain</p>
          <div className='flex items-center gap-8'>
            <p className='uppercase tracking-widest text-grey text-xs'>
              Atlanta, GA
            </p>
            <a
              href='#'
              className='text-xs uppercase tracking-widest hover:text-accent transition-colors'>
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
