import React from 'react';
import '../styles/Portfolio.css';

function Home() {
  return (
    <div className="Home">
      <div className="intro">
        <div className="background-image">
          <h1>Camilo Gutiérrez</h1>
          <h2>Diseñador de Medios Interactivos y Desarrollador</h2>
        </div>
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
      </div>
    </div>
  );
}

export default Home;