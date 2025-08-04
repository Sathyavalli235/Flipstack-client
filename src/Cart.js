import React, { useEffect, useState } from "react";
import axios from "axios";
import './Cart.css';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    if (user?._id) {
      axios
        .get(`https://flipstack-server.onrender.com/api/cart/get/${user._id}`)
        .then((res) => setCartItems(res.data))
        .catch((err) => console.error("Cart fetch error", err));
    }
  }, []);

  const increaseQty = async (item) => {
    const updatedQty = item.product.quantity + 1;
    await updateQuantity(item._id, updatedQty);
  };

  const decreaseQty = async (item) => {
    const updatedQty = item.product.quantity - 1;
    if (updatedQty >= 1) await updateQuantity(item._id, updatedQty);
  };

  const updateQuantity = async (cartId, quantity) => {
    try {
      await axios.put(`https://flipstack-server.onrender.com/api/cart/update/${cartId}`, { quantity });
      setCartItems(prev =>
        prev.map(item =>
          item._id === cartId ? { ...item, product: { ...item.product, quantity } } : item
        )
      );
    } catch (err) {
      console.error("Qty update failed", err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`https://flipstack-server.onrender.com/api/cart/delete/${id}`);
      setCartItems(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error("Remove error", err);
    }
  };

  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.product.price * item.product.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.product.image} alt={item.product.name} />
              <div>
                <h4>{item.product.name}</h4>
                <p>Price: ₹{item.product.price}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item)}>-</button>
                  <span>{item.product.quantity}</span>
                  <button onClick={() => increaseQty(item)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <hr />
          <h3>Total: ₹{getTotalPrice().toFixed(2)}</h3>
          <button className="btn-buy" onClick={() => navigate("/payment")}>Buy Now</button>
        </>
      )}
    </div>
  );
};

export default Cart;
