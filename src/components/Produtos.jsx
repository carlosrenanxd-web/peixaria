import React, { useState } from "react";
import { Container, Badge, Button, Offcanvas, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import tilapiaM from "../assets/Tilápia/File de tilápia M.jpeg";

import AgulhaoBranco from "../assets/Agulhão branco/Agulhao branco 38,00.jpeg";

import Meka01 from "../assets/Meka/Peixe-Meka.webp";
import Meka02 from "../assets/Meka/Meka 45,00.jpeg";

import FilePescada from "../assets/Pescada/FilePescada.jpeg";

import CamaraoP01 from "../assets/Camarão/Camarão P/Camarão pegueno 01.jpeg";

import CamaraoM01 from "../assets/Camarão/Camarão M/Camarão medio.jpeg";

import CamaraoG01 from "../assets/Camarão/Camarão G/Camarão G.webp";

import CamaraoPistola01 from "../assets/Camarão/Camarão pistola/Camarão pistola 01.jpeg";

import CamaraoFileP01 from "../assets/Camarão/Camarão P/Camarão pegueno file 01.jpeg";

import CamaraoFileM01 from "../assets/Camarão/Camarão M/Camarão medio file 01.jpeg";

import CamaraoFileG01 from "../assets/Camarão/Camarão G/Camarão G.webp";

import LagostaExportacao from "../assets/Lagosta/Lagosta tipo exportação.jpeg";
import Lagosta01 from "../assets/Lagosta/lagosta01.jpg";

import BuchadaBode from "../assets/Buchada/Buchada de bode 45,00.jpeg";
import BuchadaBode01 from "../assets/Buchada/Buchada de bode01.jpeg";
import BuchadaBode02 from "../assets/Buchada/Buchada de bode02.jpeg";

import GalinhaCipira from "../assets/Galinha/Galinha Caipira 50,00.jpeg";

import PicadoCarneiro from "../assets/Picado/Picado de carneiro 34,00.jpeg";

import PicanhaBovinaArgentina from "../assets/Picanha/Picanha bovina Argentina 89,00.jpeg";

import FeijaoVerde from "../assets/Feijão/Feijão verde 23,00.jpeg";

const SEU_NUMERO = "5584921564886";

const produtos = {
  peixes: [
    {
      id: 1,
      nome: "Filé de Pescada",
      desc: "Filé de pescada fresquinho direto do mar.",
      preco: 61.0,
      estrelas: 3,
      saidasMes: 38,
      imgs: [FilePescada],
    },
    {
      id: 2,
      nome: "Filé de Tilápia P",
      desc: "Filé de tilápia pequeno, já cortadinho e ensacado, pronto para o preparo.",
      preco: 38.99,
      estrelas: 4,
      saidasMes: 52,
      imgs: ["https://oceanicaalimentos.com.br/wp-content/uploads/2021/03/FILE-TILAPIA-PESCADO.jpg"],
    },
    {
      id: 3,
      nome: "Filé de Tilápia M",
      desc: "Filé de tilápia medio, já cortadinho e ensacado, pronto para o preparo.",
      preco: 40.0,
      estrelas: 4,
      saidasMes: 47,
      imgs: [tilapiaM],
    },
    {
      id: 4,
      nome: "Agulhão Branco",
      desc: "Filé de agulhão branco, já cortadinho e ensacado, pronto para o preparo.",
      preco: 40.0,
      estrelas: 3,
      saidasMes: 21,
      imgs: [AgulhaoBranco],
    },
    {
      id: 5,
      nome: "Meka",
      desc: "Filé de Meka, já cortadinho, pronto para o preparo.",
      preco: 40.0,
      estrelas: 4,
      saidasMes: 18,
      imgs: [Meka01, Meka02],
    },
  ],
  camarao: [
    {
      id: 6,
      nome: "Camarão P",
      desc: "Camarão pequeno com casca e cabeça.",
      preco: 29.99,
      estrelas: 3,
      saidasMes: 30,
      imgs: [CamaraoP01],
    },
    {
      id: 7,
      nome: "Camarão M",
      desc: "Camarão médio com casca e cabeça.",
      preco: 35.0,
      estrelas: 4,
      saidasMes: 44,
      imgs: [CamaraoM01],
    },
    {
      id: 8,
      nome: "Camarão G",
      desc: "Camarão grande com casca e cabeça.",
      preco: 50.0,
      estrelas: 4,
      saidasMes: 44,
      imgs: [CamaraoG01],
    },
    {
      id: 9,
      nome: "Camarão Pistola extra G",
      desc: "Camarão pistola extra grande com casca e cabeça.",
      preco: 58.0,
      estrelas: 5,
      saidasMes: 15,
      imgs: [CamaraoPistola01],
    },
    {
      id: 10,
      nome: "File de camarão P",
      desc: "File de camarão pequeno descascado pronto para preparo..",
      preco: 58.0,
      estrelas: 4,
      saidasMes: 39,
      imgs: [CamaraoFileP01],
    },
    {
      id: 11,
      nome: "File de camarão M",
      desc: "File de camarão medio descascado pronto para preparo.",
      preco: 70.0,
      estrelas: 5,
      saidasMes: 60,
      imgs: [CamaraoFileM01],
    },
    {
      id: 12,
      nome: "File de camarão G",
      desc: "File de camarão grande descascado pronto para preparo.",
      preco: 89.0,
      estrelas: 5,
      saidasMes: 60,
      imgs: [CamaraoFileG01],
    },
  ],
  lagosta: [
    {
      id: 13,
      nome: "Lagosta",
      desc: "Lagosta inteira, totalmente natural.",
      preco: 48.99,
      estrelas: 4,
      saidasMes: 19,
      imgs: [LagostaExportacao, Lagosta01],
    },
  ],
  nordestinas: [
    {
      id: 14,
      nome: "Buchada de Bode",
      desc: "Buchada de bode temperada no estilo tradicional nordestino.",
      preco: 45.0,
      estrelas: 4,
      saidasMes: 8,
      imgs: [BuchadaBode, BuchadaBode01, BuchadaBode02],
    },
    {
      id: 15,
      nome: "Galinha Caipira",
      desc: "Galinha caipira criada no campo, sabor incomparável.",
      preco: 50.0,
      estrelas: 4,
      saidasMes: 11,
      imgs: [GalinhaCipira],
    },
    {
      id: 16,
      nome: "Picado de Carneiro",
      desc: "Picado de carneiro temperado e pronto para o preparo.",
      preco: 34.0,
      estrelas: 3,
      saidasMes: 6,
      imgs: [PicadoCarneiro],
    },
    {
      id: 17,
      nome: "Picanha Bovina Argentina",
      desc: "Picanha bovina importada da Argentina, corte nobre e macia.",
      preco: 89.0,
      estrelas: 5,
      saidasMes: 7,
      imgs: [PicanhaBovinaArgentina],
    },
    {
      id: 18,
      nome: "Feijão Verde",
      desc: "Feijão verde novinho.",
      preco: 23.0,
      estrelas: 4,
      saidasMes: 10,
      imgs: [FeijaoVerde],
    },
  ],
};

function Estrelas({ quantidade }) {
  return (
    <div style={{ display: "flex", gap: "2px", margin: "8px 0 4px" }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} style={{ fontSize: "20px", color: n <= quantidade ? "#F5A623" : "#dee2e6", lineHeight: 1 }}>
          ★
        </span>
      ))}
    </div>
  );
}

