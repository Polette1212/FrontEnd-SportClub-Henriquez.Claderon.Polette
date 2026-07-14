import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "../styles/forms.css";

function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email === "" || password === ""){
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const res = await login(email, password);
      sessionStorage.setItem("token", res.data.token);

      // Redirección según rol
      if(res.data.role === "admin") navigate("/dashboard-admin");
      else if(res.data.role === "coach") navigate("/dashboard-coach");
      else navigate("/dashboard-usuario");

    } catch (err) {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h1>SportClub</h1>
            <p>Tu mejor versión comienza hoy</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="tu@correo.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input type="password" placeholder="••••••••" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            {error && <span className="error-message">{error}</span>}
            <div className="form-actions">
              <button className="btn btn-primary btn-block" type="submit">Ingresar</button>
            </div>
          </form>

          <div className="form-links">
            <Link to="/registro" className="link">Crear cuenta</Link>
            <span className="divider">|</span>
            <Link to="/recuperar-contrasena">¿Olvidaste tu contraseña?</Link>
          </div>

          <div className="form-footer">
            <Link to="/">← Volver al inicio</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;