export default function Navigation() {
  return (
    <>
      {/* Desktop: Vertical side nav */}
      <nav className='hidden md:fixed md:left-0 md:top-0 md:h-screen md:flex md:items-center z-50'>
        <div className='px-6 py-12 border-r border-grey-light'>
          <ul className='flex flex-col gap-8 text-sm'>
            <li>
              <a
                href='#work'
                className='hover:opacity-50 transition-opacity writing-mode-vertical rotate-180'>
                Work
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='hover:opacity-50 transition-opacity writing-mode-vertical rotate-180'>
                About
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='hover:opacity-50 transition-opacity writing-mode-vertical rotate-180'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile: Horizontal top nav */}
      <nav className='md:hidden fixed top-0 left-0 right-0 bg-white border-b border-black z-50'>
        <div className='px-6 py-4 flex justify-between items-center'>
          <div className='font-bold text-lg'>JC</div>
          <ul className='flex gap-6 text-sm'>
            <li>
              <a href='#work' className='hover:text-accent transition-colors'>
                Work
              </a>
            </li>
            <li>
              <a href='#about' className='hover:text-accent transition-colors'>
                About
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='hover:text-accent transition-colors'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
