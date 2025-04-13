import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><a href="/privacy">Política de Privacidad</a></li>
        <li><a href="/terms">Términos y Condiciones</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
      <p className="footer-text">© 2025 Camilo Gutiérrez. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;