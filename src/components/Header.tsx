import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🪚 Senna Works</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#hero">Início</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#portfolio">Projetos</a></li>
            <li><a href="#contact">Contactos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
