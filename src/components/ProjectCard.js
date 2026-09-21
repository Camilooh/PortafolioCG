import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

// Tarjeta de proyecto (portfolio e inicio). Toda la tarjeta enlaza a la página de detalle.
function ProjectCard({ project, featured = false }) {
  const { slug, title, image, imageFit, imageBg, category, tags, description, detail = {} } = project;
  const summary = detail.summary || detail.role;

  return (
    <Link to={`/portfolio/${slug}`} className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <div className="project-card__media" style={imageBg ? { background: imageBg } : undefined}>
        <img src={image} alt="" style={imageFit ? { objectFit: imageFit } : undefined} />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__category">{category}</span>
          <span className="project-card__tags">{(featured ? tags : tags.slice(0, 3)).join(' · ')}</span>
        </div>
        <h3 className="project-card__title">{title}</h3>

        {featured && <p className="project-card__desc">{description}</p>}

        {featured ? (
          <div className="project-card__foot">
            <span>{summary}</span>
            <span className="project-card__more">Ver detalle →</span>
          </div>
        ) : (
          summary && <p className="project-card__summary">{summary}</p>
        )}
      </div>
    </Link>
  );
}

export default ProjectCard;
