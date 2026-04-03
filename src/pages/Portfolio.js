import { useState } from 'react';
import '../styles/Portfolio.css';

const projects = [
  // --- Web ---
  {
    title: 'PortafolioCG',
    image: require('../assets/images/Logo.png'),
    description: 'Portafolio personal desarrollado con React. Diseño moderno y responsivo que muestra mis proyectos, habilidades y formas de contacto.',
    tags: ['React', 'JavaScript', 'CSS'],
    category: 'Web',
    demo: 'https://camilooh.github.io/PortafolioCG',
    github: 'https://github.com/Camilooh/PortafolioCG',
  },
  {
    title: 'Consistec S.A',
    image: require('../assets/images/Logo.png'),
    description: 'Diseño de página web estática para una empresa dedicada a la construcción de Centros de Procesamiento de Datos y de Telecomunicaciones.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    category: 'Web',
    demo: 'https://www.consistecsa.com',
    github: null,
  },
  // --- Apps ---
  {
    title: 'Neuronautas',
    image: require('../assets/images/Logo.png'),
    description: 'Aplicacion móvil para Android e iOS con actividades de enseñanza para niños. Aplicación de refuerzo educativo con minijuegos y videos.',
    tags: ['Unity', 'C#', 'Firebase'],
    category: 'Apps',
    demo: null,
    appStore: 'https://apps.apple.com/ec/app/neuronautas/id6753188244',
    playStore: 'https://play.google.com/store/apps/details?id=com.DefaultCompany.Neuri&pcampaignid=web_share',
    github: null,
  },
  // --- Videojuegos ---
  {
    title: 'Dyst02pia',
    image: require('../assets/images/Logo.png'),
    description: 'Juego en primera persona con narrativa distópica ambientado en un mundo post-apocalíptico. Trabajo conjunto realizado en Unreal Engine junto a compañeros del diplomado en diseño de videojuegos. Mi rol fue el de programador de sonido y ambiente.',
    tags: ['Unreal', 'C++', 'Blueprints'],
    category: 'Videojuegos',
    demo: 'https://chaosmonkeystudios.itch.io/dysto2pia',
    github: null,
  },
  {
    title: 'Unreal-Shooter',
    image: require('../assets/images/Logo.png'),
    description: 'Concepto de shooter en primera persona desarrollado en Unreal Engine. Sin gráficos personalizados, el enfoque principal fue la programación de mecánicas de disparo, enemigos y sistema de salud usando C++ únicamente.',
    tags: ['Unreal', 'C++'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/Unreal-Shooter',
  },
  {
    title: 'FPShooter-Unreal-BP',
    image: require('../assets/images/Logo.png'),
    description: 'FPS shooter básico desarrollado en Unreal Engine usando Blueprints. Incluye mecánicas de disparo, recarga, salud y enemigos con IA simple.',
    tags: ['Unreal', 'Blueprints'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/FPShooter-Unreal-BP',
  },
  {
    title: 'Angry Pixels',
    image: require('../assets/images/Logo.png'),
    description: 'Juego 2D desarrollado en Unity inspirado en el clásico Angry Birds. Mecánica de lanzamiento de personajes con física realista.',
    tags: ['Unity', 'C#'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/Angry-Pixels',
  },
  {
    title: 'City Disorder',
    image: require('../assets/images/Logo.png'),
    description: 'Runner infinito con generación procedural de obstáculos, sistema de puntuación y dificultad escalable. Optimizado para móviles.',
    tags: ['Unity', 'C#'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/City-Disorder',
  },
  {
    title: 'Slimy-Woods',
    image: require('../assets/images/Logo.png'),
    description: 'Demo hecho en Unity de un plataformero 2D en el que se experimentan con diferentes mecánicas de juego.',
    tags: ['Unity', 'C#'],
    category: 'Videojuegos',
    demo: null,
    github: 'https://github.com/Camilooh/Slimy-Woods',
  },
  // --- Diseño ---
  {
    title: 'Manual de Marca - Consistec S.A',
    image: require('../assets/images/Logo.png'),
    description: 'Desarrollo de un Manual de Identidad Corporativa. Uso del stack de adobe, específicamente Illustrator y Photoshop para la creación de logotipo, paleta de colores, tipografía y aplicaciones de marca.',
    tags: ['Illustrator', 'Photoshop'],
    category: 'Diseño',
    demo: 'https://drive.google.com/file/d/1TrFZOYKf4IANdOeycwPoXz3XsAw8ItEB/view?usp=sharing',
    github: null,
  },
  {
    title: 'Manual de Marca - Estudia Inteligente',
    image: require('../assets/images/Logo.png'),
    description: 'Desarrollo de un Manual de Identidad Corporativa. Uso del stack de adobe, específicamente Illustrator y Photoshop para la creación de logotipo, paleta de colores, tipografía y aplicaciones de marca.',
    tags: ['Illustrator', 'Photoshop'],
    category: 'Diseño',
    demo: 'https://drive.google.com/file/d/1KORkPI7SJAzsfrVQ6XfQbHUkgqqDdAPY/view?usp=sharing',
    github: null,
  },
];

const TAG_COLORS = {
  React:       { bg: '#e8f4fd', color: '#0a6ebd' },
  JavaScript:  { bg: '#fef9e7', color: '#b8860b' },
  TypeScript:  { bg: '#eaf3ff', color: '#3178c6' },
  CSS:         { bg: '#f3eaff', color: '#7c3aed' },
  HTML:        { bg: '#fff0ea', color: '#e34c26' },
  Angular:     { bg: '#fdeaea', color: '#dd0031' },
  Unity:       { bg: '#f0f0f0', color: '#222' },
  'C#':        { bg: '#eaf3e8', color: '#1d6c1d' },
  'C++':       { bg: '#f3eaff', color: '#004482' },
  Unreal:      { bg: '#fdeaea', color: '#0e1128' },
  Illustrator: { bg: '#fff4e5', color: '#ff7c00' },
  Photoshop:   { bg: '#e8f0fe', color: '#001e36' },
  Firebase:    { bg: '#fff8e1', color: '#f57c00' },
  Blueprints:  { bg: '#e8eaff', color: '#2d3aad' },
};

const CATEGORIES = ['Todos', 'Web', 'Apps', 'Videojuegos', 'Diseño'];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <h1 className="portfolio-hero__title">Mis Proyectos</h1>
        <p className="portfolio-hero__subtitle">
          Una seleccion de mis trabajos en desarrollo web, videojuegos y diseño.
        </p>
      </div>

      <div className="portfolio-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`portfolio-filter-btn${activeFilter === cat ? ' portfolio-filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-card__image-wrapper">
              <img src={project.image} alt={project.title} className="project-card__image" />
              <div className="project-card__overlay">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__overlay-btn">
                    <i className="fas fa-external-link-alt"></i> Ver
                  </a>
                )}
                {project.appStore && (
                  <a href={project.appStore} target="_blank" rel="noopener noreferrer" className="project-card__overlay-btn">
                    <i className="fab fa-apple"></i> App Store
                  </a>
                )}
                {project.playStore && (
                  <a href={project.playStore} target="_blank" rel="noopener noreferrer" className="project-card__overlay-btn project-card__overlay-btn--ghost">
                    <i className="fab fa-google-play"></i> Google Play
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__overlay-btn project-card__overlay-btn--ghost">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                )}
              </div>
            </div>

            <div className="project-card__body">
              <div className="project-card__header">
                <h2 className="project-card__title">{project.title}</h2>
                <span className="project-card__category">{project.category}</span>
              </div>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => {
                  const style = TAG_COLORS[tag] || { bg: '#f0f0f0', color: '#555' };
                  return (
                    <span
                      key={tag}
                      className="project-card__tag"
                      style={{ background: style.bg, color: style.color }}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="portfolio-empty">No hay proyectos en esta categoria aun.</p>
      )}
    </div>
  );
}

export default Portfolio;
