import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{
        backgroundColor: "#f8f9fa",
        padding: "100px 0",
      }}
    >
      <Container>
        <Row className="mb-1">
          <Col className="text-center">
            <span
              style={{
                color: "#0d6efd",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              Nossa História
            </span>

            <h2
              style={{
                fontSize: "2.8rem",
                fontWeight: "700",
                color: "#212529",
                marginTop: "10px",
              }}
            >
              Sobre Ícaro Pescados
            </h2>

            <div
              style={{
                width: "80px",
                height: "3px",
                backgroundColor: "#0d6efd",
                margin: "20px auto",
              }}
            />
          </Col>
        </Row>

        {/* Bloco 1 */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h4 style={{ color: "#212529", fontWeight: "600" }}>Mais de 15 anos de experiência</h4>

            <p
              style={{
                color: "#6c757d",
                lineHeight: "1.8",
              }}
            >
              Há mais de 15 anos atuando no mercado de pescados, a Ícaro Pescados é referência em qualidade, confiança e atendimento.
            </p>
          </Col>
        </Row>

        {/* Bloco 2 */}
        <Row className="justify-content-end mb-5">
          <Col md={6} className="text-md-end">
            <h4 style={{ color: "#212529", fontWeight: "600" }}>Produtos Selecionados</h4>

            <p
              style={{
                color: "#6c757d",
                lineHeight: "1.8",
              }}
            >
              Trabalhamos com uma ampla variedade de peixes e frutos do mar, cuidadosamente selecionados para garantir frescor e
              procedência.
            </p>
          </Col>
        </Row>

        {/* Bloco 3 */}
        <Row className="align-items-center">
          <Col md={6}>
            <h4 style={{ color: "#212529", fontWeight: "600" }}>Compromisso com a Qualidade</h4>

            <p
              style={{
                color: "#6c757d",
                lineHeight: "1.8",
              }}
            >
              Nosso compromisso é oferecer produtos sempre frescos, naturais e de alta qualidade, levando o melhor do mar para a mesa dos
              nossos clientes.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
