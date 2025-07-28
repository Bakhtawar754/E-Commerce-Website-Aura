import React, { useState } from 'react';


const productsData = [
  {
    category: 'Beaded Bracelets',
    products: [
      { id: 1, name: 'Black Onyx', price: 1500, img: '/be1.webp', sale: true },
      { id: 2, name: 'Tiger Eye', price: 1700, img: '/be2.jpeg' },
      { id: 3, name: 'Bracelet With Clasp', price: 1300, img: '/be3.jpeg' },
      { id: 4, name: 'Red Aggate', price: 1100, img: '/be4.jpeg' },
      { id: 5, name: 'Friendship', price: 900, img: '/be5.jpeg' },
      { id: 6, name: 'Stretchy Bracelet', price: 600, img: '/be6.jpeg' },
      { id: 7, name: 'Rainbow Colors', price: 1050, img: '/be7.jpeg' },
      { id: 8, name: 'Natural Stone', price: 1400, img: '/be8.jpeg' },
    ]
  },
  {
    category: 'Charm Bracelets',
    products: [
      { id: 9, name: 'Heart Charms', price: 1800, img: '/images/charm1.jpg', sale: true },
      { id: 10, name: 'Butterfly Charms', price: 2000, img: '/images/charm2.jpg' },
      { id: 11, name: 'Moon Charms', price: 1600, img: '/images/charm1.jpg' },
      { id: 12, name: 'Star Charms', price: 2100, img: '/images/charm2.jpg' },
    ]
  },
  {
    category: 'Leather Bracelets',
    products: [
      { id: 13, name: 'Brown Wrap', price: 2000, img: '/images/leather1.jpg' },
      { id: 14, name: 'Braided Black', price: 1900, img: '/images/leather2.jpg', sale: true },
      { id: 15, name: 'Double Layered', price: 1800, img: '/images/leather1.jpg' },
      { id: 16, name: 'Vintage Brown', price: 2100, img: '/images/leather2.jpg' },
    ]
  }
];

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="products-page">
      <h1 className="page-title"> Our Arrivals_</h1>

      {productsData.map((section, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{section.category}</h2>
          <div className="product-grid">
            {section.products.map(product => (
              <div className="product-card" key={product.id}>
                {product.sale && <span className="badge bounce">Sale</span>}
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">Rs. {product.price}</p>
                <button onClick={() => addToCart(product)} className="add-btn">
                  <i className="fas fa-cart-plus"></i> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

