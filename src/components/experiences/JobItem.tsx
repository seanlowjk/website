import React from "react";
import { Card } from "react-bootstrap";
import { ExperienceItems } from "../../utils/User";

type JobProps = {
  infoIndex: number;
};

function JobItem(props: JobProps) {
  const { infoIndex } = props;

  return (
    <>
      <Card
        style={{
          borderStyle: "none",
          width: "30rem",
          margin: "1vw 1vw 1vw 1vw",
        }}
      >
        <Card.Body>
          <h5>{ExperienceItems[infoIndex].title}</h5>
          <h6>{ExperienceItems[infoIndex].role}</h6>
          <h6>{ExperienceItems[infoIndex].duration}</h6>
          <p>{ExperienceItems[infoIndex].description}</p>
        </Card.Body>
      </Card>
    </>
  );
}

export default JobItem;
