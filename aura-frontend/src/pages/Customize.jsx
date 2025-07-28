import React, { useState } from 'react';
import '../index.css';

const Customize = () => {
  const [beadColor, setBeadColor] = useState('');
  const [charmStyle, setCharmStyle] = useState('');
  const [engraving, setEngraving] = useState('');
  const [size, setSize] = useState('Medium');

  return (
    <div className="customize-container">
      <h1 className="customize-title">✨ Customize Your Bracelet ✨</h1>
      
      <div className="customize-form">
        <div className="form-section">
          <label>Bead Color</label>
          <select value={beadColor} onChange={(e) => setBeadColor(e.target.value)}>
            <option value="">Select</option>
            <option value="black">Black Onyx</option>
            <option value="white">Pearl White</option>
            <option value="red">Ruby Red</option>
            <option value="blue">Sapphire Blue</option>
          </select>
        </div>

        <div className="form-section">
          <label>Charm Style</label>
          <select value={charmStyle} onChange={(e) => setCharmStyle(e.target.value)}>
            <option value="">Select</option>
            <option value="heart">Heart</option>
            <option value="star">Star</option>
            <option value="initial">Initial</option>
            <option value="symbol">Infinity</option>
          </select>
        </div>

        <div className="form-section">
          <label>Engraving Text</label>
          <input
            type="text"
            maxLength="15"
            placeholder="Max 15 characters"
            value={engraving}
            onChange={(e) => setEngraving(e.target.value)}
          />
        </div>

        <div className="form-section">
          <label>Wrist Size</label>
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <button className="preview-btn">Preview Design</button>
      </div>

      <div className="preview-box">
        <h2>💎 Your Design Preview</h2>
        <p><strong>Bead:</strong> {beadColor || 'None selected'}</p>
        <p><strong>Charm:</strong> {charmStyle || 'None selected'}</p>
        <p><strong>Engraving:</strong> {engraving || 'None'}</p>
        <p><strong>Size:</strong> {size}</p>
        <div className="bracelet-preview-img">[Preview Image Here]</div>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Customize;


