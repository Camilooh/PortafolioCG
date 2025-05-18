import React, { useRef, useEffect } from 'react';
import '../styles/Portfolio.css';
import myPhoto from '../assets/images/myPhoto.jpg';

function About() {
  // Referencia para el bloque "Sobre mí" y la línea
  const mainBlockRef = useRef(null);
  const dividerRef = useRef(null);

  // Sincroniza la altura de la línea con el bloque "Sobre mí"
  useEffect(() => {
    if (mainBlockRef.current && dividerRef.current) {
      dividerRef.current.style.height = `${mainBlockRef.current.offsetHeight}px`;
    }
  }, []);

  return (
    <div className="About about-container">
      <div className="about-photo">
        <img src={myPhoto} alt="Camilo Gutiérrez" />
      </div>
      <div className="about-divider" ref={dividerRef}></div>
      <div className="about-description">
        <div className="about-main-block" ref={mainBlockRef}>
          <h2>Sobre mí</h2>
          <p>
            Soy Camilo Gutiérrez, graduado de la carrera de Medios Interactivos en la Universidad San Francisco de Quito en el 2022. Desde entonces, he trabajado en el área de desarrollo web, videojuegos y diseño gráfico. Me apasiona la creación de experiencias interactivas y visuales que cautiven a los usuarios.
          </p>
          <p>
            También tengo conocimientos en la creación de contenido para redes sociales y plataformas digitales.
          </p>
          <p>
            En el área de desarrollo, tengo conocimientos en tecnologías web (JavaScript, TypeScript, Angular, HTML, CSS). Poseo también conocimientos en el desarrollo de videojuegos, utilizando Unity y Unreal Engine con sus respectivos lenguajes de programación (C#, C++ y Blueprints).
          </p>
        </div>

        <div className="about-photo-block">
          <h3>Mi pasión por la fotografía</h3>
          <p>
            La fotografía es una de mis grandes pasiones. Me encanta explorar diferentes estilos y técnicas, desde la fotografía de paisajes hasta retratos urbanos. A través de mi lente, busco capturar emociones, contar historias y mostrar la belleza de los pequeños detalles que nos rodean. 
            <br /><br />
            Disfruto experimentar con la luz natural y los colores, así como editar mis fotos para resaltar su esencia. La fotografía me ha permitido conectar con personas increíbles y descubrir lugares únicos. Puedes ver algunas de mis capturas favoritas en mi Instagram, donde comparto regularmente mi trabajo fotográfico.
          </p>
          <div className="instagram-preview">
            <iframe
              src="https://www.instagram.com/p/CEsjjFsB-1fEh3gdzgChP-KI9mMaQ2g_iIR_6M0/embed"
              width="320"
              height="400"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              title="Instagram Preview"
            ></iframe>
            <p>
              <a href="https://www.instagram.com/tu_usuario/" target="_blank" rel="noopener noreferrer">
                Ver más en mi Instagram
              </a>
            </p>
          </div>
        
        </div>

              <div className="about-games-block">
          <h3>Videojuegos y experiencias digitales</h3>
          <p>
            Los videojuegos y las experiencias digitales siempre han sido una gran fuente de inspiración para mí. Me encanta explorar mundos virtuales, descubrir nuevas mecánicas y analizar cómo el diseño y la tecnología se combinan para crear emociones únicas en los jugadores. 
            <br /><br />
            Disfruto tanto jugar como desarrollar videojuegos, ya que considero que son una poderosa herramienta para contar historias, conectar personas y estimular la creatividad. Siempre estoy buscando nuevas experiencias interactivas que me permitan aprender y crecer tanto personal como profesionalmente.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;