import profile from "../../public/assets/my-photo.jpg";
import experience from "../../public/assets/experience.png";
import education from "../../public/assets/education.png";

const About = () => {
  return (
    <section id="about" className="section bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">Get To Know More</p>
          <h2 className="heading-2">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img
                    src={experience}
                    alt="Experience icon"
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-slate-600">Less than 1 year<br />Full-Stack Development</p>
              </div>
              
              <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img
                    src={education}
                    alt="Education icon"
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-slate-600">B.Tech. Computer Science</p>
              </div>
            </div>
            
            <div className="card p-8">
              <p className="text-body leading-relaxed">
                I am a Senior year student @ JIIT, Noida. With a strong passion for technology 
                and a particular inclination towards web development. I possess a keen aptitude for 
                problem-solving and interested to mastering dynamic and user-friendly web applications.
                I am eager to leverage my skills in collaborative projects and contribute to innovative web-based 
                solutions in the tech industry.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About;