import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, TAG_COLORS, DEFAULT_TAG_COLOR, CATEGORIES } from '../data/projects';
import '../styles/Portfolio.css';

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
        {filtered.map((project) => (
          <div className="project-card" key={project.slug}>
            <div className="project-card__image-wrapper">
              <Link to={`/portfolio/${project.slug}`} className="project-card__image-link" aria-label={`Ver detalle de ${project.title}`}>
                <img src={project.image} alt={project.title} className="project-card__image" />
              </Link>
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
                <h2 className="project-card__title">
                  <Link to={`/portfolio/${project.slug}`}>{project.title}</Link>
                </h2>
                <span className="project-card__category">{project.category}</span>
              </div>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => {
                  const style = TAG_COLORS[tag] || DEFAULT_TAG_COLOR;
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
              <Link to={`/portfolio/${project.slug}`} className="project-card__more">
                Más Detalles <i className="fas fa-arrow-right"></i>
              </Link>
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
