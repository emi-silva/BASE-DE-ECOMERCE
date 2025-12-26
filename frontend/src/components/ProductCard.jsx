import React from 'react';
import '../styles/productCard.css';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-image" />
        ) : (
          <div className="product-image product-image-empty"></div>
        )}
        {product.category && (
          <span className="category-badge">{product.category}</span>
        )}
      </div>
      
      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">${product.price.toLocaleString('es-AR')}</span>
          {product.stock > 0 ? (
            <button onClick={() => onAddToCart(product)} className="btn-add">
              Agregar al carrito
            </button>
          ) : (
            <button disabled className="btn-disabled">
              Sin stock
            </button>
          )}
        </div>

        {product.stock <= 5 && product.stock > 0 && (
          <p className="stock-warning">⚠️ Solo {product.stock} disponibles</p>
        )}
      </div>
    </div>
  );
}
