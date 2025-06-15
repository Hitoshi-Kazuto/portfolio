import email from "../../public/assets/email.png";
import linkedin from "../../public/assets/linkedin.png";
import github from "../../public/assets/github.png";

const ContactCard = ({ icon, title, content, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
        <img
          src={icon}
          alt={`${title} icon`}
          className="h-6 w-6"
        />
      </div>
      <div>
        <h3 className="font-medium text-slate-900">{title}</h3>
        <p className="text-slate-600">{content}</p>
      </div>
    </a>
  )
}

const Contact = () => {
  const contactMethods = [
    {
      icon: email,
      title: "Email",
      content: "shreyas.dbg@gmail.com",
      link: "mailto:shreyas.dbg@gmail.com"
    },
    {
      icon: linkedin,
      title: "LinkedIn",
      content: "Connect with me on LinkedIn",
      link: "https://www.linkedin.com/in/shreyas-88b726222/"
    },
    {
      icon: github,
      title: "GitHub",
      content: "Check out my projects",
      link: "https://github.com/Hitoshi-Kazuto"
    }
  ]

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-2">Get in Touch</p>
          <h2 className="heading-2">Contact Me</h2>
          <p className="text-body max-w-2xl mx-auto mt-4">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method) => (
            <ContactCard
              key={method.title}
              {...method}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-slate-600">
            Feel free to reach out through any of the above channels. I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact;