import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Offcanvas, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import tilapiaP from "../assets/File de tilápia M.jpeg";
import tilapiaM from "../assets/File de tilápia M.jpeg";
import AgulhaoBranco from "../assets/Agulhao branco 38,00.jpeg";
import Meka from "../assets/Meka 45,00.jpeg";
import OvaCurimata from "../assets/Ova de curimatã 50,00.jpeg";
import FilePescada from "../assets/FilePescada.jpeg";

import CamarãoM from "../assets/Camarão medio 38,99.jpeg";
import FileCamarão from "../assets/File de camarão M 56,00.jpeg";
import CamarãoPistola from "../assets/Camarão pistola 58,00.jpeg";

import LagostaExportacao from "../assets/Lagosta tipo exportação.jpeg";

import BuchadaBode from "../assets/Buchada de bode 45,00.jpeg";
import GalinhaCipira from "../assets/Galinha Caipira 50,00.jpeg";
import PicadoCarneiro from "../assets/Picado de carneiro 34,00.jpeg";
import PicanhaBovinaArgentina from "../assets/Picanha bovina Argentina 89,00.jpeg";
import FeijaoVerde from "../assets/Feijão verde 23,00.jpeg";

const SEU_NUMERO = "5584921564886";

const produtos = {
  peixes: [
    {
      id: 1,
      nome: "Filé de Pescada",
      desc: "Filé fresquinho direto do mar.",
      preco: 61.0,
      img: FilePescada,
    },
    {
      id: 2,
      nome: "Filé de Tilápia P",
      desc: "Filé de tilápia pequeno, já cortadinho e ensacado, pronto para o preparo.",
      preco: 38.99,
      img: "https://oceanicaalimentos.com.br/wp-content/uploads/2021/03/FILE-TILAPIA-PESCADO.jpg",
    },
    {
      id: 3,
      nome: "Filé de Tilápia M",
      desc: "Filé de tilápia medio, já cortadinho e ensacado, pronto para o preparo.",
      preco: 40.0,
      img: tilapiaM,
    },
    {
      id: 4,
      nome: "Agulhão Branco",
      desc: "Filé de tilápia medio, já cortadinho e ensacado, pronto para o preparo.",
      preco: 40.0,
      img: AgulhaoBranco,
    },
    {
      id: 4,
      nome: "Meka",
      desc: "Filé de Meka, já cortadinho, pronto para o preparo.",
      preco: 40.0,
      img: Meka,
    },
  ],
  camarao: [
    {
      id: 1,
      nome: "Camarão P",
      desc: "Camarão pequeno descascado.",
      preco: 58.99,
      img: CamarãoM,
    },
    {
      id: 2,
      nome: "Camarão M",
      desc: "Camarão médio descascado.",
      preco: 72.0,
      img: CamarãoM,
    },
    {
      id: 3,
      nome: "File de camarão",
      desc: "File de camarão descascado.",
      preco: 56.0,
      img: FileCamarão,
    },
    {
      id: 4,
      nome: "Camarão Pistola",
      desc: "Camarão com casca, totalmente natural.",
      preco: 35.0,
      img: CamarãoPistola,
    },
    {
      id: 5,
      nome: "Camarão G na Casca",
      desc: "Camarão grande com casca.",
      preco: 35.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhx5o8uH6JUgqUL9GCvEYXwnNogGtPM2UUjcKixZuRr8D6hekc00dPss&s=10",
    },
  ],
  lagosta: [
    {
      id: 1,
      nome: "Lagosta",
      desc: "Lagosta inteira, totalmente natural.",
      preco: 48.99,
      img: LagostaExportacao,
    },
  ],
  nordestinas: [
    {
      id: 1,
      nome: "Buchada de Bode",
      desc: "Buchada de bode temperada no estilo tradicional nordestino.",
      preco: 45.0,
      img: BuchadaBode,
    },
    {
      id: 2,
      nome: "Galinha Caipira",
      desc: "Galinha caipira criada no campo, sabor incomparável.",
      preco: 50.0,
      img: GalinhaCipira,
    },
    {
      id: 3,
      nome: "Picado de Carneiro",
      desc: "Picado de carneiro temperado e pronto para o preparo.",
      preco: 34.0,
      img: PicadoCarneiro,
    },
    {
      id: 4,
      nome: "Picanha Bovina Argentina",
      desc: "Picanha bovina importada da Argentina, corte nobre e macia.",
      preco: 89.0,
      img: PicanhaBovinaArgentina,
    },
    {
      id: 5,
      nome: "Feijão Verde",
      desc: "Feijão verde novinho.",
      preco: 89.0,
      img: FeijaoVerde,
    },
  ],
};

