import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/cart.css';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    // Aquí irían más pasos de checkout
    alert('Funcionalidad de pago en construcción');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Tu carrito está vacío</h1>
        <button onClick={() => navigate('/products')} className="btn-continue">
          Continuar comprando
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Tu carrito</h1>

      <div className="cart-items">
        {cartItems.map((item) => {
          const itemId = item._id || item.id;
          return (
          <div key={itemId} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="item-price">${item.price.toLocaleString('es-AR')}</p>
            </div>

            <div className="item-quantity">
              <button
                onClick={() => updateQuantity(itemId, item.quantity - 1)}
                className="btn-qty"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(itemId, item.quantity + 1)}
                className="btn-qty"
              >
                +
              </button>
            </div>

            <div className="item-total">
              <p>${(item.price * item.quantity).toLocaleString('es-AR')}</p>
              <button
                onClick={() => removeFromCart(itemId)}
                className="btn-remove"
              >
                ✕
              </button>
            </div>
          </div>
        );
        })}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal:</span>
          <span>${getTotalPrice().toLocaleString('es-AR')}</span>
        </div>
        <div className="summary-row">
          <span>Envío:</span>
          <span>$7000</span>
        </div>
        <div className="summary-row total">
          <span>Total:</span>
          <span>${(getTotalPrice() + 7000).toLocaleString('es-AR')}</span>
        </div>
      </div>

      <div className="cart-actions">
        <button onClick={clearCart} className="btn-clear">
          Limpiar carrito
        </button>
        <button onClick={handleCheckout} className="btn-checkout">
          Ir a pagar
        </button>
      </div>
    </div>
  );
}
