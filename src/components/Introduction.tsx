import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";

function Introduction() {
  return (
    <div className="Introduction" id="home">
      <Jumbotron className="main-hero">
        <Container className="main-container">
          <video
            className="container-video"
            src="images/3241.mp4"
            autoPlay
            loop={true}
          />
          <h1 className="container-header">Sean Low</h1>
          <h4 className="container-description"> Full Stack Web Developer </h4>
          <Button variant="outline-light" href="Resume.pdf" target="_blank">
            Resume
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Introduction;
