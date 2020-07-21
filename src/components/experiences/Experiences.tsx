import React from "react";
import { Card } from "react-bootstrap";
import Job from "./JobItem";

function Experiences() {
  return (
    <div id="experiences">
      <Card>
        <Card.Header
          style={{
            background: "white",
            color: "black",
          }}
          className="text-center"
        >
          Experiences
        </Card.Header>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Job infoIndex={0} />

          <Job infoIndex={1} />

          <Job infoIndex={2} />

          <Job infoIndex={3} />
        </div>
      </Card>
    </div>
  );
}

export default Experiences;
