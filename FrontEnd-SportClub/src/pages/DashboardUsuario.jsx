import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function DashboardUsuario() {
  const usuario = { nombre: "Polette Henríquez", email: "polette@sportclub.cl", deporte: "Musculación", fecha: "Julio 2026" };
  const reservas = [
    { id: 1, clase: "CrossFit", dia: "Lunes", hora: "09:00", coach: "Carlos Díaz" },
    { id: 2, clase: "Yoga", dia: "Miércoles", hora: "17:00", coach: "Camila Rojas" }
  ];

  return (
    <div className="dashboard dashboard-usuario">
      <header className="dashboard-header user-header">
        <div className="header-container">
          <h2>🏋️ SportClub</h2>
          <div className="header-actions">
            <button className="header-btn">👤 Mi Perfil</button>
            <Link to="/" className="header-btn btn-logout">🚪 Cerrar Sesión</Link>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <h2>📅 Mis Reservas</h2>
        <table className="dashboard-table">
          <thead>
            <tr><th>Clase</th><th>Día</th><th>Hora</th><th>Coach</th></tr>
          </thead>
          <tbody>
            {reservas.map(r => (
              <tr key={r.id}>
                <td>{r.clase}</td>
                <td>{r.dia}</td>
                <td>{r.hora}</td>
                <td>{r.coach}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>👤 Mi Perfil</h2>
        <p><strong>Nombre:</strong> {usuario.nombre}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Deporte:</strong> {usuario.deporte}</p>
        <p><strong>Miembro desde:</strong> {usuario.fecha}</p>
      </main>
    </div>
  );
}

export default DashboardUsuario;