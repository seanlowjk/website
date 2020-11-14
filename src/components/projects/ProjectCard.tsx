import React from "react";
import { Card, Button } from "react-bootstrap";
import { ProjectItem } from "../../utils/UserTypes";

type ProjectCardProps = {
  project: ProjectItem;
};

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <>
      <Card className="text-center project-card">
        <Card.Img
          variant="top"
          src={project.backgroundImageUrl}
          alt={project.title}
        />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.summary}</Card.Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              variant="outline-dark"
              href={project.githubLink}
              target="_blank"
            >
              {project.linkText}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;
