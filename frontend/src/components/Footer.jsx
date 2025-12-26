import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-top">
        <span className="footer-brand">⚡ Electricidad Jet</span>
        <span className="footer-tagline">Productos eléctricos para hogar y empresa</span>
      </div>

      <div className="container footer-main">
        <nav className="footer-links">
          <Link to="/">Inicio</Link>
          <span className="divider">·</span>
          <Link to="/products">Productos</Link>
          <span className="divider">·</span>
          <Link to="/contact">Contacto</Link>
        </nav>
        <div className="footer-contact">
          <span>hola@electricidadjet.com</span>
          <span className="divider">·</span>
          <span>+51 999 999 999</span>
          <span className="divider">·</span>
          <span>Lun–Vie 9:00–18:00</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© 2023–{year} Electricidad Jet. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
