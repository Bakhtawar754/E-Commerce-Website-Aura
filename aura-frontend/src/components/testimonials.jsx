import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h1>💬 What Our Customers Say_</h1>
      <p className="para01">
        Real experiences. Honest feedback. Trusted by hundreds of customers across Pakistan.
      </p>

      <div className="testimonial-grid">
        <div className="testimonial-card">
          <p className="testimonial-text">
            ~“Absolutely love my charm bracelet! It arrived quickly and looks even better in person.”
          </p>
          <span className="testimonial-name">– Areeba M., Karachi</span>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            ~“I gifted the beaded bracelet to my sister, and she wears it every day. Beautifully crafted!”
          </p>
          <span className="testimonial-name">– Maham L., Lahore</span>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            ~“The quality is amazing! Got a leather bracelet for my husband and he loved it.”
          </p>
          <span className="testimonial-name">– Sana Z., Islamabad</span>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            ~“Very responsive team and fast delivery. Will definitely shop again. 💜”
          </p>
          <span className="testimonial-name">– Hina S., Hyderabad</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
