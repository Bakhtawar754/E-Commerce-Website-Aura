import React, { useState } from 'react';
import '../index.css'; // Adjust path if needed

const products = [
  {
    id: 1,
    name: 'Beaded Elegance',
    price: 1500,
    img: '/beaded.jpeg',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Charm Delight',
    price: 1800,
    img: '/charm.avif',
  },
  {
    id: 3,
    name: 'Classic Leather',
    price: 2000,
    img: '/leath.webp',
  },
  {
    id: 4,
    name: 'Friendship Bond',
    price: 1200,
    img: '/friendss.jpeg',
  },
  {
    id: 5,
    name: 'Minimalist Glow',
    price: 1350,
    img: '/mini.jpg',
  },
  {
    id: 6,
    name: 'Boho Stack',
    price: 1700,
    img: '/boho.webp',
    badge: 'New',
  },
  {
    id: 7,
    name: 'Custom Name Band',
    price: 1900,
    img: '/pers.avif',
  },
  {
    id: 8,
    name: 'Golden Luxe',
    price: 2300,
    img: '/gold.jpg',
  },
];

const FeaturedProducts = () => {
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (product) => {
    // Save to localStorage or global state if needed
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section className="featured-products">
      <h2 className="section-title">Best Sells_</h2>
      <p className="subtext">
        Our most loved handcrafted bracelets — freshly curated for your vibe.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {product.badge && <div className="badge">{product.badge}</div>}
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">Rs. {product.price.toLocaleString()}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <a href="/products" className="view-all-btn">
        View All Bracelets →
      </a>

      {showToast && <div className="toast show">Product added to cart!</div>}
    </section>
  );
};

export default FeaturedProducts;
