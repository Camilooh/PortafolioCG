import { Link } from 'react-router-dom';
import myPhoto from '../assets/images/myPhoto.jpg';
import instagramPhoto from '../assets/about/MyPhoto.jpg';
import '../styles/About.css';

const skills = [
  {
    category: 'Desarrollo web',
    items: ['JavaScript', 'TypeScript', 'Angular', 'React', 'HTML', 'CSS'],
  },
  {
    category: 'Videojuegos',
    items: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Blueprints'],
  },
  {
    category: 'Diseño y contenido',
    items: ['Illustrator', 'Photoshop', 'Redes sociales', 'Diseño gráfico'],
  },
];

const interests = [
  {
    icon: 'fas fa-camera',
    label: 'Fotografía',
    description: 'Paisajes, retratos urbanos y luz natural. Comparto mi trabajo en Instagram.',
    link: 'https://www.instagram.com/camilo_isaac3/',
    linkLabel: '@camilo_isaac3',
  },
  {
    icon: 'fas fa-gamepad',
    label: 'Videojuegos',
    description: 'Jugarlos y desarrollarlos. Aventuras, estrategia y simulación.',
  },
  {
    icon: 'fas fa-leaf',
    label: 'Naturaleza',
    description: 'Disfrutar del aire libre y los espacios naturales.',
  },
  {
    icon: 'fas fa-music',
    label: 'Música',
    description: 'Compañera constante en el trabajo y el ocio.',
  },
];

function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero container">
        <img src={myPhoto} alt="Camilo Gutiérrez" className="about-hero__photo" />
        <div className="about-hero__text">
          <p className="eyebrow">Sobre mí</p>
          <h1 className="about-hero__name">Camilo Gutiérrez</h1>
          <p className="about-hero__title">Desarrollador Web · Game Developer · Diseñador</p>
          <p className="about-hero__location">
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Quito, Ecuador
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="about-section container">
        <h2 className="about-section__title">Trayectoria</h2>
        <div className="about-bio">
          <p>
            Soy graduado de Medios Interactivos en la Universidad San Francisco de Quito (2022).
            Desde entonces he trabajado en desarrollo web, videojuegos y diseño gráfico, con
            pasión por crear experiencias interactivas y visuales que cautiven a los usuarios.
          </p>
          <p>
            También tengo experiencia en la creación de contenido para redes sociales y
            plataformas digitales, combinando criterio técnico con visión creativa.
          </p>
        </div>
      </section>

      {/* Habilidades */}
      <section className="about-section container">
        <h2 className="about-section__title">Habilidades</h2>
        <div className="about-skills">
          {skills.map((group) => (
            <div key={group.category} className="about-skills__group">
              <h3 className="about-skills__name">{group.category}</h3>
              <ul className="about-skills__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Intereses */}
      <section className="about-section container">
        <h2 className="about-section__title">Intereses</h2>
        <div>
          <div className="about-interests">
            {interests.map((item) => (
              <div key={item.label} className="about-interest">
                <i className={`${item.icon} about-interest__icon`} aria-hidden="true"></i>
                <h3 className="about-interest__label">{item.label}</h3>
                <p className="about-interest__desc">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-interest__link"
                  >
                    {item.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
          <img src={instagramPhoto} alt="Fotografía de Camilo" className="about-instagram" />
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta container">
        <Link to="/portfolio" className="btn btn--primary">
          Ver proyectos <i className="fas fa-arrow-right" aria-hidden="true"></i>
        </Link>
        <Link to="/contact" className="btn btn--ghost">Contactarme</Link>
      </section>
    </div>
  );
}

export default About;
