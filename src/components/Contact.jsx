import React, { useState } from "react";
import "../style/Contact.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message sent successfully!");
    }, 1000); // Simulate message sent
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form
          action="https://formsubmit.co/hkborewells@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          
          {/* Anti-spam hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <button type="submit" className="btn4">Send Message</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default ContactForm;

