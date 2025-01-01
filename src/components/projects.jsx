import image1 from "../../public/assets/project-1.png";
import image2 from "../../public/assets/project-2.png";
import image3 from "../../public/assets/project-3.jpeg";
import arrow from "../../public/assets/arrow.png";


const ProjectCard = ({ name, image, github, demo }) => {
  return (
    <div className="p-6 bg-[#fafafa] rounded-3xl border border-gray-400">
      <div className="text-center">
        <img
          src={image}
          alt={name}
          className="rounded-3xl w-full h-auto max-w-[90%] mx-auto"
        />
      </div>
      <h2 className="text-xl md:text-2xl font-semibold m-4">{name}</h2>
      <div className="flex justify-center gap-4">
        <button
          className="btn btn-secondary"
          onClick={() => window.open(`${github}`, "_blank")}
        >
          Github
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => window.open(`${demo}`, "_blank")}
        >
          Live Demo
        </button>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="relative mx-4 md:mx-40 pt-4 h-auto md:h-[96vh] min-h-fit">
      <p className="text-center py-1">Browse My Recent</p>
      <h1 className="text-3xl md:text-5xl font-semibold text-center">Projects</h1>
      
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-8 mb-8 mt-8">
          <ProjectCard 
              name="Ticket Management"
              image={image1}
              github="https://github.com/Hitoshi-Kazuto/Ticket_Management"
              demo="https://ticket-management-frontend.vercel.app" 
          />
          <ProjectCard 
            name="WaterWise"
            image={image2}
            github="https://github.com/Hitoshi-Kazuto/WaterWise/tree/main"
            demo=""
          />
          <ProjectCard  
            name="Bookstore Operations"
            image={image3}
            github="https://github.com/Hitoshi-Kazuto/Book-Store-Project"
            demo=""
          />
        </div>
      </div>
      
      <img
        src={arrow}
        alt="Arrow icon"
        className="h-8 cursor-pointer absolute -right-20 bottom-10"
        onClick={() => window.location.href='#contact'}
      />
    </section>
  )
}

export default Projects;