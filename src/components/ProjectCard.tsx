import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, link }) => {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px", margin: "10px" }}>
      <img src={image} alt={title} style={{ width: "100%", borderRadius: "8px" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

export default ProjectCard;
