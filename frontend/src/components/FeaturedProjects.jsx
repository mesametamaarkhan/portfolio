import { Link } from 'react-router-dom';
import talentHub from '../assets/project1.png';

function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "TalentHub",
      description: "TalentHub is a platform that connects developers with companies for freelance work and students with internship opportunities. It helps businesses find skilled tech talent while enabling professionals to showcase their expertise and gain experience.",
      image: talentHub,
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-[#112240]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <a 
              href={project.link}
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
                <p className="text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/projects"
            className="inline-block px-8 py-3 border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 transition-colors rounded-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects;