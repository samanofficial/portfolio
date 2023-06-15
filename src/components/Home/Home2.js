import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dp.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who Am <span className="teal"> I? </span>
            </h1>
            <p className="home-about-body">
            I am a highly skilled computer science engineer with experience working with a range of technologies, including AWS, GCP, MERN stack, CPP, and React.js.<br></br> I am passionate about using my technical expertise to create innovative solutions that address complex challenges.

In addition to my work, I enjoy exploring the world of science fiction and reading books related to business. I believe that these pursuits help me stay creative and inspired, enabling me to approach problems from different angles and find unique solutions.

I am always open to discussing potential opportunities or simply connecting with new people in the industry.<br></br> If you are interested in learning more about my work or collaborating on a project, please feel free to reach out.
              {/*and
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect with me</h1>
            <p>
              I'm available on these <span className="teal">platforms </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/samanofficial"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aman-global/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:amansingh31051@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
