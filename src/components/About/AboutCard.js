import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Oi, meu nome é <span className="purple">Gabriel Rocha Franco </span>
            e eu sou de <span className="purple"> São Paulo, SP.</span>
            <br /> Estou me formando em Ciência da Computação (finaliza em 2027)
            e programo desde 2013.
            <br />
            Atualmente, trabalho de forma freelance a mais de um ano, com o
            objetivo de ser seu futuro dev front-end. :)
            <br />
            <br />
            Além de codar, eu gosto de:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Acompanhar os jogos do meu time
            </li>
            <li className="about-activity">
              <ImPointRight /> Atualizar meu Letterboxd com review de filme
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar Pokemon FireRed em looping por anos
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
