import React from 'react';
import '../assets/css/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtitle">
        Let’s connect and collaborate! Whether it’s for a new project, contribution to open-source, or just a tech chat — I’d love to hear from you. 📫
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> ponrasuthanghavel@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/PonrasuThanghavel" target="_blank" rel="noopener noreferrer">PonrasuThanghavel</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ponrasuthanghavel/" target="_blank" rel="noopener noreferrer">ponrasuthanghavel</a></p>
        <p><strong>Discord:</strong> <a href="https://discord.gg/qczKc6re" target="_blank" rel="noopener noreferrer">Join My Discord</a></p>
        <p><strong>Location:</strong> Tamil Nadu, India 🇮🇳</p>
      </div>
    </section>
  );
};

export default Contact;
