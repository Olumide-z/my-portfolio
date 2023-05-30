import React, {useRef, useState} from "react";
import "./contact.css";
import { Title } from "../index";
import emailjs from '@emailjs/browser';
import Modal from "./modal/Modal";

import {FiMail, FiSend} from 'react-icons/fi';
import {FaWhatsapp} from 'react-icons/fa';
import {BsArrowRightShort} from 'react-icons/bs';

const Contact = () => {
  const [result, setResult] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [textarea, setTextarea] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_otdg5us', 'template_okyuktv', form.current, '53sxT0mPPha8Kr17p')
    .then(
      () => {
        setResult('Message sent successfully');
        setName('');
        setEmail('');
        setTextarea('');
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    );
  };

  const closeResult = () => {
    setResult('');
  }

  return (
    
    <div className="contact" id='contact'>
      <div className="contact__modal">
      {result && <Modal closeResult={closeResult} modalContent={result}/>}
      </div>
      <div className="contact__content">
        <Title title="Contact Me" />
        <p>
          I am interested in jobs opportunities - especially ambitious or
          large projects. However, if you have other request or question, don't
          hesitate to contact me using below form either.
        </p>
      </div>

    <div className="contact__details">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Name" name='name' value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type="text" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <textarea placeholder='Message' cols="30" rows="10" required name="message" value={textarea} onChange={(e) => setTextarea(e.target.value)}></textarea>
        <button>Send <FiSend/></button>
      </form>

      <div className="contact__details-info">
         <div className="contact__details-info--social">
          <div>
            <FiMail className="icon"/>
            <h5>Email</h5>
            <p>olumideilesanmi10@gmail.com</p>
            <a className="write_me" href="mailto:olumideilesanmi10@gmail.com">
              <p>Write me</p> 
              <span><BsArrowRightShort/></span>
            </a>
          </div>
          <div>
            <FaWhatsapp className="icon"/>
            <h5>WhatsApp</h5>
            <p>+234 81 401 443 14</p>
            <a className="write_me" href="https://wa.me/2348140144314" target='__blank'>
              <p>Write me</p> 
              <span><BsArrowRightShort/></span>
            </a>
          </div>
         </div>
      </div>  
    </div>

    </div>
    
  );
};

export default Contact;
