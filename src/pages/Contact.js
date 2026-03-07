import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:camigutioba@gmail.com?subject=${encodeURIComponent(subject || 'Contacto desde portafolio')}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const contactItems = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'camigutioba@gmail.com',
      href: 'mailto:camigutioba@gmail.com',
      colorClass: 'contact-card--email',
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'https://github.com/Camilooh',
      href: 'https://github.com/Camilooh',
      colorClass: 'contact-card--github',
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/camilo-gutiérrez-462133201',
      href: 'https://www.linkedin.com/in/camilo-gutiérrez-462133201',
      colorClass: 'contact-card--linkedin',
    },
    {
      icon: 'fab fa-instagram',
      label: 'Instagram',
      value: '@camilo_isaac3',
      href: 'https://www.instagram.com/camilo_isaac3/',
      colorClass: 'contact-card--instagram',
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Ubicacion',
      value: 'Quito, Ecuador',
      href: null,
      colorClass: 'contact-card--location',
    },
    {
      icon: 'fas fa-briefcase',
      label: 'Disponibilidad',
      value: 'Disponible para trabajo',
      href: null,
      colorClass: 'contact-card--availability',
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1 className="contact-hero__title">Contacto</h1>
        <p className="contact-hero__subtitle">
          Estoy disponible para nuevos proyectos y colaboraciones. No dudes en escribirme.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-cards">
          {contactItems.map((item) => (
            <div key={item.label} className={`contact-card ${item.colorClass}`}>
              <div className="contact-card__icon">
                <i className={item.icon}></i>
              </div>
              <div className="contact-card__info">
                <span className="contact-card__label">{item.label}</span>
                {item.href ? (
                  <a
                    className="contact-card__value"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="contact-card__value">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-form-wrapper">
          <h2 className="contact-form__title">Enviar mensaje</h2>
          {submitted ? (
            <div className="contact-form__success">
              Mensaje preparado. Revisa tu cliente de correo para enviarlo.
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact-form__field">
                <label htmlFor="subject">Asunto</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Asunto del mensaje"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Escribe tu mensaje aqui..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="contact-form__submit" type="submit">
                <i className="fas fa-paper-plane"></i> Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
