import { Link } from "react-router-dom";

const Projects = () => {
  const allProjects = [
    {
      title: "TechMart",
      description:
        "TechMart is a modern eCommerce platform for laptops, built using the MERN stack (MongoDB, Express, React, Node.js). It offers a seamless shopping experience with features like user authentication, product browsing, secure checkout, and order management. With a responsive design and real-time updates, TechMart ensures a smooth and efficient shopping journey for tech enthusiasts. 🚀",
      image: 'https://imgur.com/BXvyTaC.png',
      link: "/project-demo",
      liveUrl: "https://tech-mart-m92x.vercel.app/",
      video: "https://www.youtube.com/watch?v=noJfvPoP5ks",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      fullDescription: `
        TechMart is an innovative eCommerce solution tailored for tech enthusiasts...
      `,
    },
    {
      title: "Flex Trainer",
      description:
        "Flex Trainer is a gym management system built using C#, Windows Forms, and SQL, designed to streamline member registration, workout tracking, payment management, and scheduling. With an intuitive interface and robust database integration, it simplifies gym operations, ensuring a seamless experience for both trainers and members. 💪🔥",
      image: 'https://imgur.com/qsQmDIm.png',
      liveUrl: "",
      link: "/project-demo",
      video: "https://www.example.com/demo-video2.mp4",
      technologies: ["C#", "Windows Forms", "SQL"],
    },
    {
      title: "Meteor Maverick",
      description:
        "Meteor Maverick is a fast-paced 2D space shooter built with C++ and SFML, featuring intense combat, dynamic enemy waves, and thrilling power-ups. Players navigate through asteroid fields and battle enemy ships, testing their reflexes and strategy in an action-packed arcade experience. 🚀✨",
      image: "https://imgur.com/ARcDxZm.jpg",
      link: "/project-demo",
      liveUrl: "",
      video: "https://www.example.com/meteor-maverick.mp4",
      technologies: ["C++", "SFML"],
    },
  ];

  return (
    <div className="bg-[#112240] min-h-screen text-white pt-24">
      <div className="container mx-auto px-6 py-5">
        <h1 className="text-4xl font-bold mb-12">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <Link
              to={{ pathname: "/project-demo" }}
              state={{ project }} // Pass project as state
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
