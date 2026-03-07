import React from "react";
import "./Header.css";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/images/logo/sennaworks-logo.png";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Senna Works Logo" className="logo-img" />
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
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Alternar tema"
          title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
