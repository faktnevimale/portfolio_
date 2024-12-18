// ProjectCard.tsx
import React from "react";
import "../pages/Styles.css";

const ProjectCard: React.FC<{ title: string; description: string; image: string; link: string; }> = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>Náhled</a>
    </div>
  );
};

export default ProjectCard;
