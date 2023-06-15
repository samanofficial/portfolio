import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiTerminal,
  DiGit,
  DiCss3,
  DiAws,
  DiDocker,
  DiLinux,
  DiMysql,
  DiOpenshift,
  DiUbuntu,
  DiWordpress,
  DiVisualstudio,
  DiVim,
  DiMongodb,
  DiStackoverflow,
  DiDatabase,
  DiDigitalOcean
} from "react-icons/di";
import {
  
  SiHtml5,
  SiDiscord,
  SiNpm
} from "react-icons/si";
import {
  GrHostMaintenance
} from "react-icons/gr";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiTerminal />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiAws />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiOpenshift />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiUbuntu />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiWordpress />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiVim />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiStackoverflow />
      </Col>
      <Col xs={2} md={1} className="tech-icons">
        <DiDatabase />
      </Col>
      <Col xs={3} md={1} className="tech-icons">
        <DiDigitalOcean />
      </Col>
      
    </Row>
  );
}

export default Techstack;
