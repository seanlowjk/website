import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Job from "./JobItem";
import { JobExperienceItem } from "../../utils/UserTypes";

function Experiences() {
  const [jobExperiences, setJobExperiences] = useState<JobExperienceItem[]>([]);

  const getExperiences = (): Promise<JobExperienceItem[]> => {
    const url: string = `${process.env.REACT_APP_DATA_REPO}/experiences.json`;
    return fetch(url)
    .then(res => res.json())
    .then(json => json.experiences || []);
  };

  useEffect(() => {
    getExperiences().then(jobs => setJobExperiences(jobs));
  }, [setJobExperiences]);

  return (
    <div className="Experiences" id="experiences">
      <Card className="exp-container">
        <Card.Header className="text-center">Experiences</Card.Header>
        <div className="exp-cards">
          {jobExperiences.map((job) => (
            <Job key={job.title} job={job} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Experiences;
