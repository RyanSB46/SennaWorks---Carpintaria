import React from "react";
import "./About.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export default function About() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <h2 className="section-title">Sobre Nós</h2>
        <div className="about-content">
          <div className={`about-text fade-in-left ${isVisible ? 'visible' : ''}`}>
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
              <div className={`feature fade-in-left delay-1 ${isVisible ? 'visible' : ''}`}>
                <span>✓</span> Materiais Premium
              </div>
              <div className={`feature fade-in-left delay-2 ${isVisible ? 'visible' : ''}`}>
                <span>✓</span> Design Personalizado
              </div>
              <div className={`feature fade-in-left delay-3 ${isVisible ? 'visible' : ''}`}>
                <span>✓</span> Instalação Profissional
              </div>
            </div>
          </div>
          <div className={`about-image fade-in-right ${isVisible ? 'visible' : ''}`}>
            <div className="placeholder">📷 Galeria de Fotos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
