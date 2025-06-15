import profile from "../../public/assets/my-profile.png";
import linkedin from "../../public/assets/linkedin.png";
import github from "../../public/assets/github.png";

const Profile = () => {
  return (
    <section id="profile" className="section min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src={profile} 
                  alt="My profile picture" 
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="text-center md:text-left">
            <p className="text-blue-600 font-medium mb-2">Hello, I'm</p>
            <h1 className="heading-1 mb-4">Shreyas</h1>
            <p className="text-xl md:text-3xl font-medium text-slate-600 mb-6 md:mb-8">
            Full Stack Developer | AI Enthusiast | B.Tech CSE, 2026 
            </p>
            
            <p className="text-body max-w-lg mx-auto md:mx-0 mb-6 md:mb-8">
            Building intelligent web apps at the edge of Full Stack Development and Generative AI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6 md:mb-8">
              <a
                href="https://www.canva.com/design/DAGVEbawVvA/81hpgPBR2OVOQtlqPBpU6A/view?utlId=h0877ef56fc"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
              >
                Contact Info
              </a>
            </div>
            
            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/shreyas-88b726222/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                />
              </a>
              <a
                href="https://github.com/Hitoshi-Kazuto"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;