function ProdutoCard({ produto, carrinho, onAdicionar, onRemover }) {
  const item = carrinho.find((c) => c.id === produto.id);
  const qtd = item ? item.qtd : 0;

  return (
    <Card className="border-0 shadow-sm h-100" style={{ borderRadius: "12px", overflow: "hidden", maxWidth: "250px" }}>
      <div style={{ height: "200px", overflow: "hidden", background: "#f1f3f5" }}>
        <Card.Img variant="top" src={produto.img} alt={produto.nome} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <Card.Body className="d-flex flex-column p-3">
        <Card.Title className="fw-bold mb-1" style={{ fontSize: "15px", color: "#0d1b2a" }}>
          {produto.nome}
        </Card.Title>
        <Card.Text className="text-secondary mb-3" style={{ fontSize: "13px", lineHeight: "1.5", flexGrow: 1 }}>
          {produto.desc}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold" style={{ fontSize: "17px", color: "#0d6efd" }}>
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </span>
          {qtd === 0 ? (
            <Button
              size="sm"
              variant="outline-primary"
              style={{ borderRadius: "8px", fontSize: "13px", fontWeight: 600 }}
              onClick={() => onAdicionar(produto)}
            >
              + Adicionar
            </Button>
          ) : (
            <div className="d-flex align-items-center gap-2">
              <Button
                size="sm"
                variant="outline-secondary"
                style={{ borderRadius: "8px", width: "28px", height: "28px", padding: 0, fontWeight: 700 }}
                onClick={() => onRemover(produto.id)}
              >
                −
              </Button>
              <span className="fw-bold" style={{ minWidth: "16px", textAlign: "center" }}>
                {qtd}
              </span>
              <Button
                size="sm"
                variant="outline-primary"
                style={{ borderRadius: "8px", width: "28px", height: "28px", padding: 0, fontWeight: 700 }}
                onClick={() => onAdicionar(produto)}
              >
                +
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

function Secao({ titulo, subtitulo, itens, carrinho, onAdicionar, onRemover }) {
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
        {itens.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <ProdutoCard produto={item} carrinho={carrinho} onAdicionar={onAdicionar} onRemover={onRemover} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default function Produtos() {
  const [carrinho, setCarrinho] = useState([]);
  const [showCarrinho, setShowCarrinho] = useState(false);

  // Dados do cliente
  const [cliente, setCliente] = useState({
    nome: "",
    telefone: "",
    endereco: "",
  });
  const [erros, setErros] = useState({});

  const totalItens = carrinho.reduce((acc, i) => acc + i.qtd, 0);
  const totalPreco = carrinho.reduce((acc, i) => acc + i.preco * i.qtd, 0);

  function adicionarAoCarrinho(produto) {
    setCarrinho((prev) => {
      const existe = prev.find((i) => i.id === produto.id);
      if (existe) return prev.map((i) => (i.id === produto.id ? { ...i, qtd: i.qtd + 1 } : i));
      return [...prev, { ...produto, qtd: 1 }];
    });
  }

  function removerDoCarrinho(id) {
    setCarrinho((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item.qtd === 1) return prev.filter((i) => i.id !== id);
      return prev.map((i) => (i.id === id ? { ...i, qtd: i.qtd - 1 } : i));
    });
  }

  function validarCliente() {
    const novosErros = {};
    if (!cliente.nome.trim()) novosErros.nome = "Informe seu nome.";
    if (!cliente.telefone.trim()) novosErros.telefone = "Informe seu telefone.";
    if (!cliente.endereco.trim()) novosErros.endereco = "Informe o endereço de entrega.";
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function finalizarPedido() {
    if (carrinho.length === 0) return;
    if (!validarCliente()) return;

    const linhas = carrinho.map((i) => `• ${i.qtd}x ${i.nome} — R$ ${(i.preco * i.qtd).toFixed(2).replace(".", ",")}`).join("\n");

    const mensagem =
      `🐟 *Pedido via site*\n\n` +
      `👤 *Nome:* ${cliente.nome}\n` +
      `📱 *Telefone:* ${cliente.telefone}\n` +
      `📍 *Endereço de entrega:* ${cliente.endereco}\n\n` +
      `🛒 *Itens do pedido:*\n${linhas}\n\n` +
      `*Total: R$ ${totalPreco.toFixed(2).replace(".", ",")}*\n\n` +
      `Aguardo confirmação! 😊`;

    const url = `https://wa.me/${SEU_NUMERO}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  return (
    <div id="produtos" style={{ background: "#f8f9fa", minHeight: "100vh", paddingBottom: "100px" }}>
      <Container>
        {/* Header */}
        <div className="text-center mb-2">
          <Badge bg="primary" className="mb-2 px-3 py-2" style={{ fontSize: "12px", letterSpacing: "0.08em", borderRadius: "20px" }}>
            CARDÁPIO
          </Badge>
          <h1 className="fw-bold" style={{ color: "#0d1b2a", fontSize: "36px" }}>
            Nossos Produtos
          </h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: "480px", fontSize: "15px" }}>
            Peixes frescos e frutos do mar selecionados diariamente para a sua mesa.
          </p>
          <hr style={{ width: "100px", borderTop: "2px solid black", margin: "20px auto 0" }} />
        </div>

        {/* Seções */}
        <Secao
          titulo="Peixes"
          subtitulo="Filés frescos capturados diariamente."
          itens={produtos.peixes}
          carrinho={carrinho}
          onAdicionar={adicionarAoCarrinho}
          onRemover={removerDoCarrinho}
        />
        <Secao
          titulo="Camarão"
          subtitulo="Variedades de camarão, descascado ou na casca."
          itens={produtos.camarao}
          carrinho={carrinho}
          onAdicionar={adicionarAoCarrinho}
          onRemover={removerDoCarrinho}
        />
        <Secao
          titulo="Lagosta"
          subtitulo="Lagostas selecionadas, totalmente naturais."
          itens={produtos.lagosta}
          carrinho={carrinho}
          onAdicionar={adicionarAoCarrinho}
          onRemover={removerDoCarrinho}
        />
        <Secao
          titulo="Comidas Nordestinas"
          subtitulo="Sabores tradicionais do sertão direto na sua mesa."
          itens={produtos.nordestinas}
          carrinho={carrinho}
          onAdicionar={adicionarAoCarrinho}
          onRemover={removerDoCarrinho}
        />
      </Container>

      {/* Botão flutuante do carrinho */}
      {totalItens > 0 && (
        <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 1000 }}>
          <Button
            variant="primary"
            className="shadow-lg d-flex align-items-center gap-2 fw-bold px-4 py-3"
            style={{ borderRadius: "50px", fontSize: "15px" }}
            onClick={() => setShowCarrinho(true)}
          >
            🛒 Ver carrinho de pedidos
            <Badge bg="light" text="primary" style={{ fontSize: "13px" }}>
              {totalItens}
            </Badge>
          </Button>
        </div>
      )}

      {/* Offcanvas carrinho */}
      <Offcanvas show={showCarrinho} onHide={() => setShowCarrinho(false)} placement="end">
        <Offcanvas.Header closeButton style={{ borderBottom: "1px solid #dee2e6" }}>
          <Offcanvas.Title className="fw-bold" style={{ color: "#0d1b2a" }}>
            🛒 Seu Carrinho de pedidos
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column" style={{ overflowY: "auto" }}>
          {carrinho.length === 0 ? (
            <p className="text-secondary text-center mt-5">Nenhum item adicionado ainda.</p>
          ) : (
            <>
              {/* Lista de itens */}
              <div className="flex-grow-1">
                {carrinho.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center py-3"
                    style={{ borderBottom: "1px solid #f1f3f5" }}
                  >
                    <div>
                      <p className="fw-bold mb-0" style={{ fontSize: "14px", color: "#0d1b2a" }}>
                        {item.nome}
                      </p>
                      <small className="text-secondary">
                        {item.qtd}x — R$ {(item.preco * item.qtd).toFixed(2).replace(".", ",")}
                      </small>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        style={{ borderRadius: "8px", width: "28px", height: "28px", padding: 0 }}
                        onClick={() => removerDoCarrinho(item.id)}
                      >
                        −
                      </Button>
                      <span className="fw-bold">{item.qtd}</span>
                      <Button
                        size="sm"
                        variant="outline-primary"
                        style={{ borderRadius: "8px", width: "28px", height: "28px", padding: 0 }}
                        onClick={() => adicionarAoCarrinho(item)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dados do cliente */}
              <div
                style={{
                  borderTop: "2px solid #dee2e6",
                  paddingTop: "16px",
                  marginTop: "12px",
                }}
              >
                <p className="fw-bold mb-3" style={{ fontSize: "14px", color: "#0d1b2a" }}>
                  📋 Dados para entrega
                </p>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "13px", fontWeight: 600, color: "#495057" }}>Nome completo do cliente</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Seu nome"
                    value={cliente.nome}
                    onChange={(e) => {
                      setCliente((prev) => ({ ...prev, nome: e.target.value }));
                      setErros((prev) => ({ ...prev, nome: "" }));
                    }}
                    isInvalid={!!erros.nome}
                    style={{ borderRadius: "8px", fontSize: "14px" }}
                  />
                  <Form.Control.Feedback type="invalid">{erros.nome}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "13px", fontWeight: 600, color: "#495057" }}>Telefone / WhatsApp</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="(84) 99999-9999"
                    value={cliente.telefone}
                    onChange={(e) => {
                      setCliente((prev) => ({ ...prev, telefone: e.target.value }));
                      setErros((prev) => ({ ...prev, telefone: "" }));
                    }}
                    isInvalid={!!erros.telefone}
                    style={{ borderRadius: "8px", fontSize: "14px" }}
                  />
                  <Form.Control.Feedback type="invalid">{erros.telefone}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ fontSize: "13px", fontWeight: 600, color: "#495057" }}>Endereço de entrega</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Rua, número, bairro, complemento..."
                    value={cliente.endereco}
                    onChange={(e) => {
                      setCliente((prev) => ({ ...prev, endereco: e.target.value }));
                      setErros((prev) => ({ ...prev, endereco: "" }));
                    }}
                    isInvalid={!!erros.endereco}
                    style={{ borderRadius: "8px", fontSize: "14px", resize: "none" }}
                  />
                  <Form.Control.Feedback type="invalid">{erros.endereco}</Form.Control.Feedback>
                </Form.Group>

                {/* Total e botão */}
                <div className="d-flex justify-content-between mb-3">
                  <span className="fw-bold" style={{ fontSize: "16px" }}>
                    Total da compra
                  </span>
                  <span className="fw-bold" style={{ fontSize: "18px", color: "#0d6efd" }}>
                    R$ {totalPreco.toFixed(2).replace(".", ",")}
                  </span>
                </div>

                <Button
                  variant="success"
                  className="w-100 fw-bold py-3"
                  style={{ borderRadius: "12px", fontSize: "15px" }}
                  onClick={finalizarPedido}
                >
                  📲 Finalizar pelo WhatsApp
                </Button>
              </div>
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
