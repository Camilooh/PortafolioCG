import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/"> <img src={require('../assets/images/LogoTexto.png')} alt="Logo" /></Link>
        <ul>
          <li><Link to="/about">Sobre mi</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;