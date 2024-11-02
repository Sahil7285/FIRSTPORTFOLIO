import React from "react";
import "./contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-heading">Let’s Connect!</h1>
        <p className="contact-description">
          Whether you’re curious about my projects, have a collaboration in mind, or just want to chat about design, I'd love to hear from you! Feel free to drop me a message below, and I'll get back to you as soon as I can. Let’s create something amazing together!
        </p>
        <div className="contact-info">
          <p>Email: 24134988@studentmail.ul.ie</p>
          <p>Mobile: 899776088</p>
        </div>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <label>Email</label>
          <input type="email" required />
          <label>Mobile</label>
          <input type="tel" required />
          <label>Message</label>
          <textarea rows={4} required></textarea>
          <button type="submit" className="contact-send-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
