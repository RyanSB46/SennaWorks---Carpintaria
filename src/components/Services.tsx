import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Carpintaria Residencial",
      desc: "Projetos sob medida para a sua casa",
      icon: "🏠"
    },
    {
      title: "Mobiliário Personalizado",
      desc: "Design exclusivo e durável",
      icon: "🪑"
    },
    {
      title: "Remodelações Comerciais",
      desc: "Espaços adaptados ao seu negócio",
      icon: "🏢"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>O que Fazemos</h2>
        <div className="services-list">
          {services.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
