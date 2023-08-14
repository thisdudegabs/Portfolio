import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Recanto from "../../Assets/Projects/RecantoVeiculos.png";
import LinkinPark from "../../Assets/Projects/LinkinPark.png";
import VetEmCasa from "../../Assets/Projects/vetemcasa.png";
import HellenRose from "../../Assets/Projects/HellenRose.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple"> Projetos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Alguns dos projetos que desenvolvi recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VetEmCasa}
              isBlog={false}
              title="Vet Em Casa"
              description="Projeto profissional para uma clinica veterinária com react.js. O site serve como apresentação da clinica e faz a todo momento call-to-actions para engajamento dos clientes. Responsívo e ainda em atualização."
              ghLink="https://github.com/thisdudegabs/site-vet-em-casa"
              demoLink="https://vet-em-casa.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HellenRose}
              isBlog={false}
              title="Psicologa Hellen Santos"
              description="Projeto profissional para uma psicóloga com react.js. O site também é uma apresentação do trabalho da doutora, também com call-to-actions para engajamento e uma forma de explicação de qual a metodologia dela."
              ghLink="https://github.com/thisdudegabs/website-psicologa"
              demoLink="https://hellen-rose.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LinkinPark}
              isBlog={false}
              title="Linkin Park"
              description="Projeto pessoal para a banda, com próximos shows e links para compra de ingresso, videos da banda, catálogo de album loja de merch e novidades da banda. Tudo que uma pessoa precisa pra conehcer a banda!"
              ghLink="https://github.com/thisdudegabs/linkin-park-project"
              demoLink="https://linkin-park-project.vercel.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Recanto}
              isBlog={false}
              title="Recanto Veículos"
              description="Projeto pessoal de uma empresa de aluguel de carros, com catálogo de frota de carros disponíveis, call-to-actions, um blog com dicas e campos de agendamento do aluguel. Feito para aplicar alguns estudos de forma mais complexa."
              ghLink="https://github.com/thisdudegabs/ReactSite-Aluguel-De-Carros"
              demoLink="https://recanto-veiculos-aluguel.vercel.app/home"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
