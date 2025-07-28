import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AuthModal from './components/authModal';
import React, { useState } from 'react';



// Pages

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Customize from './pages/Customize';

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  return (
    <Router>
      <Navbar onLoginClick={() => setShowAuthModal(true)} />
 <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
       <Route path="/Products" element={<Products />} /> 
        <Route path="/Customize" element={<Customize/>}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/authModal" element={<AuthModal/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
