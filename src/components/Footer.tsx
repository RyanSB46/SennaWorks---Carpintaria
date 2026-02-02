import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Sobre</h4>
            <p>Carpintaria especializada em projetos residenciais e comerciais.</p>
          </div>
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#portfolio">Projetos</a></li>
              <li><a href="#contact">Contactos</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Senna Works. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
