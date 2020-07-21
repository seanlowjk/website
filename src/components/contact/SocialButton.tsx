import React from "react";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialLink } from "../../utils/UserTypes";

type SocialButtonProps = {
  socialLink: SocialLink;
};

function SocialButton(props: SocialButtonProps) {
  const { socialLink } = props;

  return (
    <>
      <Button
        variant="outline-light social-card"
        style={{
          background: socialLink.buttonColor,
        }}
        href={socialLink.link}
        target="_blank"
      >
        <FontAwesomeIcon icon={socialLink.icon} />
      </Button>
    </>
  );
}

export default SocialButton;
