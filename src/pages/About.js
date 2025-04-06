import React from 'react';
import '../styles/Portfolio.css';
function About() {
  return (
    <div className="About">
        <div className="description">
          <p>
            Tengo experiencia en el mundo del entretenimiento audiovisual y el diseño digital. Manejo herramientas de Adobe como Illustrator, Photoshop, After Effects y Premiere, así como software de diseño UX/UI como Figma.
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