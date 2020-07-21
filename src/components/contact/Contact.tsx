import React from "react";
import { Card } from "react-bootstrap";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import SocialButton from "./SocialButton";

function Contact() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header
          style={{
            background: "white",
            color: "black",
          }}
        >
          Contact Me
        </Card.Header>
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SocialButton
              buttonColor={"#545454"}
              icon={faGithub}
              link={"https://github.com/seanlowjk"}
            />
            <SocialButton
              buttonColor={"#0e76a8"}
              icon={faLinkedin}
              link={"https://linkedin.com/in/seanlowjk"}
            />
            <SocialButton
              buttonColor={"#0088CC"}
              icon={faTelegram}
              link={"https://t.me/seanlowjk"}
            />
            <SocialButton
              buttonColor={"#0072c6"}
              icon={faEnvelope}
              link={"mailto:sean.low.jk@u.nus.edu"}
            />
          </div>
          <div>(c) Low Jun Kai, Sean 2020</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
