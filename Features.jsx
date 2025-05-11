import React from 'react'

function Features() {
  return (
    <div>
      <section className="features">
        <h2 className="title">Why Choose Us</h2>
        <div className="features-grid">
            <div className="feature">
                <div className="feature-icon"><a href='#'>🚚</a></div>
                <h3>Fast Delivery</h3>
                <p>Get your order delivered within 24 hours in selected areas.</p>
            </div>
            <div className="feature">
                <div className="feature-icon">💰</div>
                <h3>Best Prices</h3>
                <p>We offer competitive prices on our 1000+ products.</p>
            </div>
            <div className="feature">
                <div className="feature-icon">🔄</div>
                <h3>Easy Returns</h3>
                <p>Not satisfied with your product? Return it within 30 days.</p>
            </div>
            <div className="feature">
                <div className="feature-icon">🔐</div>
                <h3>Secure Payment</h3>
                <p>Your payment information is always safe with us.</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Features
