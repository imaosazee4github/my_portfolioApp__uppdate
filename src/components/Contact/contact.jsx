/* eslint-disable react-hooks/rules-of-hooks */
import React  from 'react';
import "./contact.css"
import { TfiEmail } from 'react-icons/tfi'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_evc0221', 'template_8od0be9', form.current, 'EY9UZ27vAbxWsatN8')
    e.target.reset()
  
  };
  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <TfiEmail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>imaosazee@gmail.com</h5>
        <a href="mailto:imaosazee@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
          <h4>Messager</h4>
          <h5>facebook contact</h5>
        <a href="https://m.me/imaosazee/" target="_blank" rel="noreferrer">Send a Message</a>
        </article>
        <article className="contact__option">
          <FaWhatsapp className="contact__option-icon"/>
          <h4>WhatsApp</h4>
          <h5>2349030143480</h5>
        <a href="https://api.whatsapp.com/send?phone+2349030143480" target="_blank" rel="noreferrer">Send a Message</a>
        </article>
        </div>
        <form ref={form}  onSubmit={sendEmail}className="contact__form">
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
  </div>
    </section>
  )
}

export default contact