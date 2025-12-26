import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/profile.css';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="profile-container">
        <p>Por favor, inicia sesión para ver tu perfil</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>Mi Perfil</h1>

        <div className="profile-info">
          <div className="info-row">
            <label>Nombre:</label>
            <span>{user.name}</span>
          </div>

          <div className="info-row">
            <label>Email:</label>
            <span>{user.email}</span>
          </div>
        </div>

        <div className="profile-actions">
          <button onClick={handleLogout} className="btn-logout">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}
