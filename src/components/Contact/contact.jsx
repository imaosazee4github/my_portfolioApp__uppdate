import React from 'react'
import "./contact.css"
import { TfiEmail } from 'react-icons/tfi'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'

const contact = () => {
  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <TfiEmail/>
          <h4>Email</h4>
          <h5>imaosazee@gmail.com</h5>
        <a href="mailto:imaosazee@gmail.com" target="_blank" rel="noreferrer">Send a Message</a>
        </article>

        <article className="contact__option">
          <RiMessengerLine/>
          <h4>Messager</h4>
          <h5>facebook contact</h5>
        <a href="https://m.me/imaosazee/" target="_blank" rel="noreferrer">Send a Message</a>
        </article>
        <article className="contact__option">
          <FaWhatsapp/>
          <h4>WhatsApp</h4>
          <h5>2349030143480</h5>
        <a href="https://api.whatsapp.com/send?phone+2349030143480" target="_blank" rel="noreferrer">Send a Message</a>
        </article>
        </div>
        <form action="" className="contact__form">
          <input type="text" name='name' placeholder="Your Full Name" required/>
          <input type="email" name='email' placeholder="Your Email" required/>
          <textarea name="message"  rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
  </div>
    </section>
  )
}

export default contact