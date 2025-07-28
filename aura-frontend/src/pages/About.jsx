import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../index.css'; // Assuming your styles are global
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome works

function About() {
  return (
    <>
     
      {/* Hero Section */}
      <section className="hero">
        <h2>Not Just Jewelry. It's Your Aura_</h2>
      </section>

      {/* Brand Statement */}
      <section className="section">
        <h3>What is Aura_?</h3>
        <p>Aura_ isn’t just a brand. It’s a mood. A movement. A message wrapped around your wrist.</p>
        <br />
        <p>In a world full of fast fashion and copy-paste trends, Aura_ stands for something real — individuality...</p>
        <br />
        <p>Our journey started small — just a single thread, a few beads, and a belief that self-expression is power...</p>
        <br />
        <p>You don’t need a reason to wear something meaningful. You just need something that feels like you...</p>
        <br />
        <p>From custom designs to meaningful gifts, we help people tell their story — one bracelet at a time...</p>
        <br />
        <p>Aura_ is handcrafted energy. Designed by you. Made for you. Worn like a second skin.</p>
        <br />
        <p>And the best part? No two pieces are ever the same — just like no two souls are.</p>
      </section>

      {/* Values Section */}
      <section className="section">
        <h3>What We Stand For</h3>
        <div className="values">
          <div className="value-box">
            <h4>Crafted With Purpose</h4>
            <p>Every bracelet is handmade with intention and detail — because your story deserves attention.</p>
          </div>
          <div className="value-box">
            <h4>Planet Friendly</h4>
            <p>We use sustainable packaging and materials to care for the Earth while you express yourself.</p>
          </div>
          <div className="value-box">
            <h4>Made for You</h4>
            <p>From beads to string — you're in control. Build your own design that speaks your truth.</p>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section story-section">
        <div className="story-text">
          <h3>How Aura_ Started</h3>
          <p>
            It all began at a kitchen table with a few charms and a lot of love. Aura_ was created to help people wear
            their personality and power on their wrist...
          </p>
        </div>
        <div className="story-img">
          <img src="/new.webp" alt="Aura founder making bracelets" width="100%" height="360px" />
        </div>
      </section>

    </>
  );
}

export default About;
