import React from "react";
import { Card } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { ProjectItems } from "../../utils/UserConstants";

function Projects() {
  return (
    <div className="Projects" id="projects">
      <Card className="project-container">
        <Card.Header className="text-center">Projects</Card.Header>
        <div className="project-cards">
          {ProjectItems.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Projects;
