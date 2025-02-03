import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed w-full bg-[#0a0a0a]/95 backdrop-blur-lg z-50 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">Mesam E Tamaar Khan</Link>
        
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`text-white hover:text-[#64ffda] transition-colors ${location.pathname === '/' ? 'text-[#64ffda]' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`text-white hover:text-[#64ffda] transition-colors ${location.pathname === '/about' ? 'text-[#64ffda]' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className={`text-white hover:text-[#64ffda] transition-colors ${location.pathname === '/projects' ? 'text-[#64ffda]' : ''}`}
          >
            Projects
          </Link>
          <a href="#contact" className="text-white hover:text-[#64ffda] transition-colors">Contact</a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-4">
            <Link to="/" className="block text-white hover:text-[#64ffda] transition-colors">Home</Link>
            <Link to="/about" className="block text-white hover:text-[#64ffda] transition-colors">About</Link>
            <Link to="/projects" className="block text-white hover:text-[#64ffda] transition-colors">Projects</Link>
            <a href="#contact" className="block text-white hover:text-[#64ffda] transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar