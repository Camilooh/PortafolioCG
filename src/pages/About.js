import { Link } from 'react-router-dom';
import myPhoto from '../assets/images/myPhoto.jpg';
import instagramPhoto from '../assets/about/MyPhoto.jpg';
import '../styles/About.css';

const skills = [
  {
    category: 'Desarrollo Web',
    color: '#0a6ebd',
    bg: '#e8f4fd',
    items: ['JavaScript', 'TypeScript', 'Angular', 'React', 'HTML', 'CSS'],
  },
  {
    category: 'Videojuegos',
    color: '#1d6c1d',
    bg: '#eaf3e8',
    items: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Blueprints'],
  },
  {
    category: 'Diseño & Contenido',
    color: '#b8860b',
    bg: '#fef9e7',
    items: ['Illustrator', 'Photoshop', 'Redes Sociales', 'Diseño Gráfico'],
  },
];

const interests = [
  {
    icon: 'fas fa-camera',
    label: 'Fotografía',
    description: 'Paisajes, retratos urbanos y luz natural. Comparto mi trabajo en Instagram.',
    bg: '#eaf6fa',
    color: '#0a6ebd',
    link: 'https://www.instagram.com/camilo_isaac3/',
    linkLabel: '@camilo_isaac3',
  },
  {
    icon: 'fas fa-gamepad',
    label: 'Videojuegos',
    description: 'Jugarlos y desarrollarlos. Aventuras, estrategia y simulación.',
    bg: '#f0eafd',
    color: '#7c3aed',
    link: null,
    linkLabel: null,
  },
  {
    icon: 'fas fa-leaf',
    label: 'Naturaleza',
    description: 'Disfrutar del aire libre y los espacios naturales.',
    bg: '#eaf3e8',
    color: '#1d6c1d',
    link: null,
    linkLabel: null,
  },
  {
    icon: 'fas fa-music',
    label: 'Música',
    description: 'Compañera constante en el trabajo y el ocio.',
    bg: '#fef9e7',
    color: '#b8860b',
    link: null,
    linkLabel: null,
  },
];

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <img src={myPhoto} alt="Camilo Gutiérrez" className="about-hero__photo" />
        <h1 className="about-hero__name">Camilo Gutiérrez</h1>
        <p className="about-hero__title">Desarrollador Web · Game Developer · Diseñador</p>
        <p className="about-hero__location">
          <i className="fas fa-map-marker-alt"></i> Quito, Ecuador
        </p>
      </section>

      {/* Bio */}
      <section className="about-section about-bio">
        <h2 className="about-section__title">Sobre mí</h2>
        <p>
          Soy graduado de Medios Interactivos en la Universidad San Francisco de Quito (2022).
          Desde entonces he trabajado en desarrollo web, videojuegos y diseño gráfico, con
          pasión por crear experiencias interactivas y visuales que cautiven a los usuarios.
        </p>
        <p>
          También tengo experiencia en la creación de contenido para redes sociales y
          plataformas digitales, combinando criterio técnico con visión creativa.
        </p>
      </section>

      {/* Skills */}
      <section className="about-section">
        <h2 className="about-section__title">Habilidades</h2>
        <div className="about-skills">
          {skills.map((group) => (
            <div key={group.category} className="about-skills__group">
              <h3 className="about-skills__group-title" style={{ color: group.color }}>
                {group.category}
              </h3>
              <div className="about-skills__tags">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="about-skills__tag"
                    style={{ background: group.bg, color: group.color }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intereses */}
      <section className="about-section">
        <h2 className="about-section__title">Intereses</h2>
        <div className="about-interests">
          {interests.map((item) => (
            <div key={item.label} className="about-interest-card" style={{ background: item.bg }}>
              <div className="about-interest-card__icon" style={{ color: item.color }}>
                <i className={item.icon}></i>
              </div>
              <h3 className="about-interest-card__label">{item.label}</h3>
              <p className="about-interest-card__desc">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-interest-card__link"
                  style={{ color: item.color }}
                >
                  {item.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Preview Instagram */}
        <div className="about-instagram">
          <img src={instagramPhoto} alt="Fotografía de Camilo" className="about-instagram__img" />
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <Link to="/portfolio" className="about-cta__btn about-cta__btn--primary">
          <i className="fas fa-folder-open"></i> Ver proyectos
        </Link>
        <Link to="/contact" className="about-cta__btn about-cta__btn--ghost">
          <i className="fas fa-paper-plane"></i> Contactarme
        </Link>
      </section>

    </div>
  );
}

export default About;
