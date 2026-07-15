import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../css/global.css";
import "../css/Dashboard.css";


function DashboardCoach() {


  const navigate = useNavigate();



  useEffect(()=>{

    cargarDatosCoach();

  }, []);




  const cargarDatosCoach = async()=>{


    try {


      /*
        Aquí conectaremos después el backend:

        Ejemplo:

        const respuesta = await api.get("/coach/alumnos");

      */


      console.log(
        "Datos del coach cargados"
      );


    }catch(error){


      console.error(
        "Error cargando datos:",
        error
      );


    }


  };






  const cerrarSesion = ()=>{


    sessionStorage.removeItem(
      "token"
    );


    sessionStorage.removeItem(
      "user"
    );


    navigate("/login");


  };







  const alumnos = [

    {
      nombre:"Juan Pérez",
      correo:"juan@email.com",
      clase:"Crossfit",
      estado:"Activo"
    },

    {
      nombre:"María González",
      correo:"maria@email.com",
      clase:"Yoga",
      estado:"Activo"
    },

    {
      nombre:"Carlos Soto",
      correo:"carlos@email.com",
      clase:"Fútbol",
      estado:"Activo"
    },

    {
      nombre:"Ana Díaz",
      correo:"ana@email.com",
      clase:"Natación",
      estado:"Activo"
    },

    {
      nombre:"Pedro Rojas",
      correo:"pedro@email.com",
      clase:"Tenis",
      estado:"Activo"
    }

  ];







  const clases = [

    {
      nombre:"Crossfit",
      horario:"Lunes 18:00"
    },

    {
      nombre:"Yoga",
      horario:"Martes 19:00"
    },

    {
      nombre:"Entrenamiento Personal",
      horario:"Viernes 17:00"
    }

  ];








  const horarios = [

    {
      clase:"Crossfit",
      dia:"Lunes",
      hora:"18:00",
      alumnos:15
    },

    {
      clase:"Yoga",
      dia:"Martes",
      hora:"19:00",
      alumnos:10
    },

    {
      clase:"Tenis",
      dia:"Miércoles",
      hora:"17:00",
      alumnos:8
    },

    {
      clase:"Natación",
      dia:"Jueves",
      hora:"16:00",
      alumnos:12
    },

    {
      clase:"Entrenamiento",
      dia:"Viernes",
      hora:"18:00",
      alumnos:20
    }

  ];









  return (

    <div className="dashboard dashboard-coach">





      <header className="dashboard-header coach-header">


        <div className="header-container">



          <div className="logo">

            <h2>
              🏋️ SportClub
            </h2>

          </div>





          <div className="header-actions">


            <button className="header-btn">

              👤 Mi Perfil

            </button>





            <button

              className="header-btn btn-logout"

              onClick={cerrarSesion}

            >

              🚪 Cerrar Sesión

            </button>



          </div>



        </div>


      </header>









      <div className="dashboard-container">





        <nav className="dashboard-nav coach-nav">


          <ul>


            <li>

              <a href="#inicio">
                🏠 Inicio
              </a>

            </li>



            <li>

              <a href="#alumnos">
                👥 Alumnos
              </a>

            </li>



            <li>

              <a href="#clases">
                📚 Clases
              </a>

            </li>



            <li>

              <a href="#horarios">
                ⏰ Horarios
              </a>

            </li>


          </ul>


        </nav>









        <main className="dashboard-content">







          <section id="inicio" className="dashboard-section">


            <h2>
              📊 Panel de Control
            </h2>





            <div className="stats-grid">



              <div className="stat-card">


                <div className="stat-number">

                  {alumnos.length}

                </div>


                <div className="stat-label">

                  Total Alumnos

                </div>


                <div className="stat-icon">

                  👥

                </div>


              </div>







              <div className="stat-card">


                <div className="stat-number">

                  {clases.length}

                </div>


                <div className="stat-label">

                  Clases Activas

                </div>


                <div className="stat-icon">

                  📚

                </div>


              </div>







              <div className="stat-card">


                <div className="stat-number">

                  10h

                </div>


                <div className="stat-label">

                  Horas Semanales

                </div>


                <div className="stat-icon">

                  ⏰

                </div>


              </div>



            </div>



          </section>









          <section id="alumnos" className="dashboard-section">


            <h2>
              👥 Mis Alumnos
            </h2>



            <p className="section-subtitle">

              Gestiona tus alumnos registrados

            </p>





            <table className="dashboard-table">


              <thead>

                <tr>

                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Clase Asignada</th>
                  <th>Estado</th>

                </tr>

              </thead>




              <tbody>


              {
                alumnos.map((alumno,index)=>(

                  <tr key={index}>

                    <td>{alumno.nombre}</td>
                    <td>{alumno.correo}</td>
                    <td>{alumno.clase}</td>
                    <td>{alumno.estado}</td>

                  </tr>

                ))
              }


              </tbody>


            </table>



          </section>









          <section id="clases" className="dashboard-section">


            <h2>
              📚 Mis Clases
            </h2>




            <div className="clases-coach-grid">


            {
              clases.map((clase,index)=>(

                <div className="stat-card" key={index}>


                  <h3>

                    {clase.nombre}

                  </h3>



                  <p>

                    {clase.horario}

                  </p>


                </div>


              ))
            }


            </div>



          </section>









          <section id="horarios" className="dashboard-section">


            <h2>
              ⏰ Horarios de la Semana
            </h2>




            <table className="dashboard-table">


              <thead>

                <tr>

                  <th>Nombre Clase</th>
                  <th>Día</th>
                  <th>Hora</th>
                  <th>Cantidad Alumnos</th>

                </tr>


              </thead>




              <tbody>


              {
                horarios.map((horario,index)=>(

                  <tr key={index}>


                    <td>{horario.clase}</td>

                    <td>{horario.dia}</td>

                    <td>{horario.hora}</td>

                    <td>{horario.alumnos}</td>


                  </tr>


                ))
              }


              </tbody>


            </table>



          </section>





        </main>



      </div>



    </div>

  );

}



export default DashboardCoach;