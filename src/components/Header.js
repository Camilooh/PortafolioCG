import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'Sobre mí' },
];

function Header() {
  // En el inicio el header flota sobre la imagen del hero
  const overlay = useLocation().pathname === '/';

  return (
    <header className={`header${overlay ? ' header--overlay' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__brand" aria-label="Camilo Gutiérrez, ir al inicio">
          <span className="header__mark" aria-hidden="true">CG</span>
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
