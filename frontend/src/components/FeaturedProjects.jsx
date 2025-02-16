import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "TechMart",
      description: "TechMart is a modern eCommerce platform for laptops, built using the MERN stack (MongoDB, Express, React, Node.js). It offers a seamless shopping experience with features like user authentication, product browsing, secure checkout, and order management. With a responsive design and real-time updates, TechMart ensures a smooth and efficient shopping journey for tech enthusiasts. 🚀",
      image: 'https://imgur.com/BXvyTaC.png',
      link: "/project-demo",
      liveUrl: "https://tech-mart-m92x.vercel.app/",
      video: "https://youtu.be/MOAAqzvBTfE",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Flex Trainer",
      description: "Flex Trainer is a gym management system built using C#, Windows Forms, and SQL, designed to streamline member registration, workout tracking, payment management, and scheduling. With an intuitive interface and robust database integration, it simplifies gym operations, ensuring a seamless experience for both trainers and members. 💪🔥",
      image: 'https://imgur.com/qsQmDIm.png',
      liveUrl: "",
      link: "/project-demo",
      video: "https://www.example.com/demo-video2.mp4",
      technologies: ["C#", "Windows Forms", "SQL"],
    },
  ];

  return (
    <section id="projects" className="py-16 bg-[#112240]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}  
        >
          {featuredProjects.map((project, index) => (
            <Link
              to={{ pathname: "/project-demo" }}
              state={{ project }} // Pass project as state
              key={index}
              className="block bg-[#0a0a0a] rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
        <motion.div 
          className="text-center mt-12"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, delay: 1}}
        >
          <Link 
            to="/projects"
            className="inline-block px-8 py-3 border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors rounded-lg"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects;