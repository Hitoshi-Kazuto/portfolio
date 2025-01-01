import check from "../../public/assets/checkmark.png";
import arrow from "../../public/assets/arrow.png";


const ExperienceCard = ({ title, skills }) => {
  return (
    <div className="p-6 bg-white rounded-3xl border border-gray-400">
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill) => (
          <article key={skill.name} className="flex w-32 justify-start gap-2">
            <img
              src={check}
              alt="Experience icon"
              className="h-6"
            />
            <div>
              <h3 className="font-semibold">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          </article>
        ))}
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
      { name: "Problem Solving", level: "" },
      { name: "Adaptability", level: "" },
      { name: "Collaboration", level: "" },
      { name: "Leadership", level: "" }
  ]

  return (
    <section id="experience" className="relative mx-4 md:mx-40 pt-4 h-auto md:h-[96vh] min-h-fit">
      <p className="text-center py-1">Explore My</p>
      <h1 className="text-3xl md:text-5xl font-semibold text-center">Experience</h1>
      
      <div className="flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-8">
          <ExperienceCard title="Frontend Development" skills={frontendSkills} />
          <ExperienceCard title="Backend Development" skills={backendSkills} />
          <ExperienceCard title="Project Deployment" skills={deploymentSkills} />
          <ExperienceCard title="Soft Skills" skills={softSkills} />
        </div>
      </div>
      
      <img
        src={arrow}
        alt="Arrow icon"
        className="h-8 cursor-pointer absolute -right-20 bottom-10"
        onClick={() => window.location.href='#projects'}
      />
    </section>
  )
}

export default Experience;