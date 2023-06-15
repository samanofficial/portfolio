import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import nft from "../../Assets/Projects/nft.png";
import falspot from "../../Assets/Projects/falspot.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="teal">Projects, Certifications & Awards</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few things I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nft}
              isBlog={false}
              title="NFT Minter"
              description="NFT minter is basic web application which makes nft of the object uploaded by generating unique address for the object
on polygon blockchain"
              ghLink="https://github.com/samanofficial/"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={falspot}
              isBlog={false}
              title="Falspot"
              description="Falspot was simple mobile application made to locate favourite spots on map."
              ghLink="https://github.com/samanofficial/falspot"
              demoLink=""
            />
          </Col>

          

         

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
