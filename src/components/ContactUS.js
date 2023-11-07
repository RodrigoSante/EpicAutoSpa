import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUsStyle.css';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_trwl9mf', 'template_j00c2fp', form.current, 'jd_WrVj6wRWRzj4gw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type='text' name='user_name' />
            <label>Email</label>
            <input type='email' name='user_email' />
            <label>Mensaje</label>
            <textarea name='message' />
            <input className='submit' type='submit' value='Enviar' />
        </form> 
    );
}