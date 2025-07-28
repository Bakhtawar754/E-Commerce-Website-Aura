import { Link } from "react-router-dom";
import React from "react";

function Navbar({ onLoginClick }) {
  return (
    <div className="navbar">
      <div className="logo">Aura_</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/customize">Customize</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="icons">
        <div className="nav-icon" onClick={onLoginClick}>
  <i className="fas fa-user"></i>
</div>
 
        
        <Link to="/cart" className="nav-icon">
          <i className="fas fa-shopping-cart"></i>
        </Link> 
      </div>
    </div>
  );
}

export default Navbar;
