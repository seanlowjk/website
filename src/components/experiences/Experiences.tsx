import React from "react";
import { Card } from "react-bootstrap";
import Job from "./JobItem";
import { ExperienceItems } from "../../utils/UserConstants";

function Experiences() {
  return (
    <div className="Experiences" id="experiences">
      <Card className="exp-container">
        <Card.Header className="text-center">Experiences</Card.Header>
        <div className="exp-cards">
          {ExperienceItems.map((job) => (
            <Job job={job} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Experiences;
