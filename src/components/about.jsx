const About = () => {
  return (
    <section id="about" className="relative mx-4 md:mx-40 pt-4 h-auto md:h-[96vh] min-h-fit">
      <p className="text-center py-1">Get To Know More</p>
      <h1 className="text-3xl md:text-5xl text-center font-semibold">About Me</h1>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 h-auto md:h-[80%]">
        <div className="flex h-[300px] w-full md:h-[400px] m-auto">
          <img
            src="../public/assets/my-profile.png"
            alt="Profile picture"
            className="rounded-3xl w-full object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col md:flex-row gap-8 mb-8 mt-8">
            <div className="flex-1 p-6 bg-white rounded-3xl border border-gray-400 text-center">
              <img
                src="../public/assets/experience.png"
                alt="Experience icon"
                className="h-8 mx-auto"
              />
              <h3 className="text-xl font-semibold">Experience</h3>
              <p>Less than 1 year <br />Full-Stack Development</p>
            </div>
            
            <div className="flex-1 p-6 bg-white rounded-3xl border border-gray-400 text-center">
              <img
                src="../public/assets/education.png"
                alt="Education icon"
                className="h-8 mx-auto"
              />
              <h3 className="text-xl font-semibold">Education</h3>
              <p>B.Tech. Computer Science</p>
            </div>
          </div>
          
          <div className="text-gray-600">
            <p>
            I am a Junior year student @ JIIT, Noida. <br />
            With a strong passion for technology 
            and a particular inclination towards web development. I possess a keen aptitude for 
            problem-solving and interested to mastering dynamic and user-friendly web applications.
            I am eager to leverage my skills in collaborative projects and contribute to innovative web-based 
            solutions in the tech industry.

            
            </p>
          </div>
        </div>
      </div>
      
      <img
        src="../public/assets/arrow.png"
        alt="Arrow icon"
        className="h-8 cursor-pointer absolute -right-20 bottom-10"
        onClick={() => window.location.href='#experience'}
      />
    </section>
  )
}

export default About;