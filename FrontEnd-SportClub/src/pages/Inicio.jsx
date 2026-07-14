import logo from "../assets/Logo-sport.png";
import { Link } from "react-router-dom";
import "../styles/landing.css";

function Inicio() {
  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo SportClub" className="logo" />
          <h1>SportClub</h1>
        </div>
        <nav>
          <Link to="/login">Ingresar</Link>
          <Link to="/registro">Registrarse</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h2>Tu mejor versión comienza hoy</h2>
          <p>Entrena, mejora y alcanza tus objetivos con SportClub.</p>
          <Link to="/registro" className="btn btn-primary">Comenzar ahora</Link>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="beneficios">
        <h2 className="section-title">Beneficios de SportClub</h2>
        <div className="beneficios-grid">
          <div className="beneficio-card"><div className="icon">💪</div><h3>Entrenamiento profesional</h3><p>Coaches preparados para ayudarte a lograr tus metas.</p></div>
          <div className="beneficio-card"><div className="icon">🏋️</div><h3>Equipamiento moderno</h3><p>Espacios diseñados para mejorar tu rendimiento.</p></div>
          <div className="beneficio-card"><div className="icon">🎯</div><h3>Metas personales</h3><p>Planes adaptados a tus objetivos deportivos.</p></div>
        </div>
      </section>

      {/* PLANES */}
      <section className="planes">
        <h2 className="section-title">Nuestros Planes</h2>
        <div className="planes-grid">
          <div className="plan-card"><h3>Básico</h3><div className="price">$19.990</div><ul><li>✔ Acceso gimnasio</li><li>✔ Uso máquinas</li><li>✔ Horario libre</li></ul></div>
          <div className="plan-card destacado"><span className="badge">Más elegido</span><h3>Premium</h3><div className="price">$29.990</div><ul><li>✔ Gimnasio</li><li>✔ Clases grupales</li><li>✔ Coach incluido</li></ul></div>
          <div className="plan-card"><h3>Elite</h3><div className="price">$39.990</div><ul><li>✔ Entrenamiento personalizado</li><li>✔ Seguimiento</li><li>✔ Plan nutricional</li></ul></div>
        </div>
      </section>

      {/* SOBRE CLUB */}
      <section className="sobre-club">
        <div className="about-section">
          <h3>Sobre SportClub</h3>
          <p>Somos un club deportivo enfocado en ayudarte a mejorar tu salud, rendimiento y calidad de vida.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>SportClub</h3>
        <p>Transformando vidas mediante el deporte.</p>
      </footer>
    </div>
  );
}

export default Inicio;