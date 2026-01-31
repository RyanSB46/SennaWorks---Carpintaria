import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Obrigado! Entraremos em contacto em breve.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contacte-nos</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Informações de Contacto</h3>
            <div className="info-item">
              <span>📍</span>
              <p>Rua da Carpintaria, 123 - Portugal</p>
            </div>
            <div className="info-item">
              <span>📞</span>
              <p>+351 XXX XXX XXX</p>
            </div>
            <div className="info-item">
              <span>📧</span>
              <p>info@carpintariaexcelencia.pt</p>
            </div>
            <div className="info-item">
              <span>🕐</span>
              <p>Seg-Sex: 09:00 - 17:00<br/>Sab: 10:00 - 14:00</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Seu Telefone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            ></textarea>
            <button type="submit" className="submit-btn">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}
