import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Senna Works</h3>
              <p className="footer-tagline">Carpintaria Premium</p>
            </div>
            <div className="footer-columns">
              <div className="footer-column">
                <h5>Menu</h5>
                <ul>
                  <li><a href="#hero">Início</a></li>
                  <li><a href="#services">Serviços</a></li>
                  <li><a href="#portfolio">Projetos</a></li>
                  <li><a href="#contact">Contactos</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h5>Redes</h5>
                <ul className="social-links">
                  <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">f</a></li>
                  <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">@</a></li>
                  <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Senna Works. Todos os direitos reservados.</p>
          <ul className="footer-legal">
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
