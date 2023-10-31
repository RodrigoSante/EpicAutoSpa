import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUsStyle.css';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      const YOUR_SERVICE_ID = 'ad';
      const YOUR_TEMPLATE_ID = 'asd';
      const YOUR_PUBLIC_KEY = 'asd';
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Mensaje</label>
            <textarea name="message" />
            <input type="submit" value="Enviar" />
        </form> 
    );
}