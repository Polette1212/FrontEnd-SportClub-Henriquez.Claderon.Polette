import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Recuperar from "./pages/RecuperarContrasena";

import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardCoach from "./pages/DashboardCoach";
import DashboardUsuario from "./pages/DashboardUsuario";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        <Route 
          path="/" 
          element={<Inicio />} 
        />


        <Route 
          path="/login" 
          element={<Login />} 
        />


        <Route 
          path="/registro" 
          element={<Registro />} 
        />


        <Route 
          path="/recuperar" 
          element={<Recuperar />} 
        />


        <Route 
          path="/dashboard-admin" 
          element={<DashboardAdmin />} 
        />


        <Route 
          path="/dashboard-coach" 
          element={<DashboardCoach />} 
        />


        <Route 
          path="/dashboard-usuario" 
          element={<DashboardUsuario />} 
        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;
