import { Link } from 'react-router-dom';
import '../styles/ProjectRow.css';

// Fila de proyecto usada en Inicio ("Casos de estudio") y en Portfolio (índice completo).
function ProjectRow({ project, index }) {
  const { slug, title, image, imageFit, imageBg, category, tags, detail = {} } = project;
  const summary = detail.summary || detail.role;

  return (
    <Link to={`/portfolio/${slug}`} className="project-row">
      <span className="project-row__index">{String(index).padStart(2, '0')}</span>
      <div className="project-row__body">
        <h3 className="project-row__title">{title}</h3>
        <span className="project-row__meta">
          {category}
          {summary ? ` · ${summary}` : ''}
        </span>
      </div>
      <span className="project-row__tags">{tags.slice(0, 3).join(' · ')}</span>
      <div className="project-row__media" style={imageBg ? { background: imageBg } : undefined}>
        <img src={image} alt="" style={imageFit ? { objectFit: imageFit } : undefined} />
      </div>
    </Link>
  );
}

export default ProjectRow;
