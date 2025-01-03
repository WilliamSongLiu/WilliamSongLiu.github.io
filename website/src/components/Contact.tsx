import React, { FC, useState } from 'react';
import '../styles/Contact.css';

const Contact: FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <div className="success-message">
          <p>Thank you for your message! I'll get back to you soon.</p>
        </div>
      ) : (
        <form action="https://formspree.io/f/xdkkpekr" method="POST" onSubmit={() => setSubmitted(true)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              rows={5}
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      )}
    </section>
  );
};

export default Contact;