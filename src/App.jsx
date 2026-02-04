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
    </div>
  )
}

export default App
