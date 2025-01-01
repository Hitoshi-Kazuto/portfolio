import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flex justify-around items-center h-[17vh]">
      <div className="text-3xl cursor-default">Shreyas</div>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-2xl">
        <li><Link onClick={() => window.location.href='#about'} className="hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-400">About</Link></li>
        <li><Link onClick={() => window.location.href='#experience'} className="hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-400">Experience</Link></li>
        <li><Link onClick={() => window.location.href='#projects'} className="hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-400">Projects</Link></li>
        <li><Link onClick={() => window.location.href='#contact'} className="hover:text-gray-500 hover:underline hover:underline-offset-4 hover:decoration-gray-400">Contact</Link></li>
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <div className="flex flex-col justify-between h-6 w-7 cursor-pointer" onClick={toggleMenu}>
          <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </div>
        
        <div className={`absolute top-full right-0 bg-white w-fit overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
          <ul className="text-center">
            <li><Link className="block p-3 text-2xl" onClick={() => window.location.href='#about'}>About</Link></li>
            <li><Link className="block p-3 text-2xl" onClick={() => window.location.href='#experience'}>Experience</Link></li>
            <li><Link className="block p-3 text-2xl" onClick={() => window.location.href='#projects'}>Projects</Link></li>
            <li><Link className="block p-3 text-2xl" onClick={() => window.location.href='#contact'}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar