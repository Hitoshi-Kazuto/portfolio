const Footer = () => {
  return (
    <footer className="h-auto md:h-[26vh] mx-4">
      <nav>
        <div className="flex justify-center">
          {/* Render the <ul> only on medium and larger screens */}
          <ul className="hidden md:flex flex-row gap-8 text-lg md:text-xl">
            <li><a href="#about" className="hover:text-gray-500">About</a></li>
            <li><a href="#experience" className="hover:text-gray-500">Experience</a></li>
            <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p className="text-center text-gray-600 mt-4">Copyright © {(new Date().getFullYear())} Shreyas. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;