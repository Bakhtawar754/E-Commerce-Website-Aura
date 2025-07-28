import React from 'react';
import '../index.css'; 

const Footer = () => {
  return (
    <footer className="footer-glass">
      <div className="footer-inner">
        <div className="footer-column brand">
          <h2>Aura_</h2>
          <p>Jewelry that speaks your story.</p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Bracelets</a></li>
            <li><a href="#">Why Aura</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-column social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
          <p className="email">support@aurajewelry.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Aura Jewelry. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
