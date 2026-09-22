import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'Sobre mí' },
];

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__brand" aria-label="Camilo Gutiérrez, ir al inicio">
          <span className="header__mark" aria-hidden="true"></span>
          <span className="header__name">Camilo Gutiérrez</span>
        </Link>
        <nav className="header__nav" aria-label="Principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `header__link${isActive ? ' header__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="header__cta">Contacto</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
