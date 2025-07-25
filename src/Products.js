import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'; 
import { useCart } from './CartContext';
import prod1 from './images/b1.jpg'; // sample images
import prod2 from './images/b2.jpg';
import prod3 from './images/b3.jpg';
import prod4 from './images/p18.jpg';
import prod5 from './images/p1.jpg';
import prod6 from './images/p2.jpg';
import prod7 from './images/p3.jpg';
import prod8 from './images/p4.jpg';
import prod9 from './images/p5.jpeg';
import prod10 from './images/p6.jpeg';
import prod11 from './images/b4.jpg';
import prod12 from './images/b5.jpg';
import prod13 from './images/b6.jpg';
import prod14 from './images/b7.jpg';
import prod15 from './images/b8.jpg';
import prod16 from './images/b9.jpg';
import prod17 from './images/p7.jpg';
import prod18 from './images/p8.jpg';
import prod19 from './images/p9.jpg';
import prod20 from './images/p10.jpg';
import prod21 from './images/p11.jpg';
import prod22 from './images/p12.jpg';
import prod23 from './images/p14.jpg';
import prod24 from './images/p16.jpg';
import prod25 from './images/p20.jpg';


const Products = () => {
  const navigate = useNavigate();
   const { addToCart } = useCart();
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const user = localStorage.getItem("isLoggedIn"); // or use a context if you have
  setIsLoggedIn(!!user); // set to true if user exists
}, []);
const handleAddToCart = (product) => {
  if (!isLoggedIn) {
    alert("Please login to add items to the cart.");
    return;
  }

  const cleanedProduct = {
    ...product,
    price: Number(String(product.price).replace(/[^\d.]/g, '')),
    originalPrice: Number(String(product.originalPrice).replace(/[^\d.]/g, '')),
  };

  addToCart(cleanedProduct);
  alert(`${product.name} added to cart!`);
};

const handleBuyNow = (productName) => {
  if (!isLoggedIn) {
    alert("Please login to proceed with buying.");
    return;
  }

  alert(`Proceeding to buy ${productName}`);
};


  const products = [
    {
      id: 1,
      name: "Van Heusen Men's Shirt",
      price: "₹549",
      originalPrice: "₹1,099",
      image: prod1,
    },
    {
      id: 2,
      name: "Safari Laptop Backpack",
      price: "₹599",
      originalPrice: "₹3,396",
      image: prod2,
    },
    {
      id: 3,
      name: "Wakefit Waterproof Mattress",
      price: "₹917",
      originalPrice: "₹1,349",
      image: prod3,
    },
    {
      id:4,
      name:"Blue Star 1.5 Ton 3 Star Inverter Split AC",
      price:"₹36,999",
      originalPrice:"₹40,000",
      image:prod4,
    },
     {
      id:5,
      name:"Giglick 4xl Bean Bag Cushion ",
      price:"₹2100",
      originalPrice:"₹4900",
      image:prod5,
    },
    {
      id:6,
      name:" Wooden 3 Leg Round Coffee Table,End Table ",
      price:"₹1300",
      originalPrice:"₹3500",
      image:prod6,
    },
      {
      id:7,
      name:" Solimo Bean Bag 1 kg Refill Pack|Quick & Easy to Fill ",
      price:"₹519",
      originalPrice:"₹1000",
      image:prod7,
    },
      {
      id:8,
      name:" Godrej 180 L 2 Star Advanced Capillary Technology ",
      price:"₹12,490",
      originalPrice:"₹17,500",
      image:prod8,
    },
     {
      id:9,
      name:" Armchair Room Maren Living Room Accent Chairs  ",
      price:"₹9500",
      originalPrice:"₹15,000",
      image:prod9,
    },
     {
      id:10,
      name:" Teak Wood, Size 75*72, Head Carving Work, Top Covered  ",
      price:"₹15,750",
      originalPrice:"₹20,500",
      image:prod10,
    },
    
    {
      id:11,
      name:" Road Runner Astro, the 3-wheeler  Astro Man style  ",
      price:"₹15,750",
      originalPrice:"₹20,500",
      image:prod11,
    },
    {
      id:12,
      name:"  MaxSmile Portable Mini Sealing  – Reseal with a Smile! ",
      price:"₹500",
      originalPrice:"₹750",
      image:prod12,
    },
    {
      id:13,
      name:" PHILIPS Power Series P-1 Beard Trimmer-VHTH-25 ",
      price:"₹934",
      originalPrice:"₹1500",
      image:prod13,
    },
    {
      id:14,
      name:" Ezee Premium Garbage Bag (Medium, Black) ",
      price:"₹450",
      originalPrice:"₹600",
      image:prod14,
    },
    {
      id:15,
      name:" Non-Stick Dosa Tawa 4 Coating 4mm (30 Cm) ",
      price:"₹1,349",
      originalPrice:"₹2000",
      image:prod15,
    },
     {
      id:16,
      name:" HP v236w 16GB USB 2.0 Pen Drive  ",
      price:"₹378",
      originalPrice:"₹500",
      image:prod16,
    },
    {
      id:17,
      name:" fackelmann stainless steel egg whisk ",
      price:"₹300",
      originalPrice:"₹400",
      image:prod17,
    },
    {
      id:18,
      name:"  Microfiber Cleaning Cloth | 12 Pack  ",
      price:"₹750",
      originalPrice:"₹1500",
      image:prod18,
    },
    {
      id:19,
      name:" Rice Washing Bowl / Filter Cleaning Pasta  ",
      price:"₹378",
      originalPrice:"₹500",
      image:prod19,
    },
    {
      id:20,
      name:" Sauce and Oil Bottle with Silicone Brushz ",
      price:"₹388",
      originalPrice:"₹500",
      image:prod20,
    },
    {
      id:21,
      name:" NH10 DESIGNS Stainless Steel 3-Tier Kitchen Rack ",
      price:"₹529",
      originalPrice:"₹750",
      image:prod21,
    },
    {
      id:22,
      name:" Skylike 6Pcs Fridge Storage Boxes, Fridge Organizer  ",
      price:"₹398",
      originalPrice:"₹650",
      image:prod22,
    },
    {
      id:23,
      name:" Godrej 7.5 Kg 5 Star Rollercoaster Wash Technology,  ",
      price:"₹13,990",
      originalPrice:"₹15,550",
      image:prod23,
    },
    {
      id:24,
      name:" V-Guard VGSD 50 Supreme Stabilizer for Refrigerator   ",
      price:"₹1898",
      originalPrice:"₹2500",
      image:prod24,
    },
     {
      id:25,
      name:" boAt Lunar Discovery w/ 1.39,, Turn-by Navigation ",
      price:"₹1399",
      originalPrice:"₹2500",
      image:prod25,
    }
  ];

  return (
    <div className="orders-container">
      <div className="orders-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h4>{product.name}</h4>
            <p>
              <span className="price">{product.price}</span>{" "}
              <span className="original-price"><s>{product.originalPrice}</s></span>
            </p>
            <div className="product-buttons">
              <button onClick={() => handleAddToCart(product)} className="btn-cart">Add to Cart</button>
              <button onClick={() => handleBuyNow(product.name)} className="btn-buy">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
  