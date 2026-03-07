import React from "react";
import "./Portfolio.css";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import cozinha1 from "../assets/images/projects/projetocozinha1.jpeg";
import cozinha3 from "../assets/images/projects/projetocozinha3.jpeg";
import empresa1 from "../assets/images/projects/projetoempresa1.jpeg";
import cozinha4 from "../assets/images/projects/projetocozinha4.jpeg";
import acabamento2 from "../assets/images/projects/projetoacabamento2.jpeg";
import empresa3 from "../assets/images/projects/projetoempresa3.jpeg";

export default function Portfolio() {
  const projects = [
    { title: "Cozinha Moderna", category: "Residencial", image: cozinha1 },
    { title: "Estante Personalizada", category: "Mobiliário", image: acabamento2 },
    { title: "Balcão de Loja", category: "Comercial", image: empresa1 },
    { title: "Armários Embutidos", category: "Residencial", image: cozinha4 },
    { title: "Mesa de Jantar Artesanal", category: "Mobiliário", image: cozinha3 },
    { title: "Recepção de Escritório", category: "Comercial", image: empresa3 }
  ];

  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="portfolio-container">
        <h2 className="section-title">Nossos Projetos</h2>
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className={`portfolio-card fade-in-scale ${isVisible ? 'visible' : ''} delay-${i + 1}`}
            >
              <div className="portfolio-image">
                <img src={p.image} alt={p.title} />
                <div className="portfolio-overlay">
                  <span className="overlay-text">Ver mais</span>
                </div>
              </div>
              <h4>{p.title}</h4>
              <p>{p.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
