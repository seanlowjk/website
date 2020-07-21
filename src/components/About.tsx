import React from "react";
import { Card } from "react-bootstrap";

function About() {
  return (
    <div id="about">
      <Card>
        <Card.Header
          style={{
            background: "white",
            color: "black",
          }}
          className="text-center"
        >
          About Me
        </Card.Header>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              borderStyle: "none",
              width: "50rem",
              margin: "1vw 1vw 1vw 1vw",
            }}
          >
            <Card.Body
              className="text-center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  width: "10rem",
                  height: "10rem",
                  borderRadius: "50%",
                }}
                src="images/seanlowjk.jpg"
                alt="profilepic"
              ></img>
              I am a Year 3 Computer Science Student at the National University
              of Singapore.
              <br />I believe in life-long learning and teaching.
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
