import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const produtos = {
  peixes: [
    {
      nome: "Filé de Pescada",
      desc: "Filé fresquinho direto do mar, ideal para fritar ou grelhar.",
      preco: "R$ 42,89",
      img: "https://kipeixe.com.br/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/f/i/fil_1.png",
    },
    {
      nome: "Filé de Tilápia",
      desc: "Já cortadinho e ensacado, pronto para o preparo.",
      preco: "R$ 38,99",
      img: "https://oceanicaalimentos.com.br/wp-content/uploads/2021/03/FILE-TILAPIA-PESCADO.jpg",
    },
  ],
  camarao: [
    {
      nome: "Camarão P",
      desc: "Camarão pequeno descascado, limpo e pronto para uso.",
      preco: "R$ 58,99",
      img: "https://cdn.awsli.com.br/800x800/2811/2811366/produto/344536214/615776-camarao-sem-cabeca-descascado_1-m6max4hfjg.jpg",
    },
    {
      nome: "Camarão M",
      desc: "Camarão médio descascado, sabor intenso e textura firme.",
      preco: "R$ 72,00",
      img: "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/16541848496298db91afc97_75_75.jpeg",
    },
    {
      nome: "Camarão na Casca",
      desc: "Camarão com casca, totalmente natural e fresquinho.",
      preco: "R$ 35,00",
      img: "https://static.vecteezy.com/system/resources/previews/026/515/571/non_2x/fresh-prawns-ingredient-for-cooking-free-png.png",
    },
    {
      nome: "Camarão G na Casca",
      desc: "Camarão grande com casca, perfeito para churrascos.",
      preco: "R$ 35,00",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhx5o8uH6JUgqUL9GCvEYXwnNogGtPM2UUjcKixZuRr8D6hekc00dPss&s=10",
    },
  ],
  lagosta: [
    {
      nome: "Lagosta",
      desc: "Lagosta inteira, totalmente natural e selecionada.",
      preco: "R$ 48,99",
      img: "https://marsemfim.com.br/wp-content/uploads/2014/07/lagosta.jpg",
    },
  ],
};

function ProdutoCard({ nome, desc, preco, img }) {
  return (
    <Card className="border-0 shadow-sm h-100" style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "260px" }}>
      <div style={{ height: "180px", overflow: "hidden", background: "#f1f3f5" }}>
        <Card.Img variant="top" src={img} alt={nome} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <Card.Body className="d-flex flex-column p-3">
        <Card.Title className="fw-bold mb-1" style={{ fontSize: "15px", color: "#0d1b2a" }}>
          {nome}
        </Card.Title>
        <Card.Text className="text-secondary mb-3" style={{ fontSize: "13px", lineHeight: "1.5", flexGrow: 1 }}>
          {desc}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold" style={{ fontSize: "17px", color: "#0d6efd" }}>
            {preco}
          </span>
          <Button size="sm" variant="outline-primary" style={{ borderRadius: "8px", fontSize: "13px", fontWeight: 600 }}>
            + Adicionar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function Secao({ titulo, subtitulo, itens }) {
  return (
    <div className="mb-5">
      <div className="mb-4">
        <h4 className="fw-bold mb-1" style={{ color: "#0d1b2a", fontSize: "20px" }}>
          {titulo}
        </h4>
        <p className="text-secondary mb-0" style={{ fontSize: "14px" }}>
          {subtitulo}
        </p>
        <div style={{ width: "36px", height: "3px", background: "#0d6efd", borderRadius: "2px", marginTop: "8px" }} />
      </div>
      <Row className="g-3">
        {itens.map((item, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <ProdutoCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default function Produtos() {
  return (
    <div id="produtos" style={{ background: "#f8f9fa", minHeight: "100vh", paddingTop: "60px", paddingBottom: "60px" }}>
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <Badge bg="primary" className="mb-2 px-3 py-2" style={{ fontSize: "12px", letterSpacing: "0.08em", borderRadius: "20px" }}>
            CARDÁPIO
          </Badge>
          <h1 className="fw-bold" style={{ color: "#0d1b2a", fontSize: "36px" }}>
            Nossos Produtos
          </h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: "480px", fontSize: "15px" }}>
            Peixes frescos e frutos do mar selecionados diariamente para a sua mesa.
          </p>
          <hr style={{ width: "60px", borderTop: "2px solid #dee2e6", margin: "20px auto 0" }} />
        </div>

        {/* Seções */}
        <Secao titulo="Peixes" subtitulo="Filés frescos capturados diariamente." itens={produtos.peixes} />
        <Secao titulo="Camarão" subtitulo="Variedades de camarão, descascado ou na casca." itens={produtos.camarao} />
        <Secao titulo="Lagosta" subtitulo="Lagostas selecionadas, totalmente naturais." itens={produtos.lagosta} />
      </Container>
    </div>
  );
}
