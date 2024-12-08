import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../pages/Styles.css";
import stavovapozvanka from '../assets/images/Stavova_pozvanka.jpg';
import stavovaauto from '../assets/images/stavova_auto.jpg';
import stavovamovie from '../assets/images/stavova_movie.jpg';
import stavovakoncert from '../assets/images/stavova_koncert.jpg';

const Projects: React.FC = () => {
const projects = [
{
title: "Narozeninová pozvánka",
description: "",
image: stavovapozvanka, 
link: stavovapozvanka,
},
{
title: "Fotomontáž auta",
description: "",
image: stavovaauto, 
link: stavovaauto,
},
{
title: "Filmový plakát",
description: "",
image: stavovamovie, 
link: stavovamovie,
},
{
title: "Plakát koncert",
description: "",
image: stavovakoncert, 
link: stavovakoncert,
},
];

return (
<div>
<h1>Mé projekty</h1>
<div style={{ display: "flex", flexWrap: "wrap" }}>
 {projects.map((project, index) => (
 <ProjectCard key={index} {...project} />
))}
</div>
</div>
);
};

export default Projects;

