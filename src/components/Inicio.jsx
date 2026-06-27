import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function Inicio() {
  const slides = [
    {
      imagem: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44",
      titulo: "Ícaro Pescados",
      descricao: "Qualidade, frescor e confiança para sua família todos os dias.",
    },
    {
      imagem: "https://images.unsplash.com/photo-1579631542720-3a87824fff86",
      titulo: "Frutos do Mar Selecionados",
      descricao: "Camarão, peixe e frutos do mar escolhidos com rigor e procedência.",
    },
    {
      imagem: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9",
      titulo: "Atendimento e Entrega",
      descricao: "Praticidade e rapidez para levar o melhor do mar até você.",
    },
  ];

  return (
    <div id="inicio">
      <Container fluid className="px-0">
        <Row className="g-0">
          <Col md={12}>
            <Carousel fade interval={4000}>
              {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={slide.imagem}
                    alt={slide.titulo}
                    style={{
                      height: "800px",
                      objectFit: "cover",
                      filter: "brightness(0.65)",
                    }}
                  />

                  <Carousel.Caption
                    style={{
                      bottom: "30%",
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: "700",
                        color: "#fff",
                        letterSpacing: "2px",
                      }}
                    >
                      {slide.titulo}
                    </h1>

                    <div
                      style={{
                        width: "80px",
                        height: "3px",
                        backgroundColor: "#0d6efd",
                        margin: "15px auto",
                      }}
                    />

                    <p
                      style={{
                        fontSize: "1.1rem",
                        color: "#f8f9fa",
                        maxWidth: "600px",
                        margin: "0 auto",
                      }}
                    >
                      {slide.descricao}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
