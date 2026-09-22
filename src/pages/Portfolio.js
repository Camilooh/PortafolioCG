import { useState } from 'react';
import ProjectRow from '../components/ProjectRow';
import { projects, CATEGORIES } from '../data/projects';
import '../styles/Portfolio.css';

const countIn = (category) =>
  category === 'Todos' ? projects.length : projects.filter((p) => p.category === category).length;

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero container">
        <h1 className="portfolio-hero__title">Proyectos</h1>
        <p className="portfolio-hero__lead">
          Web, apps, videojuegos y diseño. Cada uno con su propia página de detalle.
        </p>
      </section>

      <div className="portfolio-filters container" role="group" aria-label="Filtrar por categoría">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`portfolio-filter${activeFilter === cat ? ' portfolio-filter--active' : ''}`}
            aria-pressed={activeFilter === cat}
            onClick={() => setActiveFilter(cat)}
          >
            {cat} · {countIn(cat)}
          </button>
        ))}
      </div>

      <div className="portfolio-list container">
        {filtered.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i + 1} />
        ))}

        {filtered.length === 0 && (
          <p className="portfolio-empty">No hay proyectos en esta categoría aún.</p>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
