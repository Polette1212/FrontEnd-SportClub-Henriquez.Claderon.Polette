import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function DashboardCoach() {
  const alumnos = [
    { id: 1, nombre: "María González", correo: "maria@sportclub.cl", clase: "CrossFit", estado: "Activo" },
    { id: 2, nombre: "Juan Pérez", correo: "juan@sportclub.cl", clase: "Funcional", estado: "Activo" }
  ];

  return (
    <div className="dashboard dashboard-coach">
      <header className="dashboard-header coach-header">
        <div className="header-container">
          <h2>🏋️ SportClub</h2>
          <div className="header-actions">
            <button className="header-btn">👤 Mi Perfil</button>
            <Link to="/" className="header-btn btn-logout">🚪 Cerrar Sesión</Link>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <h2>👥 Mis Alumnos</h2>
        <table className="dashboard-table">
          <thead>
            <tr><th>Nombre</th><th>Correo</th><th>Clase</th><th>Estado</th></tr>
          </thead>
          <tbody>
            {alumnos.map(a => (
              <tr key={a.id}>
                <td>{a.nombre}</td>
                <td>{a.correo}</td>
                <td>{a.clase}</td>
                <td>{a.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default DashboardCoach;