import '../styles/Footer.css';

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/camilo_isaac3' },
  { label: 'GitHub', href: 'https://github.com/Camilooh' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/camilo-guti%C3%A9rrez-462133201/' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__id">
          <p className="footer__name">Camilo Gutiérrez</p>
          <p className="footer__role">Diseñador Interactivo · Quito, Ecuador</p>
        </div>

        <nav className="footer__socials" aria-label="Redes">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">© {new Date().getFullYear()} Camilo Gutiérrez</p>
      </div>
    </footer>
  );
}

export default Footer;
