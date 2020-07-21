import React from "react";
import { Card, Button } from "react-bootstrap";
import { ProjectItems } from "../../utils/User";

type ProjectCardProps = {
  projectIndex: number;
};

function ProjectCard(props: ProjectCardProps) {
  const { projectIndex } = props;

  return (
    <>
      <Card
        className="text-center"
        style={{
          background: "white",
          color: "black",
          width: "18rem",
          margin: "3vh 1.5vw 3vh 1.5vw",
        }}
      >
        <Card.Img
          variant="top"
          src={ProjectItems[projectIndex].backgroundImageUrl}
          alt="hehe"
          style={{}}
        />
        <Card.Body>
          <Card.Title>{ProjectItems[projectIndex].title}</Card.Title>
          <Card.Text>{ProjectItems[projectIndex].summary}</Card.Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              variant="outline-dark"
              href={ProjectItems[projectIndex].githubLink}
              target="_blank"
            >
              Github Link
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProjectCard;
