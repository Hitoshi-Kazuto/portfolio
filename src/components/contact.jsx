import email from "../../public/assets/email.png";
import linkedin from "../../public/assets/linkedin.png";

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col justify-center h-auto md:h-[70vh] mx-4 md:mx-40 pt-4">
      <p className="text-center py-1">Get in Touch</p>
      <h1 className="text-3xl md:text-5xl text-center font-semibold">Contact Me</h1>
      
      <div className="flex justify-center m-8">
        <div className="flex flex-col md:flex-row justify-center rounded-3xl border border-gray-400 bg-[#fafafa] p-4">
          <div className="flex items-center justify-center gap-2 mx-4 mb-4 md:mb-0">
            <img
              src={email}
              alt="Email icon"
              className="h-10"
            />
            <p className="text-lg">
              <a href="mailto:examplemail@gmail.com">shreyas.dbg@gmail.com</a>
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2 mx-4">
            <img
              src={linkedin}
              alt="LinkedIn icon"
              className="h-8"
            />
            <p className="text-lg">
              <a href="https://www.linkedin.com">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;