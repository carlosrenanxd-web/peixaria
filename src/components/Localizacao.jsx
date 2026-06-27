import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Localizacao() {
  return (
    <div id="localizacao" className="bg-light mb-5">
      <Container>
        {/* Título */}
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="fw-bold">📍 Nossa Localização</h2>
            <p className="text-muted">Venha nos visitar !</p>
          </Col>
        </Row>

        <Row className="g-4 align-items-stretch">
          {/* Mapa */}
          <Col md={8}>
            <div style={{ borderRadius: "12px", overflow: "hidden", height: "100%", minHeight: "350px" }}>
              <iframe
                title="Localização Peixaria"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.254!2d-35.2317!3d-5.7613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b255b8958b3475%3A0x7db738f02cd8ea6d!2sAv.+Dr.+Jo%C3%A3o+Medeiros+Filho%2C+3701+-+Potengi%2C+Natal+-+RN%2C+59120-200!5e0!3m2!1spt-BR!2sbr!4v1680000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>

          {/* Informações */}
          <Col md={4}>
            <div className="bg-white rounded-3 shadow-sm p-4 h-100 d-flex flex-column gap-4">
              <div>
                <div className="fs-4 mb-1">📍</div>
                <div className="fw-bold text-dark">Endereço</div>
                <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                  Av. Dr. João Medeiros Filho, 3701
                  <br />
                  Potengi, Natal - RN
                  <br />
                  CEP: 59120-200
                </div>
              </div>

              <div>
                <div className="fs-4 mb-1">🕐</div>
                <div className="fw-bold text-dark">Horário</div>
                <div className="text-muted" style={{ fontSize: "0.9rem" }}>
                  Segunda a Sábado
                  <br />
                  06:00h às 17:00h
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Dr.+João+Medeiros+Filho,+3701,+Potengi,+Natal,+RN"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mt-auto"
              >
                🗺️ Como Chegar
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
