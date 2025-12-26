import React from 'react';
import '../styles/productCard.css';

export default function ProductPlaceholder({ categoryLabel = 'Iluminación' }) {
  return (
    <div className="product-card product-placeholder">
      <div className="product-image-container">
        <div className="product-image product-image-empty">
          <div className="placeholder-icon">＋</div>
        </div>
      </div>
      
      <div className="product-content">
        <h3 className="product-title">Espacio para producto</h3>
        <p className="product-description">Agrega imagen y descripción del producto de {categoryLabel}.</p>
        
        <div className="product-footer">
          <span className="product-price">$0</span>
          <button disabled className="btn-disabled">
            Agregar producto
          </button>
        </div>
      </div>
    </div>
  );
}
