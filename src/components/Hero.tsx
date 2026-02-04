import React, { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div 
        className="hero-background"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Carpintaria de Excelência</h1>
        <p>Transformamos ideias em espaços com qualidade e design</p>
        <button className="cta-button">Descubra Nossos Projetos</button>
      </div>
    </section>
  );
}
