import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/forms.css";

function RecuperarContrasena() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("El correo es obligatorio");
      return;
    }
    try {
      await axios.post("http://localhost:3000/api/auth/recover", { email });
      setSuccess("Se ha enviado un enlace a tu correo ✅");
      setError("");
    } catch (err) {
      setError("Error al enviar enlace ❌");
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h1>SportClub</h1>
            <p>Recuperar Contraseña</p>
          </div>

          <form className="recuperar-form" onSubmit={handleSubmit}>
            <p className="form-description">
              Ingresa tu correo electrónico y te enviaremos un enlace para recuperar tu contraseña.
            </p>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            {error && <span className="error-message">{error}</span>}
            {success && <span className="success-message">{success}</span>}
            <div className="form-actions">
              <button className="btn btn-primary btn-block" type="submit">Enviar Enlace</button>
            </div>
          </form>

          <div className="form-links">
            <Link to="/login">← Volver al Login</Link>
          </div>
          <div className="form-footer">
            <Link to="/">Ir al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecuperarContrasena;