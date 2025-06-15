const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="text-center">
            <p className="text-slate-600">
              © {currentYear} Shreyas. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Built with React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;