import profile from "../../public/assets/my-photo.jpg";
import experience from "../../public/assets/experience.png";
import education from "../../public/assets/education.png";

const About = () => {
  return (
    <section id="about" className="section bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-600 font-medium mb-2">Get To Know More</p>
          <h2 className="heading-2">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
              <img
                src={profile}
                alt="Profile picture"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="card p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img
                    src={experience}
                    alt="Experience icon"
                    className="h-5 w-5 md:h-6 md:w-6"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Experience</h3>
                <p className="text-slate-600 text-sm md:text-base">Less than 1 year<br />Full-Stack Development</p>
              </div>
              
              <div className="card p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img
                    src={education}
                    alt="Education icon"
                    className="h-5 w-5 md:h-6 md:w-6"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Education</h3>
                <p className="text-slate-600 text-sm md:text-base">B.Tech. Computer Science</p>
              </div>
            </div>
            
            <div className="card p-6 md:p-8">
              <p className="text-body leading-relaxed">
              Full Stack Developer exploring the intersection of Web Development and Generative AI. 
              I build and deploy intelligent, user-centric apps using React, Node.js integrating with technologies like the Gemini API.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;