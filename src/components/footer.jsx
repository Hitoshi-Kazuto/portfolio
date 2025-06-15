const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container-custom">
        <div className="flex flex-col items-center">
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