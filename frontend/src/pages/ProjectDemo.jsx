import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const ProjectDemo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!project) {
    navigate("/projects");
    return null;
  }

  return (
    <div className="bg-[#112240] min-h-screen text-white pt-24 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto py-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
          <Typewriter words={[`${project.title}`]} loop={1} typeSpeed={50} />
          </h1>
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#64ffda] text-[#0a0a0a] rounded-lg font-semibold hover:bg-[#64ffda]/90 transition-colors text-sm sm:text-base"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Visit Live Project <FaExternalLinkAlt />
            </motion.a>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div 
              className="bg-[#0a0a0a] rounded-lg p-6 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>

            <motion.div 
              className="bg-[#0a0a0a] rounded-lg p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-[#0a0a0a] rounded-lg p-6 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-full max-w-4xl"> 
              <motion.div 
                className="relative pt-[56.25%]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <ReactPlayer
                  url={project.video}
                  controls
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0 rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDemo;