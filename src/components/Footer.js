import React from 'react';

function Footer() {
  return (
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} Camilo Gutiérrez. All rights reserved.</p>
      <a href="/about" className="Footer-link">About</a>
      <a href="/portfolio" className="Footer-link">Portfolio</a>
    </footer>
  );
}

export default Footer;