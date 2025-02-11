import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import ProjectDemo from './pages/ProjectDemo'

const App = () => {
  return (
    <Router>
      <div className="bg-[#0a0a0a] min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-demo" element={<ProjectDemo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App