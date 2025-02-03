import pfp from '../assets/1730317412299.jpeg';

function Hero() {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-[#64ffda]">Mesam E Tamaar Khan</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A passionate full-stack developer crafting beautiful and functional web experiences
            </p>
            <a 
              href="#projects" 
              className="inline-block px-8 py-3 border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors rounded-lg"
            >
              View My Work
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#64ffda]">
              <img 
                src={pfp} 
                alt="Your Name" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero