import React from 'react';
import improy1 from './imagenes/2023-05-24_19-47.png';
import improy2 from './imagenes/2023-05-24_21-11.png';
import improy3 from './imagenes/2023-05-24_21-15.png';
import improy4 from './imagenes/2023-05-24_21-18.png';
import improy5 from './imagenes/2023-05-24_21-21.png';

const ProjectCard = ({ title, description, previewLink, imagen }) => {
  return (
    <div className="card" style={{ maxWidth: '600px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', borderRadius: '5px', cursor: 'pointer' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imagen} alt="Preview" style={{ width: '100%', height: 'auto', borderRadius: '5px 0 0 5px' }} />
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{ padding: '1rem' }}>
            <h5 className="card-title" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h5>
            <p className="card-text" style={{ fontSize: '0.9rem', color: '#777' }}>{description}</p>
            <a href={previewLink} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}></a>
          </div>
        </div>
      </div>
    </div>

  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Landing de Venta',
      description: 'Para hacer la pagina me base, primero en uno de mis pasatiempos que es hacer placas de circuito impreso, de hay la temática, y la estrcutura de la pgina JLCPCB y de la pagina demo de mi profesor.',
      previewLink: 'https://pcbcompany.netlify.app',
      imagen: improy1,
    },
    {
      title: 'Aplicación CRUD',
      description: 'Desarrollé un CRUD utilizando JavaScript que se ejecuta en localhost. Este CRUD permite realizar las operaciones básicas de Crear, Leer, Actualizar y Eliminar datos almacenados localmente en el navegador.',
      previewLink: 'https://carlosgt7274.github.io/PROY2/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=084ca4e8-2330-4b80-98eb-f31bf0437fda&submissionId=e5604160-0e67-3b1e-4632-d1f992e19d08',
      imagen: improy2,
    },
    {
      title: 'Tablero de Datos ("Dashboard")',
      description: 'Este proyecto permite visualizar y analizar datos de manera atractiva. Utiliza HTML5, selectores CSS, Chart.js, fetch o axios, import y export, y promesas o async-await.',
      previewLink: 'https://charjs-api.netlify.app/',
      imagen: improy3,
    },
    {
      title: 'Restaurant App',
      description: 'aplicación que cuente con la presentación de un restaurante, su menú, horarios, información de contacto. Así mismo, se integra un sistema para que los clientes puedan reservar.',
      previewLink: 'https://timely-taffy-0ef67e.netlify.app',
      imagen: improy4,
    },
    {
      title: 'Aplicación de Comercio Electrónico',
      description: 'Nuestro proyecto consiste en un sitio web de comercio electrónico que permite a los usuarios comprar. Los usuarios pueden crear una cuenta, iniciar sesión.',
      previewLink: 'https://fronted-v2-proy5.vercel.app/?classId=1986888c-f5d6-4a02-9d5a-ce0407356dac&assignmentId=53559519-b7e6-4054-9038-f99157a739dd&submissionId=a2de3267-7e22-52c1-68cb-bd7c8585ace3',
      imagen: improy5,
    },
  ];

  return (
    <div className="container">
      <div className="allproy">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-6 ancho">
            <ProjectCard
              title={project.title}
              description={project.description}
              previewLink={project.previewLink}
              imagen={project.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

