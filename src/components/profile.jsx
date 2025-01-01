const Profile = () => {
  return (
    <section id="profile" className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 h-auto md:h-[100vh] mx-4 md:mx-40 pt-4">
      <div className="flex h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden">
        <img src="../public/assets/my-photo.jpg" alt="My profile picture" className="object-cover w-full h-full" />
      </div>
      
      <div className="text-center">
        <p className="font-semibold">Hello, I'm</p>
        <h1 className="text-3xl md:text-5xl text-center">Shreyas</h1>
        <p className="text-xl md:text-2xl mb-4">Full-Stack Web Developer</p>
        
        <div className="flex justify-center gap-5">
          <button
            onClick={() => window.open('../public/assets/Shreyas_Resume.pdf')}
            className="btn btn-secondary"
          >
            Download CV
          </button>
          <button
            onClick={() => window.location.href='#contact'}
            className="btn btn-primary"
          >
            Contact Info
          </button>
        </div>
        
        <div className="flex justify-center mt-4 gap-5">
          <img
            src="../public/assets/linkedin.png"
            alt="My LinkedIn profile"
            className="h-6 md:h-8 cursor-pointer"
            onClick={() => window.open('https://www.linkedin.com/in/shreyas-88b726222/', '_blank')}
          />
          <img
            src="../public/assets/github.png"
            alt="My Github profile"
            className="h-6 md:h-8 cursor-pointer"
            onClick={() => window.open('https://github.com/Hitoshi-Kazuto', '_blank')}
          />
        </div>
      </div>
    </section>
  )
}

export default Profile;