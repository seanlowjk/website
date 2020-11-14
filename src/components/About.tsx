import React from "react";
import { Card } from "react-bootstrap";

function About() {
  return (
    <div className="About" id="about">
      <Card className="about-container">
        <Card.Header className="text-center"> About Me</Card.Header>
        <Card.Body className="container-content">
          <Card className="content-card">
            <Card.Body className="text-center content-body">
              <img
                className="content-img"
                src="images/seanlowjk.jpg"
                alt="profilepic"
              ></img>
              I am a Year 3 Computer Science Student at the National University
              of Singapore.
              <br />I believe in life-long learning and teaching.
              <br /> Building and designing is something I love to do too!
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
