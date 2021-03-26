import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { ProjectItem } from "../../utils/UserTypes";

function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  const getProjects = (): Promise<ProjectItem[]> => {
    const url: string = `${process.env.REACT_APP_DATA_REPO}/projects.json`;
    return fetch(url)
    .then(res => res.json())
    .then(json => json.projects || []);
  };

  useEffect(() => {
    getProjects().then(projects => setProjects(projects));
  }, [setProjects]);

  return (
    <div className="Projects" id="projects">
      <Card className="project-container">
        <Card.Header className="text-center">Projects</Card.Header>
        <div className="project-cards">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Projects;
