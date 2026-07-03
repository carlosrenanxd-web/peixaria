import react from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="text-white py-5" style={{ background: "#0d1b2a" }}>
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-left">
            <p>&copy; 2018. Todos os direitos reservados.</p>
          </Col>
          <Col md={6} className="text-center text-md-right">
            <p>Desenvolvido por Carlos Renan</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
