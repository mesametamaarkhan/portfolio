import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <Hero />
      <FeaturedProjects />
    </div>
  )
}

export default Home;