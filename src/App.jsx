import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar'
import Profile from './components/profile'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins">
        <Navbar />
        <main>
          <Profile />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App