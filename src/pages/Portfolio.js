import { useState } from 'react';
import '../styles/Portfolio.css';

const projects = [
  {
    title: 'Proyecto 1',
    image: require('../assets/images/Logo.png'),
    description: 'Descripción breve de tu primer proyecto. Explica de qué trata, qué tecnologías usaste y el objetivo principal.',
    tags: ['React', 'JavaScript', 'CSS'],
    category: 'Web',
    demo: 'https://enlace-a-tu-proyecto1.com',
    github: 'https://github.com/Camilooh/proyecto1',
  },
  {
    title: 'Proyecto 2',
    image: require('../assets/images/Logo.png'),
    description: 'Descripción breve de tu segundo proyecto. Explica de qué trata, qué tecnologías usaste y el objetivo principal.',
    tags: ['Unity', 'C#'],
    category: 'Videojuegos',
    demo: 'https://enlace-a-tu-proyecto2.com',
    github: 'https://github.com/Camilooh/proyecto2',
  },
  {
    title: 'Proyecto 3',
    image: require('../assets/images/Logo.png'),
    description: 'Descripción breve de tu tercer proyecto. Explica de qué trata, qué tecnologías usaste y el objetivo principal.',
    tags: ['Illustrator', 'Photoshop'],
    category: 'Diseño',
    demo: null,
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
};

const CATEGORIES = ['Todos', 'Web', 'Videojuegos', 'Diseño'];

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
                    <i className="fas fa-external-link-alt"></i> Ver demo
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
