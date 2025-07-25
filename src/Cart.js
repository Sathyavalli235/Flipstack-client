import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    getTotalPrice,
    increaseQty,
    decreaseQty
  } = useCart();

  const navigate = useNavigate();

  // Debug: check if prices and quantities are numbers
  console.log("Cart Items:", cartItems);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
<p>Price: ₹{!isNaN(item.price) ? Number(item.price).toFixed(2) : "0.00"}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <hr />
<h3>Total: ₹{!isNaN(getTotalPrice()) ? getTotalPrice().toFixed(2) : "0.00"}</h3>

          <div style={{ textAlign: 'right' }}>
            <button onClick={() => navigate('/payment')} className="btn-buy">
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
