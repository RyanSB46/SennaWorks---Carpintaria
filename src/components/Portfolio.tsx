import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const projects = [
    { title: "Cozinha Moderna", category: "Residencial" },
    { title: "Estante Personalizada", category: "Mobiliário" },
    { title: "Balcão de Loja", category: "Comercial" },
    { title: "Armários Embutidos", category: "Residencial" },
    { title: "Mesa de Jantar Artesanal", category: "Mobiliário" },
    { title: "Recepção de Escritório", category: "Comercial" }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h2 className="section-title">Nossos Projetos</h2>
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div key={i} className="portfolio-card">
              <div className="portfolio-image">
                <span>🖼️</span>
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
