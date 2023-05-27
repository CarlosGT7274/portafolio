import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    // por ejemplo, utilizando una API o enviando un correo electrónico.
    console.log('Formulario enviado');
    // También puedes reiniciar los campos del formulario
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
   <form className="my-form">
      <div className="container">
        <h1>Contactame </h1>
        <ul>
          <li>
            <div className="grid grid-2">
              <input type="text" placeholder="Nombre" required />  
              <input type="email" placeholder="email" required />
            </div>
          </li>
          <li>
            <div className="grid grid-2">
              <input  className="asunto" type="text" placeholder="asunto" required />  
            </div>
          </li>    
          <li>
            <textarea placeholder="Message"></textarea>
          </li>    
          <li>
            <div className="grid grid-3">
              <div className="required-msg">REQUIRED FIELDS</div>
              <button className="btn-grid" type="submit" >
                <span className="back">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" />
                </span>
                <span className="front">SUBMIT</span>
              </button>
              <button className="btn-grid" type="reset" >
                <span className="back">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="" />
                </span>
                <span className="front">RESET</span>
              </button> 
            </div>
          </li>    
        </ul>
      </div>
    </form>
  );
};

export default ContactForm;

