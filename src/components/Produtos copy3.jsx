import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export default function Produtos() {
  return (
    <div id="produtos" className="py-5 bg-primary">
      <Container>
        <Col md={12} className="text-center text-white">
          <h1>Nossos Produtos</h1>
          <p>Explore a variedade de peixes frescos e frutos do mar que oferecemos.</p>
        </Col>

        <Row className="py-5">
          <Col md={12} className="text-center text-white">
            <h4>Peixes</h4>
            <p>Veja nossas variedades de peixes e files.</p>
          </Col>
          <Col md={12} className="d-flex justify-content-center gap-4 flex-wrap">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://kipeixe.com.br/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/f/i/fil_1.png"
              />
              <Card.Body>
                <Card.Title>Filé de pescada</Card.Title>
                <Card.Text>Filé de pescada fresquinho direto do mar.</Card.Text>
                <Card.Text>
                  <Badge bg="primary">R$42.89 reais.</Badge>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://oceanicaalimentos.com.br/wp-content/uploads/2021/03/FILE-TILAPIA-PESCADO.jpg" />
              <Card.Body>
                <Card.Title>Filé de tilápia</Card.Title>
                <Card.Text>Filé de tilápia já cortadinho e ensagado.</Card.Text>
                <Card.Text>
                  <Badge bg="primary">R$38.99 reais.</Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="py-5">
          <Col md={12} className="text-center">
            <h4>Camarão</h4>
            <p>Nossas variedades de camarões.</p>
          </Col>
          <Col md={12} className="d-flex justify-content-center gap-4 flex-wrap">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.awsli.com.br/800x800/2811/2811366/produto/344536214/615776-camarao-sem-cabeca-descascado_1-m6max4hfjg.jpg"
              />
              <Card.Body>
                <Card.Title>Filé de camarão P</Card.Title>
                <Card.Text>Filé de camarão Pequeno.</Card.Text>
                <Card.Text>
                  <Badge bg="primary">R$58.99 reais.</Badge>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/16541848496298db91afc97_75_75.jpeg"
              />
              <Card.Body>
                <Card.Title>Filé de camarão M</Card.Title>
                <Card.Text>Filé de camarão Medio.</Card.Text>
                <Card.Text>
                  <Badge bg="primary">R$72.00 reais.</Badge>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://static.vecteezy.com/system/resources/previews/026/515/571/non_2x/fresh-prawns-ingredient-for-cooking-free-png.png"
              />
              <Card.Body>
                <Card.Title>Camarão na casca</Card.Title>
                <Card.Text>Camarão com casca, totalmente natural.</Card.Text>
                <Card.Text>
                  <Badge bg="primary">R$35.00 reais.</Badge>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhx5o8uH6JUgqUL9GCvEYXwnNogGtPM2UUjcKixZuRr8D6hekc00dPss&s=10"
              />
              <Card.Body>
                <Card.Title>Camarão G na casca</Card.Title>
                <Card.Text>Camarão com casca grande, totalmente natural.</Card.Text>
                <Card.Text>
                  <Badge bg="primary">R$35.00 reais.</Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="py-5">
          <Col md={12} className="text-center">
            <h4>Lagosta</h4>
            <p>Nossas variedades de tamanho de lagostas.</p>
          </Col>
          <Col md={12} className="d-flex justify-content-center gap-4 flex-wrap">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://marsemfim.com.br/wp-content/uploads/2014/07/lagosta.jpg" />
              <Card.Body>
                <Card.Title>Lagosta </Card.Title>
                <Card.Text>Lagosta totalmente natural.</Card.Text>
                <Card.Text>
                  <Badge bg="primary">R$48.99 reais.</Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
