import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
       <div className="footer-logo-box">
        <img src={require('../assets/images/LogoNoText.png')} alt="Logo" />
        </div>
       <div className="footer-text-container">
          <p className="footer-text">Camilo Gutiérrez</p>
          <p className="footer-text">Diseñador Interactivo y Desarrollador</p>
           <p className="footer-text">Quito, Ecuador</p>
        </div>
        <ul className="footer-links">
          <li><a href="/">Inicio</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
}


export default Footer;