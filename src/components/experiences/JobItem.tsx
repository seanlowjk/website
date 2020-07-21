import React from "react";
import { Card } from "react-bootstrap";
import { JobExperienceItem } from "../../utils/UserTypes";

type JobProps = {
  job: JobExperienceItem;
};

function JobItem(props: JobProps) {
  const { job } = props;

  return (
    <>
      <Card className="exp-card">
        <Card.Body>
          <h5>{job.title}</h5>
          <h6>{job.role}</h6>
          <h6>{job.duration}</h6>
          <p>{job.description}</p>
        </Card.Body>
      </Card>
    </>
  );
}

export default JobItem;
