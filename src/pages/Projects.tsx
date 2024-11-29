import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is the first project.",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/project1"
    },
    {
      title: "Project 2",
      description: "This is the second project.",
      image: "https://via.placeholder.com/150",
      link: "https://example.com/project2"
    },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
