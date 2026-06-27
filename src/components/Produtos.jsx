import React, { useState } from "react";
import { Container, Badge, Button, Offcanvas, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import tilapiaM from "../assets/File de tilápia M.jpeg";
import AgulhaoBranco from "../assets/Agulhao branco 38,00.jpeg";
import Meka from "../assets/Meka 45,00.jpeg";
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

// ─────────────────────────────────────────────────────────────────────────────
// PRODUTOS — edite `estrelas` (1-5) e `saidasMes` conforme quiser
// ─────────────────────────────────────────────────────────────────────────────
const produtos = {
  peixes: [
    {
      id: 1,
      nome: "Filé de Pescada",
      desc: "Filé de pescada fresquinho direto do mar.",
      preco: 61.0,
      estrelas: 3,
      saidasMes: 38,
      img: FilePescada,
    },
    {
      id: 2,
      nome: "Filé de Tilápia P",
      desc: "Filé de tilápia pequeno, já cortadinho e ensacado, pronto para o preparo.",
      preco: 38.99,
      estrelas: 4,
      saidasMes: 52,
      img: "https://oceanicaalimentos.com.br/wp-content/uploads/2021/03/FILE-TILAPIA-PESCADO.jpg",
    },
    {
      id: 3,
      nome: "Filé de Tilápia M",
      desc: "Filé de tilápia medio, já cortadinho e ensacado, pronto para o preparo.",
      preco: 40.0,
      estrelas: 4,
      saidasMes: 47,
      img: tilapiaM,
    },
    {
      id: 4,
      nome: "Agulhão Branco",
      desc: "Filé de agulhão branco, já cortadinho e ensacado, pronto para o preparo.",
      preco: 40.0,
      estrelas: 3,
      saidasMes: 21,
      img: AgulhaoBranco,
    },
    {
      id: 5,
      nome: "Meka",
      desc: "Filé de Meka, já cortadinho, pronto para o preparo.",
      preco: 40.0,
      estrelas: 4,
      saidasMes: 18,
      img: Meka,
    },
  ],
  camarao: [
    {
      id: 6,
      nome: "Camarão P",
      desc: "Camarão pequeno descascado.",
      preco: 58.99,
      estrelas: 3,
      saidasMes: 30,
      img: CamarãoM,
    },
    {
      id: 7,
      nome: "Camarão M",
      desc: "Camarão médio descascado.",
      preco: 72.0,
      estrelas: 4,
      saidasMes: 44,
      img: CamarãoM,
    },
    {
      id: 8,
      nome: "File de camarão",
      desc: "File de camarão descascado.",
      preco: 56.0,
      estrelas: 4,
      saidasMes: 39,
      img: FileCamarão,
    },
    {
      id: 9,
      nome: "Camarão Pistola",
      desc: "Camarão com casca, totalmente natural.",
      preco: 35.0,
      estrelas: 5,
      saidasMes: 15,
      img: CamarãoPistola,
    },
    {
      id: 10,
      nome: "Camarão G na Casca",
      desc: "Camarão grande com casca.",
      preco: 35.0,
      estrelas: 5,
      saidasMes: 60,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhx5o8uH6JUgqUL9GCvEYXwnNogGtPM2UUjcKixZuRr8D6hekc00dPss&s=10",
    },
  ],
  lagosta: [
    {
      id: 11,
      nome: "Lagosta",
      desc: "Lagosta inteira, totalmente natural.",
      preco: 48.99,
      estrelas: 4,
      saidasMes: 19,
      img: LagostaExportacao,
    },
  ],
  nordestinas: [
    {
      id: 12,
      nome: "Buchada de Bode",
      desc: "Buchada de bode temperada no estilo tradicional nordestino.",
      preco: 45.0,
      estrelas: 4,
      saidasMes: 8,
      img: BuchadaBode,
    },
    {
      id: 13,
      nome: "Galinha Caipira",
      desc: "Galinha caipira criada no campo, sabor incomparável.",
      preco: 50.0,
      estrelas: 4,
      saidasMes: 11,
      img: GalinhaCipira,
    },
    {
      id: 14,
      nome: "Picado de Carneiro",
      desc: "Picado de carneiro temperado e pronto para o preparo.",
      preco: 34.0,
      estrelas: 3,
      saidasMes: 6,
      img: PicadoCarneiro,
    },
    {
      id: 15,
      nome: "Picanha Bovina Argentina",
      desc: "Picanha bovina importada da Argentina, corte nobre e macia.",
      preco: 89.0,
      estrelas: 5,
      saidasMes: 7,
      img: PicanhaBovinaArgentina,
    },
    {
      id: 16,
      nome: "Feijão Verde",
      desc: "Feijão verde novinho.",
      preco: 23.0,
      estrelas: 4,
      saidasMes: 10,
      img: FeijaoVerde,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Estrelas estáticas
// ─────────────────────────────────────────────────────────────────────────────
function Estrelas({ quantidade }) {
  return (
    <div style={{ display: "flex", gap: "2px", justifyContent: "start", margin: "8px 0 4px" }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          style={{
            fontSize: "16px",
            color: n <= quantidade ? "#F5A623" : "#dee2e6",
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Card de produto
// ─────────────────────────────────────────────────────────────────────────────
function ProdutoCard({ produto, carrinho, onAdicionar, onRemover }) {
  const item = carrinho.find((c) => c.id === produto.id);
  const qtd = item ? item.qtd : 0;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "240px",
      }}
    >
      {/* Imagem */}
      <div style={{ width: "100%", height: "180px", overflow: "hidden", background: "#e9ecef", flexShrink: 0 }}>
        <img src={produto.img} alt={produto.nome} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>

      {/* Corpo */}
      <div style={{ padding: "8px 12px 12px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{ fontWeight: 700, fontSize: "14px", color: "#0d1b2a", margin: "0 0 4px", lineHeight: 1.3 }}>{produto.nome}</p>
        <p style={{ fontSize: "12px", color: "#6c757d", margin: "0 0 6px", lineHeight: 1.5, flexGrow: 1 }}>{produto.desc}</p>

        {/* Estrelas */}
        <Estrelas quantidade={produto.estrelas} />

        {/* Saídas do mês */}
        <p style={{ fontSize: "11px", color: "#adb5bd", margin: "0 0 10px" }}>
          total de pedidos <Badge>{produto.saidasMes}</Badge>
        </p>

        {/* Preço + botão */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontWeight: 700, fontSize: "16px", color: "#0d6efd" }}>R$ {produto.preco.toFixed(2).replace(".", ",")}</span>

          {qtd === 0 ? (
            <Button
              size="sm"
              variant="outline-primary"
              style={{ borderRadius: "8px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}
              onClick={() => onAdicionar(produto)}
            >
              + Adicionar
            </Button>
          ) : (
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Button
                size="sm"
                variant="outline-secondary"
                style={{ borderRadius: "8px", width: "26px", height: "26px", padding: 0, fontWeight: 700, lineHeight: 1 }}
                onClick={() => onRemover(produto.id)}
              >
                −
              </Button>
              <span style={{ minWidth: "18px", textAlign: "center", fontWeight: 700, fontSize: "14px" }}>{qtd}</span>
              <Button
                size="sm"
                variant="outline-primary"
                style={{ borderRadius: "8px", width: "26px", height: "26px", padding: 0, fontWeight: 700, lineHeight: 1 }}
                onClick={() => onAdicionar(produto)}
              >
                +
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Grid responsivo — centralizado no mobile e na web
// ─────────────────────────────────────────────────────────────────────────────
function Secao({ titulo, subtitulo, itens, carrinho, onAdicionar, onRemover }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h4 style={{ fontWeight: 700, color: "#0d1b2a", fontSize: "20px", marginBottom: "4px" }}>{titulo}</h4>
        <p style={{ color: "#6c757d", fontSize: "14px", margin: 0 }}>{subtitulo}</p>
        <div style={{ width: "36px", height: "3px", background: "#0d6efd", borderRadius: "2px", marginTop: "8px" }} />
      </div>

      {/* Grid: centralizado com justify-content center */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center" /* ← centraliza no mobile E na web */,
        }}
      >
        {itens.map((item) => (
          <div key={item.id} style={{ width: "240px", flexShrink: 0 }}>
            <ProdutoCard produto={item} carrinho={carrinho} onAdicionar={onAdicionar} onRemover={onRemover} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Página principal
// ─────────────────────────────────────────────────────────────────────────────
export default function Produtos() {
  const [carrinho, setCarrinho] = useState([]);
  const [showCarrinho, setShowCarrinho] = useState(false);
  const [cliente, setCliente] = useState({ nome: "", telefone: "", endereco: "" });
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
      if (!item) return prev;
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
    window.open(`https://wa.me/${SEU_NUMERO}?text=${encodeURIComponent(mensagem)}`, "_blank");
  }

  return (
    <div id="produtos" style={{ background: "#f8f9fa", minHeight: "100vh", paddingBottom: "100px" }}>
      <Container>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px", paddingTop: "32px" }}>
          <Badge bg="primary" className="mb-2 px-3 py-2" style={{ fontSize: "12px", letterSpacing: "0.08em", borderRadius: "20px" }}>
            CARDÁPIO
          </Badge>
          <h1 style={{ fontWeight: 700, color: "#0d1b2a", fontSize: "36px", marginTop: "8px" }}>Nossos Produtos</h1>
          <p style={{ color: "#6c757d", maxWidth: "480px", fontSize: "15px", margin: "0 auto" }}>
            Peixes frescos e frutos do mar selecionados diariamente para a sua mesa.
          </p>
          <hr style={{ width: "100px", borderTop: "2px solid black", margin: "20px auto 0" }} />
        </div>

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

      {/* Botão flutuante */}
      {totalItens > 0 && (
        <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 1000 }}>
          <Button
            variant="primary"
            className="shadow-lg fw-bold"
            style={{ borderRadius: "50px", fontSize: "15px", padding: "12px 24px", display: "flex", alignItems: "center", gap: "8px" }}
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
          <Offcanvas.Title style={{ fontWeight: 700, color: "#0d1b2a" }}>🛒 Seu Carrinho de pedidos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column" style={{ overflowY: "auto" }}>
          {carrinho.length === 0 ? (
            <p style={{ color: "#6c757d", textAlign: "center", marginTop: "40px" }}>Nenhum item adicionado ainda.</p>
          ) : (
            <>
              <div style={{ flexGrow: 1 }}>
                {carrinho.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 0",
                      borderBottom: "1px solid #f1f3f5",
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: 700, margin: 0, fontSize: "14px", color: "#0d1b2a" }}>{item.nome}</p>
                      <small style={{ color: "#6c757d" }}>
                        {item.qtd}x — R$ {(item.preco * item.qtd).toFixed(2).replace(".", ",")}
                      </small>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        style={{ borderRadius: "8px", width: "28px", height: "28px", padding: 0 }}
                        onClick={() => removerDoCarrinho(item.id)}
                      >
                        −
                      </Button>
                      <span style={{ fontWeight: 700 }}>{item.qtd}</span>
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

              <div style={{ borderTop: "2px solid #dee2e6", paddingTop: "16px", marginTop: "12px" }}>
                <p style={{ fontWeight: 700, fontSize: "14px", color: "#0d1b2a", marginBottom: "12px" }}>📋 Dados para entrega</p>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "13px", fontWeight: 600, color: "#495057" }}>Nome completo do cliente</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Seu nome"
                    value={cliente.nome}
                    onChange={(e) => {
                      setCliente((p) => ({ ...p, nome: e.target.value }));
                      setErros((p) => ({ ...p, nome: "" }));
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
                      setCliente((p) => ({ ...p, telefone: e.target.value }));
                      setErros((p) => ({ ...p, telefone: "" }));
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
                      setCliente((p) => ({ ...p, endereco: e.target.value }));
                      setErros((p) => ({ ...p, endereco: "" }));
                    }}
                    isInvalid={!!erros.endereco}
                    style={{ borderRadius: "8px", fontSize: "14px", resize: "none" }}
                  />
                  <Form.Control.Feedback type="invalid">{erros.endereco}</Form.Control.Feedback>
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontWeight: 700, fontSize: "16px" }}>Total da compra</span>
                  <span style={{ fontWeight: 700, fontSize: "18px", color: "#0d6efd" }}>R$ {totalPreco.toFixed(2).replace(".", ",")}</span>
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
