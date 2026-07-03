import { Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../assets/logo-marca.png";

export default function NavbarSite() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // não muda o estado "scrolled" enquanto o menu mobile está aberto
      if (expanded) return;
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded]);

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      className="border-bottom"
      style={{
        transition: "box-shadow 0.3s ease, padding 0.3s ease, top 0.3s ease, margin 0.3s ease, border-radius 0.3s ease",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
        padding: scrolled ? "12px 0" : "14px 0",
        borderBottom: scrolled ? "1px solid #e9ecef" : "1px solid transparent",
        top: scrolled ? "20px" : "0px",
        margin: scrolled ? "0 15px" : "0",
        borderRadius: scrolled ? "14px" : "0px",
        left: 0,
        right: 0,
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          href="#inicio"
          className="fw-bold d-flex align-items-center gap-2"
          style={{
            fontSize: "18px",
            color: "#0d1b2a",
            letterSpacing: "-0.01em",
          }}
        >
          <img
            src={logo}
            alt="Ícaro Pescados"
            style={{
              height: scrolled ? "36px" : "48px",
              width: "auto",
              transition: "height 0.3s ease",
            }}
          />
          Icaro <span style={{ color: "#0d6efd" }}>Pescados</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-nav" style={{ border: "none", boxShadow: "none" }} />

        <Navbar.Collapse
          id="menu-nav"
          style={{
            maxHeight: "calc(100vh - 70px)",
            overflowY: "auto",
          }}
        >
          <Nav className="ms-auto d-flex align-items-center gap-1">
            {[
              { href: "#inicio", label: "Início" },
              { href: "#sobre", label: "Quem Somos" },
              { href: "#produtos", label: "Produtos" },
              { href: "#localizacao", label: "Localização" },
            ].map(({ href, label }) => (
              <Nav.Link
                key={href}
                href={href}
                onClick={() => setExpanded(false)}
                className="fw-medium px-3"
                style={{
                  color: "#4a5568",
                  fontSize: "14px",
                  borderRadius: "8px",
                  transition: "color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#0d6efd";
                  e.target.style.background = "#f0f6ff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#4a5568";
                  e.target.style.background = "transparent";
                }}
              >
                {label}
              </Nav.Link>
            ))}

            {/* Botão Contato */}
            <Nav.Link
              href="#contato"
              onClick={() => setExpanded(false)}
              className="fw-bold px-3 py-2 ms-2"
              style={{
                background: "#0d6efd",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "14px",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
