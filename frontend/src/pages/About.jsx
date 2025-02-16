import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import pfp from '../assets/1730317412299.jpeg';
import { motion } from 'framer-motion';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-[#112240] min-h-screen text-white pt-24">
      <div className="container mx-auto px-6 py-16">
        <motion.h1 
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <img 
              src={pfp}
              alt="Your Name" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
          <div className="space-y-6">
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
            >
              Hello! I'm Mesam E Tamaar Khan, a passionate full-stack developer based in Islamabad. 
              I enjoy creating beautiful and functional web applications that solve real-world problems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-[#64ffda] mb-2">Core Technologies</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>C#</li>
                    <li>C++</li>
                    <li>SQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#64ffda] mb-2">UI & Styling</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Tailwind CSS</li>
                    <li>Material UI</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#64ffda] mb-2">Tools & Platforms</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Git / Github</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Experience</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[#64ffda]">Freelance Desktop Developer</h3>
                  <p className="text-gray-400">2023 - 2024</p>
                  <p className="text-gray-300">Experienced in designing and developing good high-performance desktop applications, I have created scalable and user-friendly solutions tailored to client needs.</p>
                </div>
                <div>
                  <h3 className="text-[#64ffda]">Freelance Web Developer</h3>
                  <p className="text-gray-400">2024 - Present</p>
                  <p className="text-gray-300">Experienced in front-end and back-end development, I create responsive websites and custom web applications tailored to client needs. Skilled in modern frameworks and technologies, I focus on performance, security, and seamless user experiences.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 2.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div>
                <h3 className="text-[#64ffda]">Bachelor's in Computer Science</h3>
                <p className="text-gray-400">FAST NUCES, 2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default About