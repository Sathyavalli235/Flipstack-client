import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [userKey, setUserKey] = useState("guest");
  const [cartItems, setCartItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to load user and cart based on current login
  const loadUserAndCart = () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userinfo"));
      const key = userInfo?.email || "guest";
      setUserKey(key);

      const savedCart = localStorage.getItem(`cart_${key}`);
      setCartItems(savedCart ? JSON.parse(savedCart) : []);
            setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true"); // ✅ Add this

    } catch (err) {
      console.error("Error loading user/cart:", err);
      setUserKey("guest");
      setCartItems([]);
    }
  };

  // Run when component mounts
  useEffect(() => {
    loadUserAndCart();

    // Listen for login/logout changes
    window.addEventListener("storage", loadUserAndCart);

    return () => window.removeEventListener("storage", loadUserAndCart);
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(`cart_${userKey}`, JSON.stringify(cartItems));
  }, [cartItems, userKey]);

  const addToCart = (item) => {
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
      setCartItems(prev =>
        prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCartItems(prev => [...prev, cleanedItem]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(p => p.id !== id));
  };

  const increaseQty = (id) => {
    setCartItems(prev =>
      prev.map(p => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev.map(p =>
        p.id === id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    // Keep the user's cart stored, don't remove from localStorage
  };

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
          isLoggedIn,             // ✅ Export this
        setIsLoggedIn    // call this after login/logout
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
