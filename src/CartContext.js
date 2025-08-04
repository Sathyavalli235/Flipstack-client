import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [userKey, setUserKey] = useState("guest");
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  // ✅ Memoized Function to Prevent Infinite Loops
  const loadUserAndCart = useCallback(async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userinfo"));
      const isUserLoggedIn = localStorage.getItem("isLoggedIn") === "true";

      const key = userInfo?.email || "guest";
      if (key !== userKey) setUserKey(key);
      if (isUserLoggedIn !== isLoggedIn) setIsLoggedIn(isUserLoggedIn);
      if (userInfo?._id !== userId) setUserId(userInfo?._id || null);

      if (isUserLoggedIn && userInfo?._id) {
        const res = await axios.get(`http://localhost:5000/api/cart/get/${userInfo._id}`);
        setCartItems(res.data || []);
      } else {
        const savedCart = localStorage.getItem(`cart_${key}`);
        setCartItems(savedCart ? JSON.parse(savedCart) : []);
      }
    } catch (err) {
      console.error("Error loading user/cart:", err);
      setUserKey("guest");
      setCartItems([]);
    }
  }, [userKey, isLoggedIn, userId]);

  // ⏱️ Load on Mount Only Once
  useEffect(() => {
    loadUserAndCart();
  }, [loadUserAndCart]);

  // 🧠 Listen to localStorage changes (e.g., logout from another tab)
  useEffect(() => {
    const handleStorageChange = () => loadUserAndCart();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [loadUserAndCart]);

  // 💾 Save to LocalStorage (only for guests)
  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem(`cart_${userKey}`, JSON.stringify(cartItems));
    }
  }, [cartItems, userKey, isLoggedIn]);

  // ➕ Add to Cart
  const addToCart = async (item) => {
    const cleanPrice = Number(String(item.price).replace(/[^\d.]/g, ''));
    const cleanOriginal = Number(String(item.originalPrice).replace(/[^\d.]/g, ''));

    const cleanedItem = {
      ...item,
      price: isNaN(cleanPrice) ? 0 : cleanPrice,
      originalPrice: isNaN(cleanOriginal) ? 0 : cleanOriginal,
      quantity: 1,
    };

    const existing = cartItems.find(p => p.id === item.id);

    if (existing) {
      const updated = cartItems.map(p =>
        p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCartItems(updated);

      if (isLoggedIn && userId) {
        await axios.post("http://localhost:5000/api/cart/update", {
          userId,
          productId: item.id,
          quantity: 1,
          updateType: "increase"
        });
      }
    } else {
      const updated = [...cartItems, cleanedItem];
      setCartItems(updated);

      if (isLoggedIn && userId) {
        await axios.post("http://localhost:5000/api/cart/add", {
          userId,
          product: cleanedItem
        });
      }
    }
  };

  // ➖ Remove
  const removeFromCart = async (id) => {
    setCartItems(prev => prev.filter(p => p.id !== id));
    if (isLoggedIn && userId) {
      await axios.delete(`http://localhost:5000/api/cart/remove/${userId}/${id}`);
    }
  };

  // 🔼 Increase
  const increaseQty = async (id) => {
    setCartItems(prev =>
      prev.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p)
    );
    if (isLoggedIn && userId) {
      await axios.post("http://localhost:5000/api/cart/update", {
        userId,
        productId: id,
        quantity: 1,
        updateType: "increase"
      });
    }
  };

  // 🔽 Decrease
  const decreaseQty = async (id) => {
    setCartItems(prev =>
      prev.map(p =>
        p.id === id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
    if (isLoggedIn && userId) {
      await axios.post("http://localhost:5000/api/cart/update", {
        userId,
        productId: id,
        quantity: 1,
        updateType: "decrease"
      });
    }
  };

  // 🧹 Clear
  // const clearCart = async () => {
  //   setCartItems([]);
  //   if (isLoggedIn && userId) {
  //     await axios.delete(`http://localhost:5000/api/cart/clear/${userId}`);
  //   }
  // };

  const clearCart = () => setCartItems([]);

  // 💰 Total
  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        getTotalPrice,
        reloadCart: loadUserAndCart,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
