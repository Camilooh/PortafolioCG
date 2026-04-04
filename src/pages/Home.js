import { Link } from 'react-router-dom';
import '../styles/Home.css';

import jsLogo from '../assets/skills/js.png';
import reactLogo from '../assets/skills/react.png';
import cssLogo from '../assets/skills/css.png';
import htmlLogo from '../assets/skills/html.png';
import unityLogo from '../assets/skills/unity.png';
import unrealLogo from '../assets/skills/unreal.png';
import csharpLogo from '../assets/skills/Csharp.png';
import CplusplusLogo from '../assets/skills/C++.png';

const skills = [
  { name: 'JavaScript',    logo: jsLogo },
  { name: 'React',         logo: reactLogo },
  { name: 'CSS',           logo: cssLogo },
  { name: 'HTML',          logo: htmlLogo },
  { name: 'Unity',         logo: unityLogo },
  { name: 'Unreal Engine', logo: unrealLogo },
  { name: 'C#',            logo: csharpLogo },
  { name: 'C++',           logo: CplusplusLogo },
];

const infiniteSkills = [...skills, ...skills];

const specialties = [
  {
    icon: 'fas fa-code',
    title: 'Desarrollo Web',
    description: 'Aplicaciones y sitios web con JavaScript, TypeScript, Angular y React. Enfoque en rendimiento, accesibilidad y buenas prácticas.',
    bg: '#e8f4fd',
    color: '#0a6ebd',
  },
  {
    icon: 'fas fa-gamepad',
    title: 'Videojuegos',
    description: 'Desarrollo de juegos con Unity y Unreal Engine usando C#, C++ y Blueprints. Desde prototipos hasta productos completos.',
    bg: '#f0eafd',
    color: '#7c3aed',
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'Diseño & Contenido',
    description: 'Diseño gráfico con Adobe Illustrator y Photoshop. Creación de contenido visual para redes sociales y plataformas digitales.',
    bg: '#fef9e7',
    color: '#b8860b',
  },
];

function Home() {
  return (
    <div className="home-page">

      {/* Hero */}
      <section className="home-hero">
        <img
          src={require('../assets/images/HomeNameIMG.jpg')}
          alt="Background"
          className="home-hero__bg"
        />
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <h1 className="home-hero__name">Camilo Gutiérrez</h1>
          <p className="home-hero__subtitle">
            Diseñador de Medios Interactivos &amp; Desarrollador
          </p>
          <div className="home-hero__ctas">
            <Link to="/portfolio" className="home-hero__btn home-hero__btn--primary">
              <i className="fas fa-folder-open"></i> Ver proyectos
            </Link>
            <Link to="/contact" className="home-hero__btn home-hero__btn--ghost">
              <i className="fas fa-paper-plane"></i> Contactarme
            </Link>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="home-section">
        <h2 className="home-section__title">¿Qué hago?</h2>
        <div className="home-specialties">
          {specialties.map((s) => (
            <div key={s.title} className="home-specialty-card" style={{ background: s.bg }}>
              <div className="home-specialty-card__icon" style={{ color: s.color }}>
                <i className={s.icon}></i>
              </div>
              <h3 className="home-specialty-card__title" style={{ color: s.color }}>
                {s.title}
              </h3>
              <p className="home-specialty-card__desc">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills carousel */}
      <section className="home-section">
        <h2 className="home-section__title">Tecnologías</h2>
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
      </section>

      {/* CTA final */}
      <section className="home-cta-banner">
        <h2 className="home-cta-banner__title">¿Tienes un proyecto en mente?</h2>
        <p className="home-cta-banner__sub">
          Estoy disponible para nuevas oportunidades y colaboraciones.
        </p>
        <Link to="/contact" className="home-cta-banner__btn">
          <i className="fas fa-envelope"></i> Hablemos
        </Link>
      </section>

    </div>
  );
}

export default Home;
