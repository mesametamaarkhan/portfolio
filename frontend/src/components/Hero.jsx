import pfp from '../assets/1730317412299.jpeg';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hi I'm  <span className="text-[#64ffda]"><Typewriter words={["Mesam E Tamaar Khan"]} loop={1} typeSpeed={50} /></span>
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }} // Delay until the name is fully typed
          >
            <Typewriter words={["A passionate full-stack developer crafting beautiful and functional web experiences"]} loop={1} typeSpeed={30} />
          </motion.p>
          <motion.a 
            href="#projects" 
            className="inline-block px-8 py-3 border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors rounded-lg"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 3}}
          >
            View My Work
          </motion.a>
        </div>
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}  
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#64ffda]">
            <img 
              src={pfp} 
              alt="Your Name" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
  
export default Hero