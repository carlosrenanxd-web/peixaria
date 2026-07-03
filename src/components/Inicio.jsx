import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CarroInicio from "../assets/Carrousel inicio/foto carro.jpeg";

const NUMERO = "5584921564886";

export default function Inicio() {
  return (
    <div id="inicio" style={{ background: "#0d1b2a", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#1d6eea" }}>
              Zona Norte, Natal
            </span>

            <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, margin: "16px 0" }}>
              Icaro Pescados, <span style={{ color: "#1d6eea" }}>Peixes e frutos do mar</span> direto pra sua mesa
            </h1>

            <p style={{ fontSize: "16px", color: "#6b7f96", lineHeight: 1.7, maxWidth: "420px", marginBottom: "32px" }}>
              Peixes, camarao e frutos do mar selecionados diariamente. Entregamos em toda Natal com rapidez e qualidade.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "36px" }}>
              <span
                style={{
                  background: "#111e2d",
                  border: "1px solid #1a2d3f",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Frete gratis na zona norte de Natal.
              </span>
              <span
                style={{
                  background: "#111e2d",
                  border: "1px solid #1a2d3f",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Segunda a Sabado 08:00h-18:00h
              </span>
              <span
                style={{
                  background: "#111e2d",
                  border: "1px solid #1a2d3f",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "13px",
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                Entrega rapida
              </span>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="#produtos"
                style={{
                  background: "#1d6eea",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                Ver produtos
              </a>
              <a
                href={"https://wa.me/" + NUMERO}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "14px 28px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontSize: "15px",
                  border: "1px solid #1a2d3f",
                }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </Col>

          <Col md={6} className="text-center">
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
              <img src={CarroInicio} alt="Entrega Icaro Pescados" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
