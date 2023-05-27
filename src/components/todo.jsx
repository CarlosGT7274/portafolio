import React, { useContext, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import ContactForm from './contactoform.jsx'
import Projects from './proyectos.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';



const IndexLayout = ({render}) => {
  const navigation = useNavigate()
  const { userData } = useContext(UserContext)

   const text = "¡Hola! Soy carlos, un apasionado programador web de México. Mi enfoque principal es el desarrollo full stack, lo que significa que puedo trabajar tanto en el lado del cliente como en el lado del servidor. Tengo experiencia en el desarrollo de aplicaciones utilizando tecnologías como HTML, CSS, JavaScript, así como en el uso de frameworks y bibliotecas populares como React para la construcción de interfaces de usuario interactivas y receptivas.\n\nEn el lado del servidor, tengo experiencia en la creación de API RESTful y el manejo de bases de datos relacionales y no relacionales. He trabajado con lenguajes y frameworks como Node.js, Express.js y MongoDB para desarrollar aplicaciones escalables y eficientes.";
  const [visibleText, setVisibleText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setVisibleText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 5);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
  <>
    <div className="row quitarbarra">
  <div className="col-4">
    <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center statico">
      <h3>Desarrollador web fullstack</h3>
      <div class="manuscrita">
        <h5>Las palabras son baratas. Muéstrame el código</h5>
        <h4 class="autor">~Linus Torvalds</h4>
      </div>
      <a className="p-1 rounded" href="#simple-list-item-1">sobre mi</a>
      <a className="p-1 rounded" href="#simple-list-item-2">Proyectos y logros</a>
      <a className="p-1 rounded" href="#simple-list-item-3">contacto</a>
      <div className="sociales">
  <a href="https://github.com/carlosGT7274" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="https://www.linkedin.com/in/carlos-gonzalez-931a82268/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href="https://www.instagram.com/lanegritaparker/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
</div>
    </div>
  </div>
  <div className="col-8">
    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example cuerpo" tabIndex="0">

    <div className="primero">
      <h4 id="simple-list-item-1">sobre mi</h4>
      <p id="text-animation">{visibleText}</p>
     </div>

     <div className="segundo"> 
      <h4 id="simple-list-item-2">Proyectos</h4>
      <p><Projects /></p>
     </div>

     <div className="tercero">
      <h4 id="simple-list-item-3"></h4>
      <p><ContactForm /></p>
     </div> 

</div>
  </div>
</div> 
  </>
  )
}

export default IndexLayout
