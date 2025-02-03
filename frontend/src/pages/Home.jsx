import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'

function Home() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Hero />
      <FeaturedProjects />
    </div>
  )
}

export default Home