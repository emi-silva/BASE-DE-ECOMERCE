import React, { useState } from 'react';
import '../styles/contact.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías integrar envío real (backend/email service)
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contacto</h1>
        <p className="contact-subtitle">¿Tienes consultas? Escríbenos y te respondemos.</p>

        <div className="contact-info">
          <div>
            <strong>Email:</strong> soporte@electricidadjet.com
          </div>
          <div>
            <strong>Teléfono:</strong> +54 11 5555-5555
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-submit" disabled={sent}>
            {sent ? 'Mensaje enviado ✔' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </div>
  );
}
