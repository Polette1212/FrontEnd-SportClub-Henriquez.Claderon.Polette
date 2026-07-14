import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import "../styles/forms.css";

function Registro() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !email || !password || !confirmar) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (password !== confirmar) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      const res = await register({ name: nombre, email, password });
      setSuccess("Usuario registrado con éxito ✅");
      setError("");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError("Error al registrar usuario ❌");
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h1>SportClub</h1>
            <p>Únete a nuestra comunidad</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Confirmar Contraseña</label>
              <input type="password" value={confirmar} onChange={(e)=>setConfirmar(e.target.value)} />
            </div>
            {error && <span className="error-message">{error}</span>}
            {success && <span className="success-message">{success}</span>}
            <div className="form-actions">
              <button className="btn btn-primary btn-block" type="submit">Registrarse</button>
            </div>
          </form>

          <div className="form-links">
            <Link to="/login">← Iniciar sesión</Link>
          </div>
          <div className="form-footer">
            <Link to="/">Ir al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;