import React from 'react';
import '../index.css'; // Or your specific CSS file

const WhyChooseAura = () => {
  return (
    <section className="why-aura-section">
      <h2 className="why-heading">
        Why Choose <span className="aura-highlight">Aura?</span>
      </h2>

      <div className="features-grid">
        <div className="feature-round-card">
          <img src="/quality.webp" alt="Premium Quality" />
          <h3>Premium Quality</h3>
          <p>Each piece is handmade with love using high-end materials.</p>
        </div>

        <div className="feature-round-card">
          <img src="/custom.webp" alt="Fully Customizable" />
          <h3>Fully Customizable</h3>
          <p>Design every bracelet to match your vibe and mood.</p>
        </div>

        <div className="feature-round-card">
          <img src="/eco.webp" alt="Eco-Friendly" />
          <h3>Eco-Friendly</h3>
          <p>Our collections blend beauty with a commitment to the environment.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAura;
