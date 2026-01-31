import React from "react";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>Sobre Nós</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Somos uma carpintaria especializada em projetos residenciais e comerciais
              com mais de 15 anos de experiência no mercado. O nosso compromisso é a
              excelência em cada projeto.
            </p>
            <p>
              Com foco na qualidade dos materiais, precisão no trabalho e no design inovador,
              tornamos realidade os seus sonhos em madeira. Cada peça é criada com dedicação e atenção aos detalhes.
            </p>
            <div className="about-features">
              <div className="feature">
                <span>✓</span> Materiais Premium
              </div>
              <div className="feature">
                <span>✓</span> Design Personalizado
              </div>
              <div className="feature">
                <span>✓</span> Instalação Profissional
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="placeholder">📷 Galeria de Fotos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
