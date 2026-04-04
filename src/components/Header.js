import React from 'react';
import '../styles/Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <a href="/"> <img src={require('../assets/images/LogoTexto.png')} alt="Logo" /></a>
        <ul>
          <li><a href="/about">Sobre mi</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contacto</a></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;