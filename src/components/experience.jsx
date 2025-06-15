import { useState } from 'react';
import check from "../../public/assets/checkmark.png";
import arrow from "../../public/assets/arrow.png";

const ExperienceCard = ({ title, skills, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card p-8 hover:shadow-lg transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between md:justify-start gap-4 mb-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <img
              src={icon}
              alt={`${title} icon`}
              className="h-6 w-6"
            />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
        </div>
        <img
          src={arrow}
          alt="Arrow"
          className={`h-5 w-5 transform transition-transform duration-300 md:hidden ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div className={`grid sm:grid-cols-2 gap-6 transition-all duration-300 ${
        isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 md:max-h-[1000px] md:opacity-100'
      } overflow-hidden`}>
        {skills.map((skill) => (
          <article key={skill.name} className="flex items-start gap-3">
            <div className="w-5 h-5 mt-1">
              <img
                src={check}
                alt="Checkmark"
                className="w-full h-full"
              />
            </div>
            <div>
              <h3 className="font-medium text-slate-900">{skill.name}</h3>
              {skill.level && (
                <p className="text-sm text-slate-600">{skill.level}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

const InternshipCard = ({ title, company, duration, description, technologies, certificate }) => {
  return (
    <div className="card p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <img
            src={check}
            alt="Internship icon"
            className="h-6 w-6"
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <span className="text-slate-400">•</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">{company}</span>
              {certificate && (
                <a
                  href={certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                >
                  <span>View Certificate</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="text-sm text-slate-500">{duration}</p>
        <p className="text-body">{description}</p>
        <div>
          <h3 className="font-medium text-slate-900 mb-2">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Experience = () => {
  const frontendSkills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "React JS", level: "Intermediate" },
    { name: "JavaScript", level: "Basic" },
    { name: "Material UI", level: "Intermediate" },
    { name: "Python", level: "Intermediate" }
  ]

  const backendSkills = [
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Mongo DB", level: "Basic" },
    { name: "Node JS", level: "Intermediate" },
    { name: "Express JS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
  ]

  const deploymentSkills = [
    { name: "Vercel", level: "Intermediate" },
    { name: "AWS Free Tier", level: "Basic" },
    { name: "Github", level: "Intermediate" }
  ]

  const softSkills = [
    { name: "Problem Solving" },
    { name: "Adaptability" },
    { name: "Collaboration" },
    { name: "Leadership" }
  ]

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Orbis International",
      duration: "6 Months",
      description: "Developed a comprehensive ticket management system for tracking and resolving customer issues. Implemented features for ticket creation, assignment, tracking, and resolution. Created a responsive frontend using React and Tailwind CSS, with a robust backend using Node.js and Express.",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "PostgreSQL", "Git", "Vercel", "AWS"],
      certificate: "https://www.canva.com/design/DAGqc3CR12g/PM6rY0jlVXyax49LEqoTIA/view?utlId=hce83ec318b"
    }
  ]

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">Explore My</p>
          <h2 className="heading-2">Experience</h2>
        </div>
        
        {/* Internship Section */}
        <div className="mb-16">
          <h3 className="heading-3 mb-8">Internships</h3>
          <div className="grid gap-8">
            {experiences.map((experience) => (
              <InternshipCard
                key={experience.title}
                {...experience}
              />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <h3 className="heading-3 mb-8">Skills</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <ExperienceCard 
            title="Frontend Development" 
            skills={frontendSkills}
            icon={check}
          />
          <ExperienceCard 
            title="Backend Development" 
            skills={backendSkills}
            icon={check}
          />
          <ExperienceCard 
            title="Project Deployment" 
            skills={deploymentSkills}
            icon={check}
          />
          <ExperienceCard 
            title="Soft Skills" 
            skills={softSkills}
            icon={check}
          />
        </div>
      </div>
    </section>
  )
}

export default Experience;