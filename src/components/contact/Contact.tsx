import React from "react";
import { Card } from "react-bootstrap";
import { SocialLinks } from "../../utils/UserConstants";
import SocialButton from "./SocialButton";

function Contact() {
  return (
    <div>
      <Card className="Contact">
        <Card.Header>Contact Me</Card.Header>
        <Card.Body className="contact-body">
          <div className="social-cards">
            {SocialLinks.map((socialLink) => (
              <SocialButton key={socialLink.icon.iconName} socialLink={socialLink} />
            ))}
          </div>
          <div>(c) Low Jun Kai, Sean 2020</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
