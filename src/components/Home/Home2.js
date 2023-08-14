import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXA EU ME <span className="purple"> APRESENTAR</span>
            </h1>
            <p className="home-about-body">
              Me apaixonei pela programação e aprendi a usar ela pra resolver
              problemas!
              <br />
              <br />
              Utilizo e estudo
              <i>
                <b className="purple"> Javascript, Typescript, HTML e CSS. </b>
              </i>
              <br />
              <br />
              Meus interesses são em criar &nbsp;
              <i>
                <b className="purple">Novas Ferramentas Web </b> e tornar fácil
                e compreensível para o cliente que{" "}
                <b className="purple">Não Entende Programação.</b>
              </i>
              <br />
              <br />
              Sempre que possível, faço esses projetos com{" "}
              <b className="purple">Node.js</b> e
              <i>
                <b className="purple">
                  {" "}
                  Libs Modernas de Javascript e Frameworks
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js e Next.js</b>
              </i>
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
            <h1>MINHAS REDES SOCIAIS</h1>
            <p>
              Ficarei feliz em me <span className="purple"> conectar </span> com
              você através:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/thisdudegabs"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gabriel-rocha-franco-ba361a217/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/thatgvbs/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:grocha815@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGoogleCircle />
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
