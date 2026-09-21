import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { getProjectBySlug } from '../data/projects';
import '../styles/Home.css';

const featured = ['neuronautas', 'dyst02pia', 'consistec-sa'].map(getProjectBySlug);

const stack = [
  { name: 'Desarrollo web', items: ['JavaScript', 'TypeScript', 'Angular', 'React', 'HTML y CSS'] },
  { name: 'Videojuegos', items: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Blueprints'] },
  { name: 'Diseño y contenido', items: ['Illustrator', 'Photoshop', 'Diseño gráfico', 'Redes sociales'] },
];

function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="home-hero">
        <img
          src={require('../assets/images/HomeNameIMG.jpg')}
          alt=""
          className="home-hero__bg"
        />
        <div className="home-hero__shade" />
        <div className="home-hero__content container">
          <p className="eyebrow">Camilo Gutiérrez — Quito, Ecuador</p>
          <h1 className="home-hero__title">Diseñador de medios interactivos y desarrollador.</h1>
          <div className="home-hero__ctas">
            <Link to="/portfolio" className="btn btn--primary">
              Ver proyectos <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link to="/contact" className="btn btn--ghost">Contactarme</Link>
          </div>
        </div>
      </section>

      {/* Trabajo seleccionado */}
      <section className="home-section container">
        <div className="home-section__head">
          <div>
            <p className="eyebrow">Trabajo seleccionado</p>
            <h2 className="home-section__title">Lo que he construido</h2>
          </div>
          <Link to="/portfolio" className="mono-link">Ver todos →</Link>
        </div>
        <div className="home-work">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="home-stack">
        <div className="home-stack__grid container">
          {stack.map((group) => (
            <div key={group.name} className="home-stack__group">
              <h3 className="home-stack__name">{group.name}</h3>
              <ul className="home-stack__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
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
          Cuéntame de tu app, juego o sitio web. También estoy en GitHub, LinkedIn e Instagram.
        </p>
        <Link to="/contact" className="mono-link">Ir a contacto →</Link>
      </section>
    </div>
  );
}

export default Home;
