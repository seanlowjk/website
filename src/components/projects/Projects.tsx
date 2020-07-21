import React from "react";
import { Card } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div id="projects">
      <Card>
        <Card.Header
          style={{
            background: "white",
            color: "black",
          }}
          className="text-center"
        >
          Projects
        </Card.Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ProjectCard projectIndex={0} />

          <ProjectCard projectIndex={1} />

          <ProjectCard projectIndex={2} />
        </div>
      </Card>
    </div>
  );
}

export default Projects;
