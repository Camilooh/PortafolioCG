import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
   <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          CG
        </div>

      
        <div className="footer-info">
          <p className="footer-name">Camilo Gutiérrez</p>
          <p className="footer-role-location">Diseñador Interactivo ·Quito, Ecuador</p>
        </div>

        
        <div className="footer-socials">
          <a href="https://instagram.com/camilo_isaac3" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/Camilooh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/camilo-guti%C3%A9rrez-462133201/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

     
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Camilo Gutiérrez. Todos los derechos reservados.</p>
      </div>
    </footer>

  );
}


export default Footer;