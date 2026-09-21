import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug, TAG_COLORS, DEFAULT_TAG_COLOR } from '../data/projects';
import '../styles/ProjectDetail.css';

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-detail__not-found">
          <h1>Proyecto no encontrado</h1>
          <p>El proyecto que buscas no existe o fue movido.</p>
          <Link to="/portfolio" className="project-detail__btn project-detail__btn--primary">
            <i className="fas fa-arrow-left"></i> Volver al portfolio
          </Link>
        </div>
      </div>
    );
  }

  const { title, image, description, tags, category, demo, github, appStore, playStore, detail = {} } = project;
  const { role, team, period, overview = [], contributions = [], challenges = [], learnings = [], gallery = [], links = [] } = detail;

  const meta = [
    { label: 'Rol', value: role },
    { label: 'Equipo', value: team },
    { label: 'Periodo', value: period },
    { label: 'Categoría', value: category },
  ].filter((m) => m.value);

  return (
    <div className="project-detail">
      <Link to="/portfolio" className="project-detail__back">
        <i className="fas fa-arrow-left"></i> Volver al portfolio
      </Link>

      <header className="project-detail__hero">
        <div className="project-detail__hero-text">
          <span className="project-detail__category">{category}</span>
          <h1 className="project-detail__title">{title}</h1>
          <p className="project-detail__lead">{description}</p>
          <div className="project-detail__tags">
            {tags.map((tag) => {
              const style = TAG_COLORS[tag] || DEFAULT_TAG_COLOR;
              return (
                <span key={tag} className="project-detail__tag" style={{ background: style.bg, color: style.color }}>
                  {tag}
                </span>
              );
            })}
          </div>
          <div className="project-detail__actions">
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="project-detail__btn project-detail__btn--primary">
                <i className="fas fa-external-link-alt"></i> Ver proyecto
              </a>
            )}
            {appStore && (
              <a href={appStore} target="_blank" rel="noopener noreferrer" className="project-detail__btn project-detail__btn--primary">
                <i className="fab fa-apple"></i> App Store
              </a>
            )}
            {playStore && (
              <a href={playStore} target="_blank" rel="noopener noreferrer" className="project-detail__btn project-detail__btn--ghost">
                <i className="fab fa-google-play"></i> Google Play
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="project-detail__btn project-detail__btn--ghost">
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="project-detail__btn project-detail__btn--ghost">
                <i className="fas fa-link"></i> {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="project-detail__hero-image">
          <img src={image} alt={title} />
        </div>
      </header>

      {meta.length > 0 && (
        <dl className="project-detail__meta">
          {meta.map((m) => (
            <div className="project-detail__meta-item" key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {overview.length > 0 && (
        <section className="project-detail__section">
          <h2>Sobre el proyecto</h2>
          {overview.map((p, i) => <p key={i}>{p}</p>)}
        </section>
      )}

      {contributions.length > 0 && (
        <section className="project-detail__section">
          <h2>Mi participación</h2>
          <ul className="project-detail__list">
            {contributions.map((c, i) => (
              <li key={i}>
                {typeof c === 'string' ? c : <><strong>{c.title}.</strong> {c.text}</>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {challenges.length > 0 && (
        <section className="project-detail__section">
          <h2>Retos y soluciones</h2>
          <ul className="project-detail__list">
            {challenges.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </section>
      )}

      {learnings.length > 0 && (
        <section className="project-detail__section">
          <h2>Aprendizajes</h2>
          <ul className="project-detail__list">
            {learnings.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="project-detail__section">
          <h2>Galería</h2>
          <div className="project-detail__gallery">
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
