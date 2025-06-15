import { useState, useEffect } from 'react'
import resume from "../../public/assets/resume.pdf"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleNavigation = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-center h-[10vh]">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavigation(link.href)}
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-slate-600 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="container-custom h-full flex flex-col items-center justify-center">
            <div className="space-y-6 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className="block w-full text-xl text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar