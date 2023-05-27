import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import ContactForm from './contactoform.jsx'
import Projects from './proyectos.jsx'

const IndexLayout = ({render}) => {
  const navigation = useNavigate()
  const { userData } = useContext(UserContext)

  return (
  <>
    <div className="row quitarbarra">
  <div className="col-4">
    <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center statico">
      <a className="p-1 rounded" href="#simple-list-item-1">sobre mi</a>
      <a className="p-1 rounded" href="#simple-list-item-2">Proyectos y logros</a>
      <a className="p-1 rounded" href="#simple-list-item-3">contacto</a>
    </div>
  </div>
  <div className="col-8">
    <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example cuerpo" tabIndex="0">

    <div className="primero">
      <h4 id="simple-list-item-1">Item 1</h4>
      <p>¡Hola! Soy [Tu nombre], un apasionado programador web de México. Mi enfoque principal es el desarrollo full stack, lo que significa que puedo trabajar tanto en el lado del cliente como en el lado del servidor. Tengo experiencia en el desarrollo de aplicaciones utilizando tecnologías como HTML, CSS, JavaScript, así como en el uso de frameworks y bibliotecas populares como React para la construcción de interfaces de usuario interactivas y receptivas.

En el lado del servidor, tengo experiencia en la creación de API RESTful y el manejo de bases de datos relacionales y no relacionales. He trabajado con lenguajes y frameworks como Node.js, Express.js y MongoDB para desarrollar aplicaciones escalables y eficientes.
      </p>
     </div>

     <div className="segundo"> 
      <h4 id="simple-list-item-2">Item 2</h4>
      <p><Projects /></p>
     </div>

     <div className="tercero">
      <h4 id="simple-list-item-3">Item 3</h4>
      <p><ContactForm /></p>
     </div> 

</div>
  </div>
</div> 
  </>
  )
}

export default IndexLayout