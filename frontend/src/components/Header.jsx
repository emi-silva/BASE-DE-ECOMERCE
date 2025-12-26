import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import '../styles/header.css';

export default function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const { itemsCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>⚡ Electricidad Jet</h1>
        </Link>

        <div className="nav-center">
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/contact">Contacto</Link>
        </div>

        <div className="nav-actions">
          {isAuthenticated ? (
            <>
              <Link to="/profile">Perfil</Link>
              <Link to="/cart" className="cart-link">
                🛒 Carrito ({itemsCount})
              </Link>
              <button onClick={handleLogout} className="btn-logout">
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-link btn-login">
                Iniciar sesión
              </Link>
              <Link to="/register" className="btn-link primary">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
