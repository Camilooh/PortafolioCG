import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects, CATEGORIES } from '../data/projects';
import '../styles/Portfolio.css';

// Proyectos que se muestran en grande cuando el filtro es "Todos"
const FEATURED_SLUGS = ['neuronautas', 'dyst02pia'];

const countIn = (category) =>
  category === 'Todos' ? projects.length : projects.filter((p) => p.category === category).length;

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filtered = activeFilter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const featured = activeFilter === 'Todos'
    ? filtered.filter((p) => FEATURED_SLUGS.includes(p.slug))
    : [];
  const rest = filtered.filter((p) => !featured.includes(p));

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero container">
        <div>
          <p className="eyebrow">Portfolio · {projects.length} proyectos</p>
          <h1 className="portfolio-hero__title">Proyectos</h1>
        </div>
        <p className="portfolio-hero__lead">
          Cada proyecto tiene su propia página donde explico con detalle mi participación.
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
        {featured.length > 0 && (
          <div className="portfolio-featured">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        )}

        <div className="portfolio-grid">
          {rest.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="portfolio-empty">No hay proyectos en esta categoría aún.</p>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
