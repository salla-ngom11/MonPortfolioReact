import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // On importe le style

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_portfolio', 'template_bgeccvm', form.current, 'vmhpRhy4QEClHuS8c')
      .then(() => {
          alert('Message envoyé avec succès !');
          form.current.reset();
      }, () => {
          alert('Erreur lors de l\'envoi.');
      });
  };

  return (
    <div id="contact" className="contact-container">
      <h2>Me contacter</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Ton nom" required />
        <input type="email" name="email" placeholder="Ton email" required />
        <textarea name="message" placeholder="Ton message" rows="5" required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;