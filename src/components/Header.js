import React from 'react';
import '../styles/Header.css'; // Assuming you will create a Header.css for styling

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Mi portafolio</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;