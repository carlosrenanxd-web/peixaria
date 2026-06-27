import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Sobre() {
  return (
    <div id="sobre" className="py-5">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2>Sobre Nós</h2>
            <p>Conheça a história da nossa peixaria e o compromisso com a qualidade dos nossos produtos.</p>
            <p>Estamos atuando na area a mais de 15 anos no mercado, com varias opções de pescados</p>
            <p>Nosso maior compromisso e com a qualidade, sempre fresquinho e totalmente naturais</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