// Carrossel de imagens dentro do card
function CardCarousel({ imgs, nome }) {
  const [atual, setAtual] = useState(0);
  const total = imgs.length;

  function anterior(e) {
    e.stopPropagation();
    setAtual((prev) => (prev === 0 ? total - 1 : prev - 1));
  }

  function proximo(e) {
    e.stopPropagation();
    setAtual((prev) => (prev === total - 1 ? 0 : prev + 1));
  }

  return (
    <div style={{ position: "relative", width: "100%", height: "180px", background: "#e9ecef", flexShrink: 0, overflow: "hidden" }}>
      <img src={imgs[atual]} alt={nome} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />

      {/* Setas — só aparecem se tiver mais de 1 foto */}
      {total > 1 && (
        <>
          <button
            onClick={anterior}
            style={{
              position: "absolute",
              left: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.45)",
              border: "none",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              color: "#fff",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            ‹
          </button>
          <button
            onClick={proximo}
            style={{
              position: "absolute",
              right: "6px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.45)",
              border: "none",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              color: "#fff",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            ›
          </button>

          {/* Contador ex: 1 / 3 */}
          <div
            style={{
              position: "absolute",
              bottom: "6px",
              right: "8px",
              background: "rgba(0,0,0,0.5)",
              borderRadius: "10px",
              padding: "2px 7px",
              fontSize: "11px",
              color: "#fff",
              zIndex: 2,
            }}
          >
            {atual + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}

function ProdutoCard({ produto, carrinho, onAdicionar, onRemover }) {
  const [hover, setHover] = useState(false);
  const item = carrinho.find((c) => c.id === produto.id);
  const qtd = item ? item.qtd : 0;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "#1c3252" : "#16263f",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: hover ? "0 12px 28px rgba(0,0,0,0.35)" : "0 2px 10px rgba(0,0,0,0.2)",
        border: "1px solid #24385a",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "240px",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
      }}
    >
      {/* Carrossel no lugar da imagem fixa */}
      <div style={{ position: "relative" }}>
        <CardCarousel imgs={produto.imgs} nome={produto.nome} />
        {qtd > 0 && (
          <span
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              background: "#0d6efd",
              color: "#fff",
              fontSize: "11px",
              fontWeight: 700,
              padding: "3px 8px",
              borderRadius: "999px",
              letterSpacing: "0.02em",
            }}
          >
            no carrinho
          </span>
        )}
      </div>

      <div style={{ padding: "12px 14px 14px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p
          style={{
            fontWeight: 700,
            fontSize: "15px",
            color: "#ffffff",
            margin: "0 0 3px",
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
          }}
        >
          {produto.nome}
        </p>
        <p
          style={{
            fontSize: "12.5px",
            color: "#93a2ba",
            margin: "0 0 8px",
            lineHeight: 1.5,
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {produto.desc}
        </p>

        <Estrelas quantidade={produto.estrelas} />

        <p
          style={{
            fontSize: "11.5px",
            color: "#6b7a93",
            margin: "6px 0 12px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {produto.saidasMes} pedidos este mês
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "10px",
            borderTop: "1px solid #24385a",
          }}
        >
          <span style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
            <span style={{ fontWeight: 600, fontSize: "12px", color: "#6ea5d2" }}>R$</span>
            <span style={{ fontWeight: 800, fontSize: "18px", color: "#ffffff", letterSpacing: "-0.02em" }}>
              {produto.preco.toFixed(2).replace(".", ",")}
            </span>
          </span>

          {qtd === 0 ? (
            <Button
              size="sm"
              style={{
                background: "#0d6efd",
                border: "none",
                borderRadius: "999px",
                fontSize: "12.5px",
                fontWeight: 700,
                padding: "6px 14px",
                whiteSpace: "nowrap",
                boxShadow: "0 2px 8px rgba(13,110,253,0.4)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
              onClick={() => onAdicionar(produto)}
            >
              + Adicionar
            </Button>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#0d1b2a",
                borderRadius: "999px",
                padding: "4px 6px",
              }}
            >
              <button
                onClick={() => onRemover(produto.id)}
                style={{
                  border: "none",
                  background: "#24385a",
                  color: "#ffffff",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                −
              </button>
              <span style={{ minWidth: "14px", textAlign: "center", fontWeight: 700, fontSize: "13.5px", color: "#ffffff" }}>{qtd}</span>
              <button
                onClick={() => onAdicionar(produto)}
                style={{
                  border: "none",
                  background: "#0d6efd",
                  color: "#fff",
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: 1,
                  boxShadow: "0 1px 3px rgba(13,110,253,0.5)",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Secao({ titulo, subtitulo, itens, carrinho, onAdicionar, onRemover }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h4 style={{ fontWeight: 700, color: "#ffffff", fontSize: "20px", marginBottom: "4px" }}>{titulo}</h4>
        <p style={{ color: "#6c757d", fontSize: "14px", margin: 0 }}>{subtitulo}</p>
        <div style={{ width: "36px", height: "3px", background: "#0d6efd", borderRadius: "2px", marginTop: "8px" }} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
        {itens.map((item) => (
          <div key={item.id} style={{ width: "240px", flexShrink: 0 }}>
            <ProdutoCard produto={item} carrinho={carrinho} onAdicionar={onAdicionar} onRemover={onRemover} />
          </div>
        ))}
      </div>
    </div>
  );
}

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
      "🐟 *Pedido via site*\n\n" +
      "👤 *Nome:* " +
      cliente.nome +
      "\n" +
      "📱 *Telefone:* " +
      cliente.telefone +
      "\n" +
      "📍 *Endereço de entrega:* " +
      cliente.endereco +
      "\n\n" +
      "🛒 *Itens do pedido:*\n" +
      linhas +
      "\n\n" +
      "*Total: R$ " +
      totalPreco.toFixed(2).replace(".", ",") +
      "*\n\n" +
      "Aguardo confirmação! 😊";
    window.open("https://wa.me/" + SEU_NUMERO + "?text=" + encodeURIComponent(mensagem), "_blank");
  }

  return (
    <div id="produtos" style={{ background: "#0d1b2a", minHeight: "100vh", paddingBottom: "100px" }}>
      <Container>
        <div style={{ textAlign: "center", marginBottom: "40px", paddingTop: "32px" }}>
          <Badge bg="primary" className="mb-2 px-3 py-2" style={{ fontSize: "12px", letterSpacing: "0.08em", borderRadius: "20px" }}>
            CARDÁPIO
          </Badge>
          <h1 style={{ fontWeight: 700, color: "#ffffff", fontSize: "36px", marginTop: "8px" }}>Nossos Produtos</h1>
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

      <Offcanvas show={showCarrinho} onHide={() => setShowCarrinho(false)} placement="end" style={{ background: "#16263f" }}>
        <style>{`
    .carrinho-input::placeholder {
      color: #6b7a93 !important;
      opacity: 1;
    }
    .carrinho-input:focus {
      background: #1c3252 !important;
      border-color: #0d6efd !important;
      box-shadow: 0 0 0 0.2rem rgba(13,110,253,0.25) !important;
      color: #ffffff !important;
    }
  `}</style>

        <Offcanvas.Header closeButton closeVariant="white" style={{ borderBottom: "1px solid #24385a" }}>
          <Offcanvas.Title style={{ fontWeight: 700, color: "#ffffff" }}>🛒 Seu Carrinho de pedidos</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column" style={{ overflowY: "auto" }}>
          {carrinho.length === 0 ? (
            <p style={{ color: "#93a2ba", textAlign: "center", marginTop: "40px" }}>Nenhum item adicionado ainda.</p>
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
                      borderBottom: "1px solid #24385a",
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: 700, margin: 0, fontSize: "14px", color: "#ffffff" }}>{item.nome}</p>
                      <small style={{ color: "#93a2ba" }}>
                        {item.qtd}x — R$ {(item.preco * item.qtd).toFixed(2).replace(".", ",")}
                      </small>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "#0d1b2a",
                        borderRadius: "999px",
                        padding: "4px 6px",
                      }}
                    >
                      <button
                        onClick={() => removerDoCarrinho(item.id)}
                        style={{
                          border: "none",
                          background: "#24385a",
                          color: "#ffffff",
                          width: "26px",
                          height: "26px",
                          borderRadius: "50%",
                          fontWeight: 700,
                          fontSize: "15px",
                          lineHeight: 1,
                          cursor: "pointer",
                        }}
                      >
                        −
                      </button>
                      <span style={{ fontWeight: 700, color: "#ffffff", minWidth: "14px", textAlign: "center" }}>{item.qtd}</span>
                      <button
                        onClick={() => adicionarAoCarrinho(item)}
                        style={{
                          border: "none",
                          background: "#0d6efd",
                          color: "#ffffff",
                          width: "26px",
                          height: "26px",
                          borderRadius: "50%",
                          fontWeight: 700,
                          fontSize: "15px",
                          lineHeight: 1,
                          boxShadow: "0 1px 3px rgba(13,110,253,0.5)",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "2px solid #24385a", paddingTop: "16px", marginTop: "12px" }}>
                <p style={{ fontWeight: 700, fontSize: "14px", color: "#ffffff", marginBottom: "12px" }}>📋 Dados para entrega</p>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "13px", fontWeight: 600, color: "#93a2ba" }}>Nome completo do cliente</Form.Label>
                  <Form.Control
                    className="carrinho-input"
                    type="text"
                    placeholder="Seu nome"
                    value={cliente.nome}
                    onChange={(e) => {
                      setCliente((p) => ({ ...p, nome: e.target.value }));
                      setErros((p) => ({ ...p, nome: "" }));
                    }}
                    isInvalid={!!erros.nome}
                    style={{
                      borderRadius: "8px",
                      fontSize: "14px",
                      background: "#0d1b2a",
                      border: "1px solid #24385a",
                      color: "#ffffff",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">{erros.nome}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ fontSize: "13px", fontWeight: 600, color: "#93a2ba" }}>Telefone / WhatsApp</Form.Label>
                  <Form.Control
                    className="carrinho-input"
                    type="tel"
                    placeholder="(84) 99999-9999"
                    value={cliente.telefone}
                    onChange={(e) => {
                      setCliente((p) => ({ ...p, telefone: e.target.value }));
                      setErros((p) => ({ ...p, telefone: "" }));
                    }}
                    isInvalid={!!erros.telefone}
                    style={{
                      borderRadius: "8px",
                      fontSize: "14px",
                      background: "#0d1b2a",
                      border: "1px solid #24385a",
                      color: "#ffffff",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">{erros.telefone}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label style={{ fontSize: "13px", fontWeight: 600, color: "#93a2ba" }}>Endereço de entrega</Form.Label>
                  <Form.Control
                    className="carrinho-input"
                    as="textarea"
                    rows={3}
                    placeholder="Rua, número, bairro, complemento..."
                    value={cliente.endereco}
                    onChange={(e) => {
                      setCliente((p) => ({ ...p, endereco: e.target.value }));
                      setErros((p) => ({ ...p, endereco: "" }));
                    }}
                    isInvalid={!!erros.endereco}
                    style={{
                      borderRadius: "8px",
                      fontSize: "14px",
                      resize: "none",
                      background: "#0d1b2a",
                      border: "1px solid #24385a",
                      color: "#ffffff",
                    }}
                  />
                  <Form.Control.Feedback type="invalid">{erros.endereco}</Form.Control.Feedback>
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
                  <span style={{ fontWeight: 700, fontSize: "16px", color: "#ffffff" }}>Total da compra</span>
                  <span style={{ fontWeight: 800, fontSize: "18px", color: "#6ea5d2" }}>R$ {totalPreco.toFixed(2).replace(".", ",")}</span>
                </div>

                <Button
                  className="w-100 fw-bold py-3"
                  style={{
                    borderRadius: "12px",
                    fontSize: "15px",
                    background: "#0d6efd",
                    border: "none",
                    boxShadow: "0 4px 14px rgba(13,110,253,0.35)",
                  }}
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
