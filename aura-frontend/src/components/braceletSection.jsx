import React from 'react';

const bracelets = [
  { src: '/leather bracelet.avif', alt: 'Leather Bracelets', label: 'Leather Bracelets' },
  { src: '/02.jpg', alt: 'Charm Bracelets', label: 'Charm Bracelets' },
  { src: '/06.webp', alt: 'Friendship Bracelets', label: 'Friendship Bracelets' },
  { src: '/07.jpg', alt: 'Cord Bracelets', label: 'Cord Bracelets' },
  { src: '/08.webp', alt: 'Watch Bracelets', label: 'Watch Bracelets' },
  { src: '/03.avif', alt: 'Beaded Bracelets', label: 'Beaded Bracelets' },
  { src: '/04.avif', alt: 'Engraved Bracelets', label: 'Cuff Bracelets' },
  { src: '/05.jpg', alt: 'Name Bracelets', label: 'Name Bracelets' },
];

const BraceletSection = () => {
  return (
    <section className="bracelet-section">
      <h2 className="bracelet-title">
        <span className="glow-text">Shop By Bracelet Type_</span>
      </h2>
      <p className="bracelet-subtitle">Find the bracelet that speaks to your style or story.</p>

      <div className="bracelet-grid">
        {bracelets.map((bracelet, index) => (
          <div className="bracelet-item" key={index}>
            <img src={bracelet.src} alt={bracelet.alt} />
            <div className="overlay">
              <span>{bracelet.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BraceletSection;
