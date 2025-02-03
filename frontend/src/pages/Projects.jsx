import talentHub from "../assets/project1.png";

const Projects = () => {
  const allProjects = [
    {
      title: "TalentHub",
      description:
        "TalentHub is a platform that connects developers with companies for freelance work and students with internship opportunities. It helps businesses find skilled tech talent while enabling professionals to showcase their expertise and gain experience.",
      image: talentHub,
      link: "https://tech-destination-ydce.vercel.app/",
      technologies: ["React", "Node.js"],
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-12">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="block bg-[#112240] rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300"
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
