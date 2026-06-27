import React from "react";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Sobre from "./components/Sobre";
import Produtos from "./components/Produtos";
import Localizacao from "./components/Localizacao";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container-fluid p-0 bg-light">
      <Navbar />
      <div style={{ paddingTop: "70px" }}>
        <Inicio />
        <Sobre />
        <Produtos />
        <Localizacao />
        <Contato />
        <Footer />
      </div>
    </div>
  );
}
