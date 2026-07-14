import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../services/userService";
import { getReservations } from "../services/reservationService";
import "../styles/dashboard.css";

function DashboardAdmin() {
  const [users, setUsers] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    getUsers(token).then(res => setUsers(res.data));
    getReservations(token).then(res => setReservations(res.data));
  }, []);

  return (
    <div className="dashboard dashboard-admin">
      <header className="dashboard-header admin-header">
        <div className="header-container">
          <h2>🏋️ SportClub</h2>
          <div className="header-actions">
            <button className="header-btn">👤 Mi Perfil</button>
            <Link to="/" className="header-btn btn-logout">🚪 Cerrar Sesión</Link>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <h2>👥 Usuarios</h2>
        <table className="dashboard-table">
          <thead>
            <tr><th>ID</th><th>Nombre</th><th>Email</th></tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>📅 Reservas</h2>
        <table className="dashboard-table">
          <thead>
            <tr><th>ID</th><th>Fecha</th><th>Usuario</th></tr>
          </thead>
          <tbody>
            {reservations.map(r => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.date}</td>
                <td>{r.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default DashboardAdmin;