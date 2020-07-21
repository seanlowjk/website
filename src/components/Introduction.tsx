import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";

function Introduction() {
  return (
    <div id="home">
      <Jumbotron
        style={{
          background: "black",
          marginTop: "auto",
          height: "100vh",
          minHeight: "500px",
          position: "relative",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
        }}
      >
        <Container
          style={{
            zIndex: -1,
          }}
        >
          <video
            src="images/3241.mp4"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              height: "100vh",
              width: "100vw",
              transform: "translate3d(-50%, -50%, 0)",
              zIndex: -2,
            }}
            autoPlay
            loop={true}
          />
          <br />
          <h1 className="main-header">Sean Low</h1>
          <h4 className="main-desc"> Full Stack Web Developer </h4>
          <Button
            variant="outline-light"
            style={{
              minWidth: "5vw",
              marginRight: "1vw",
            }}
            href="Resume.pdf"
            target="_blank"
          >
            Resume
          </Button>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Introduction;
