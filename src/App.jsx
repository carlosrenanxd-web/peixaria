import React from "react";
import "./App.css";

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
        <div className="b-example-divider"></div>
        <Sobre />
        <div className="b-example-divider"></div>
        <Produtos />
        <div className="b-example-divider"></div>
        <Localizacao />
        <div className="b-example-divider"></div>
        <Contato />
        <div className="b-example-divider"></div>
        <Footer />
      </div>
    </div>
  );
}
