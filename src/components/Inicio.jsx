import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export default function Inicio() {
  return (
    <div id="inicio">
      <Container fluid className="px-0">
        <Row className="g-0">
          <Col md={12}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.co/900x400?text=Slide+1"
                  alt="Slide 1"
                  style={{ maxHeight: "450px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>Peixes Frescos</h3>
                  <p>Direto do mar para a sua mesa todo dia.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.co/900x400?text=Slide+2"
                  alt="Slide 2"
                  style={{ maxHeight: "450px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>Frutos do Mar</h3>
                  <p>Camarão, lula e muito mais com qualidade garantida.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://placehold.co/900x400?text=Slide+3"
                  alt="Slide 3"
                  style={{ maxHeight: "450px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3>Entrega Rápida</h3>
                  <p>Pediu, chegou fresquinho na sua porta.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
