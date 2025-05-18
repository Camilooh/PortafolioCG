import React from 'react';
import '../styles/Portfolio.css';


import jsLogo from '../assets/skills/js.png';
import reactLogo from '../assets/skills/react.png';
import cssLogo from '../assets/skills/css.png';
import htmlLogo from '../assets/skills/html.png';
import unityLogo from '../assets/skills/unity.png';
import unrealLogo from '../assets/skills/unreal.png';
import csharpLogo from '../assets/skills/Csharp.png';
import CplusplusLogo from '../assets/skills/C++.png';


const skills = [
  { name: 'JavaScript', logo: jsLogo },
  { name: 'React', logo: reactLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'HTML', logo: htmlLogo },
  { name: 'Unity', logo: unityLogo },
  { name: 'Unreal Engine', logo: unrealLogo },
  { name: 'C#', logo: csharpLogo },
  { name: 'C ++', logo: CplusplusLogo },
  
];


const infiniteSkills = [...skills, ...skills];

function Home() {
  return (
    <div className="Home">
      <div className="intro">
        <div className="background-image">
          <img src={require('../assets/images/HomeNameIMG.jpg')} alt="Background" />
          <div className="text-overlay">
            <h1>Camilo Gutiérrez</h1>
            <h2>Diseñador de Medios Interactivos y Desarrollador</h2>
          </div>
        </div>
        <div className="description-title">
          <h1>Mi trabajo</h1>
        </div>
        <div className="description-container">
          <div className="description-image">
            <img src={require('../assets/images/workIMG.jpg')} alt="Work" />
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
        
        <div className="carousel-container">
          <div className="carousel-track">
            {infiniteSkills.map((skill, idx) => (
              <div className="skill-logo" key={skill.name + idx}>
                <img src={skill.logo} alt={skill.name} title={skill.name} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;