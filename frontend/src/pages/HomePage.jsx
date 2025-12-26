import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Electricidad Jet</h1>
          <p>
            Tu tienda de confianza en productos eléctricos. Tienda online con
            3 años en el mercado, especializada en soluciones para hogar y
            empresa. Catálogo actualizado, envíos rápidos y garantía en cada
            compra.
          </p>
          <Link to="/products" className="btn-primary">
            Explorar productos
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>🚚 Envío rápido</h3>
          <p>Entrega en toda el país en 2-3 días hábiles</p>
        </div>
        <div className="feature">
          <h3>💳 Pago seguro</h3>
          <p>Múltiples opciones de pago seguras</p>
        </div>
        <div className="feature">
          <h3>🔒 Garantía</h3>
          <p>Todos nuestros productos incluyen garantía</p>
        </div>
      </section>
    </div>
  );
}
