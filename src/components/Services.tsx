import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Carpintaria Residencial",
      desc: "Projetos sob medida para a sua casa",
      image: "/projetocozinha2.jpeg"
    },
    {
      title: "Mobiliário Personalizado",
      desc: "Design exclusivo e durável",
      image: "/projetoacabamento1.jpeg"
    },
    {
      title: "Remodelações Comerciais",
      desc: "Espaços adaptados ao seu negócio",
      image: "/projetoempresa2.jpeg"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">O que Fazemos</h2>
        <div className="services-list">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-image">
                <img src={s.image} alt={s.title} />
              </div>
              <div className="service-content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
