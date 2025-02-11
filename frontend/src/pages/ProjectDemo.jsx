import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectDemo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    navigate("/projects");
    return null;
  }

  return (
    <div className="bg-[#112240] min-h-screen text-white pt-24 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto py-16">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">{project.title}</h1>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#64ffda] text-[#0a0a0a] rounded-lg font-semibold hover:bg-[#64ffda]/90 transition-colors text-sm sm:text-base"
            >
              Visit Live Project <FaExternalLinkAlt />
            </a>
          )}
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            {/* Project Overview */}
            <div className="bg-[#0a0a0a] rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>

            {/* Technologies Used */}
            <div className="bg-[#0a0a0a] rounded-lg p-6">
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
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-[#0a0a0a] rounded-lg p-6 flex justify-center">
            <div className="w-full h-auto">
              <ReactPlayer 
                controls
                url={project.video}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDemo;
