import React from "react";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type SocialButtonProps = {
  buttonColor: string;
  icon: IconDefinition;
  link: string;
};

function SocialButton(props: SocialButtonProps) {
  const { buttonColor, icon, link } = props;

  return (
    <>
      <Button
        variant="outline-light"
        style={{
          margin: "1vh 1vw 1vh 1vw",
          background: buttonColor,
          fontSize: "1.5rem",
        }}
        href={link}
        target="_blank"
      >
        <FontAwesomeIcon icon={icon} />
      </Button>
    </>
  );
}

export default SocialButton;
