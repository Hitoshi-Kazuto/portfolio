import image1 from "../../public/assets/project-1.png";
import image2 from "../../public/assets/project-2.png";
import image3 from "../../public/assets/project-3.jpeg";
import image4 from "../../public/assets/project-4.png"

const ProjectCard = ({ name, image, github, demo, description }) => {
  return (
    <div className="project-card group">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">{name}</h3>
        <div className="flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary flex-1 text-center"
          >
            Github
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex-1 text-center"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      name: "TestifyAI",
      image: image4,
      github: "https://github.com/Hitoshi-Kazuto/QuizGenerator",
      demo: "https://quizgeneratorfrontend-self.vercel.app/",
      description: "An AI-powered quiz generation platform that creates customized tests based on user input."
    },
    // {
    //   name: "Ticket Management",
    //   image: image1,
    //   github: "https://github.com/Hitoshi-Kazuto/Ticket_Management",
    //   demo: "https://ticket-management-frontend.vercel.app",
    //   description: "A comprehensive ticket management system for tracking and resolving customer issues."
    // },
    {
      name: "WaterWise",
      image: image2,
      github: "https://github.com/Hitoshi-Kazuto/WaterWise/tree/main",
      demo: "",
      description: "Developed a machine learning research project utilising the DRASTIC vulnerability index, analysing groundwater contamination risks across seven critical parameters."
    }
  ]

  return (
    <section id="projects" className="section bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">Browse My Recent</p>
          <h2 className="heading-2">Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;