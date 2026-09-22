import { Link } from 'react-router-dom';
import ProjectRow from '../components/ProjectRow';
import { getProjectBySlug } from '../data/projects';
import '../styles/Home.css';

const featured = ['neuronautas', 'dyst02pia', 'consistec-sa'].map(getProjectBySlug);

const areas = [
  { title: 'Desarrollo web', desc: 'JavaScript, TypeScript, Angular y React.' },
  { title: 'Videojuegos', desc: 'Unity y Unreal Engine — C#, C++ y Blueprints.' },
  { title: 'Diseño y contenido', desc: 'Identidad de marca con Illustrator y Photoshop.' },
];

const stack = ['JavaScript', 'TypeScript', 'React', 'Angular', 'Unity', 'Unreal Engine', 'C#', 'C++', 'Blueprints', 'Firebase', 'Illustrator', 'Photoshop'];

function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="home-hero container">
        <div className="home-hero__main">
          <p className="eyebrow">Camilo Gutiérrez — Quito, Ecuador</p>
          <h1 className="home-hero__title">Diseño y desarrollo experiencias digitales.</h1>
          <p className="home-hero__lead">
            Apps móviles, videojuegos y sitios web — desde el diseño hasta la publicación en las tiendas.
          </p>
          <div className="home-hero__ctas">
            <Link to="/portfolio" className="btn btn--primary">
              Ver proyectos <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/contact" className="btn btn--ghost">Contactarme</Link>
          </div>
        </div>
        <div className="home-hero__areas">
          {areas.map((a) => (
            <div key={a.title} className="home-hero__area">
              <span className="home-hero__area-title">{a.title}</span>
              <span className="home-hero__area-desc">{a.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="home-stack container">
        <span className="home-stack__label">Stack —</span>
        <div className="home-stack__list">
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      {/* Trabajo seleccionado */}
      <section className="home-section container">
        <div className="home-section__head">
          <div>
            <p className="eyebrow">Trabajo seleccionado</p>
            <h2 className="home-section__title">Casos de estudio</h2>
          </div>
          <Link to="/portfolio" className="mono-link">Ver todos los proyectos →</Link>
        </div>
        <div className="home-work">
          {featured.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="home-contact container">
        <p className="eyebrow">Contacto</p>
        <a href="mailto:camigutioba@gmail.com" className="home-contact__mail">
          camigutioba@gmail.com
        </a>
        <p className="home-contact__text">
          También estoy en GitHub, LinkedIn e Instagram.
        </p>
      </section>
    </div>
  );
}

export default Home;
