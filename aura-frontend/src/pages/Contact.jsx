import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../index.css'; // your global CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

function Contact() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
      e.target.reset(); // Clear form fields
    }, 3000);
  };

  return (
    <>
   

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-heading">
            Let's Connect With <span className="brand-name">Aura_</span>
          </h2>
          <p className="subtext">
            Questions, custom requests, or just want to say hi? We’d love to hear from you!
          </p>

          <div className="contact-wrapper">
            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="input-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="contact-info">
              <h3>Get in Touch</h3>
              <div className="info-block">
                <i className="fas fa-envelope"></i>
                <p>hello@aurajewels.com</p>
              </div>
              <div className="info-block">
                <i className="fas fa-phone"></i>
                <p>+92 300 1234567</p>
              </div>
              <div className="info-block">
                <i className="fas fa-map-marker-alt"></i>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Icon */}
      <a href="https://wa.me/923001234567" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Toast Message */}
      {toastVisible && <div className="toast show">Message sent successfully!</div>}

  
    </>
  );
}

export default Contact;
