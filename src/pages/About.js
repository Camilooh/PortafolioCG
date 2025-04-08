import React from 'react';
import '../styles/Portfolio.css';
function About() {
  return (
    <div className="About">
        <div className="description">
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
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me at: <a href="mailto:your-email@example.com">your-email@example.com</a>
      </p>
    </div>
  );
}

export default About;