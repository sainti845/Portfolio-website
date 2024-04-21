import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiAmazonec2,
  SiGit,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="EC2">
        <SiAmazonec2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons"  title="VSCode">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons"  title="Postman">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons"  title="Git">
        <SiGit />
      </Col>
    </Row>
  );
}

export default Toolstack;
