import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import '../styles/ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="pd container">
        <div className="pd-missing">
          <h1>Proyecto no encontrado</h1>
          <p>El proyecto que buscas no existe o fue movido.</p>
          <Link to="/portfolio" className="btn btn--primary">
            <i className="fas fa-arrow-left" aria-hidden="true"></i> Volver al portfolio
          </Link>
        </div>
      </div>
    );
  }

  const { title, image, imageFit, imageBg, description, tags, category, demo, github, appStore, playStore, detail = {} } = project;
  const { role, team, period, overview = [], contributions = [], challenges = [], learnings = [], gallery = [], links = [] } = detail;

  const meta = [
    { label: 'Rol', value: role },
    { label: 'Equipo', value: team },
    { label: 'Periodo', value: period },
    { label: 'Categoría', value: category },
  ].filter((m) => m.value);

  const renderItems = (items) => (
    <ul className="pd-list">
      {items.map((item, i) => (
        <li key={i} className="pd-list__item">
          {typeof item === 'string' ? (
            <p className="pd-list__text pd-list__text--full">{item}</p>
          ) : (
            <>
              <h3 className="pd-list__title">{item.title}</h3>
              <p className="pd-list__text">{item.text}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="pd container">
      <Link to="/portfolio" className="pd-back mono-link">
        <i className="fas fa-arrow-left" aria-hidden="true"></i> Todos los proyectos
      </Link>

      <header className="pd-hero">
        <div className="pd-hero__text">
          <p className="eyebrow">{category}</p>
          <h1 className="pd-hero__title">{title}</h1>
          <p className="pd-hero__lead">{description}</p>
          <ul className="pd-tags" aria-label="Tecnologías">
            {tags.map((tag) => (
              <li key={tag} className="pd-tag">{tag}</li>
            ))}
          </ul>
          <div className="pd-actions">
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <i className="fas fa-external-link-alt" aria-hidden="true"></i> Ver proyecto
              </a>
            )}
            {appStore && (
              <a href={appStore} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <i className="fab fa-apple" aria-hidden="true"></i> App Store
              </a>
            )}
            {playStore && (
              <a href={playStore} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <i className="fab fa-google-play" aria-hidden="true"></i> Google Play
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <i className="fab fa-github" aria-hidden="true"></i> GitHub
              </a>
            )}
            {links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                <i className="fas fa-link" aria-hidden="true"></i> {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pd-hero__media" style={imageBg ? { background: imageBg } : undefined}>
          <img src={image} alt={title} style={imageFit ? { objectFit: imageFit } : undefined} />
        </div>
      </header>

      {meta.length > 0 && (
        <dl className="pd-meta">
          {meta.map((m) => (
            <div className="pd-meta__item" key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {overview.length > 0 && (
        <section className="pd-section">
          <h2>Sobre el proyecto</h2>
          <div className="pd-prose">
            {overview.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>
      )}

      {contributions.length > 0 && (
        <section className="pd-section">
          <h2>Mi participación</h2>
          {renderItems(contributions)}
        </section>
      )}

      {challenges.length > 0 && (
        <section className="pd-section">
          <h2>Retos y soluciones</h2>
          {renderItems(challenges)}
        </section>
      )}

      {learnings.length > 0 && (
        <section className="pd-section">
          <h2>Aprendizajes</h2>
          {renderItems(learnings)}
        </section>
      )}

      {gallery.length > 0 && (
        <section className="pd-section">
          <h2>Galería</h2>
          <div className="pd-gallery">
            {gallery.map((g, i) => (
              <figure key={i}>
                <img src={g.src} alt={g.caption || `${title} ${i + 1}`} />
                {g.caption && <figcaption>{g.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ProjectDetail;
