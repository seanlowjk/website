import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";

function Introduction() {
  return (
    <div id="home">
      <Jumbotron
        style={{
          marginTop: "auto",
          height: "100vh",
          minHeight: "500px",
          background: "#aaa",
          position: "relative",
          zIndex: 0,
        }}
      >
        <Container
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "19vh",
            zIndex: -1,
          }}
        >
          <video
            src="images/3241.mp4"
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              width: "100vw",
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
