import { Link } from "react-router-dom";
import logo from "../assets/Logo-sport.png";

import "../css/global.css";
import "../css/landing.css";



function Inicio() {


  return (

    <div>


      {/* HEADER */}

      <header className="header">

        <div className="container">

          <div className="header-content">


            <div className="logo">

              <img 
                src={logo}
                alt="Logo SportClub"
              />

            </div>




            <nav className="nav-menu">

              <ul>

                <li>
                  <a href="#inicio">
                    Inicio
                  </a>
                </li>


                <li>
                  <a href="#planes">
                    Planes
                  </a>
                </li>


                <li>
                  <a href="#beneficios">
                    Beneficios
                  </a>
                </li>


                <li>
                  <a href="#contacto">
                    Contacto
                  </a>
                </li>



                <li>

                  <Link 
                    to="/login"
                    className="btn-login"
                  >

                    Iniciar Sesión

                  </Link>

                </li>


              </ul>


            </nav>


          </div>


        </div>


      </header>









      {/* HERO */}


      <section 
        className="hero"
        id="inicio"
      >


        <div className="hero-content">


          <h2>
            Tu mejor versión comienza hoy
          </h2>



          <p>

            Únete a SportClub y transforma tu vida mediante
            entrenamientos deportivos y tecnología de vanguardia

          </p>




          <Link

            to="/registro"

            className="btn btn-primary"

          >

            Comienza Ahora

          </Link>




        </div>


      </section>









      {/* BENEFICIOS */}


      <section

        className="beneficios"

        id="beneficios"

      >


        <div className="container">



          <h2 className="section-title">

            Nuestros Beneficios

          </h2>





          <div className="beneficios-grid">



            <div className="beneficio-card">

              <div className="icon">
                💪
              </div>

              <h3>
                Entrenamientos Personalizados
              </h3>

              <p>
                Accede a entrenamientos diseñados
                para tus objetivos y nivel fitness.
              </p>

            </div>





            <div className="beneficio-card">

              <div className="icon">
                📱
              </div>

              <h3>
                Seguimiento en Tiempo Real
              </h3>

              <p>
                Monitorea tu progreso mediante
                nuestra plataforma tecnológica.
              </p>

            </div>





            <div className="beneficio-card">

              <div className="icon">
                👥
              </div>

              <h3>
                Comunidad Motivada
              </h3>

              <p>
                Entrena con otros miembros y comparte logros.
              </p>

            </div>





            <div className="beneficio-card">

              <div className="icon">
                🏆
              </div>

              <h3>
                Coaching Profesional
              </h3>

              <p>
                Recibe orientación de coaches certificados.
              </p>

            </div>





            <div className="beneficio-card">

              <div className="icon">
                ⏰
              </div>

              <h3>
                Horarios Flexibles
              </h3>

              <p>
                Elige horarios adaptados a tu rutina.
              </p>

            </div>





            <div className="beneficio-card">

              <div className="icon">
                🎯
              </div>

              <h3>
                Resultados Garantizados
              </h3>

              <p>
                Alcanza tus metas con programas efectivos.
              </p>

            </div>



          </div>



        </div>



      </section>









      {/* PLANES */}


      <section

        className="planes"

        id="planes"

      >


        <div className="container">



          <h2 className="section-title">

            Nuestros Planes

          </h2>





          <div className="planes-grid">






            <div className="plan-card">


              <h3>
                Plan Básico
              </h3>


              <div className="price">

                $19.990

                <span>
                  /mes
                </span>

              </div>



              <ul className="beneficios-lista">

                <li>
                  ✓ Acceso a 5 clases/mes
                </li>

                <li>
                  ✓ Seguimiento básico
                </li>

                <li>
                  ✓ Plataforma web
                </li>

                <li>
                  ✓ Soporte email
                </li>


              </ul>




              <Link
                to="/registro"
                className="btn btn-secondary"
              >

                Seleccionar Plan

              </Link>



            </div>









            <div className="plan-card destacado">


              <div className="badge">

                Más Popular

              </div>



              <h3>
                Plan Premium
              </h3>



              <div className="price">

                $29.990

                <span>
                  /mes
                </span>

              </div>




              <ul className="beneficios-lista">


                <li>
                  ✓ Clases ilimitadas
                </li>


                <li>
                  ✓ Coach personal
                </li>


                <li>
                  ✓ Seguimiento avanzado
                </li>


                <li>
                  ✓ Soporte prioritario
                </li>


              </ul>




              <Link

                to="/registro"

                className="btn btn-primary"

              >

                Seleccionar Plan

              </Link>



            </div>








            <div className="plan-card">


              <h3>
                Plan Empresa
              </h3>



              <div className="price">

                $39.990

                <span>
                  /mes
                </span>


              </div>




              <ul className="beneficios-lista">


                <li>
                  ✓ Equipos completos
                </li>


                <li>
                  ✓ Coaching ilimitado
                </li>


                <li>
                  ✓ Análisis personalizado
                </li>


                <li>
                  ✓ Soporte 24/7
                </li>


              </ul>





              <Link

                to="/registro"

                className="btn btn-secondary"

              >

                Seleccionar Plan

              </Link>




            </div>




          </div>



        </div>



      </section>









      {/* SOBRE SPORTCLUB */}


      <section className="sobre-club">


        <div className="container">


          <h2 className="section-title">

            Sobre SportClub

          </h2>




          <div className="about-content">


            <div className="about-section">

              <h3>
                Nuestra Historia
              </h3>


              <p>
                SportClub nació en 2021 con una visión clara:
                revolucionar la forma en que las personas entrenan.
              </p>


            </div>





            <div className="about-section">


              <h3>
                Misión
              </h3>


              <p>
                Promover bienestar físico y mental mediante
                entrenamientos deportivos de calidad.
              </p>


            </div>





            <div className="about-section">


              <h3>
                Visión
              </h3>


              <p>
                Ser referente deportivo en innovación
                y transformación personal.
              </p>


            </div>



          </div>



        </div>



      </section>









      {/* CONTACTO */}


      <section

        className="contacto"

        id="contacto"

      >


        <div className="container">


          <h2 className="section-title">

            Contacto

          </h2>




          <div className="about-content">



            <div className="about-section">

              <h3>
                Email
              </h3>

              <p>
                contacto@sportclub.com
              </p>

            </div>




            <div className="about-section">

              <h3>
                Teléfono
              </h3>

              <p>
                +56 9 1234 5678
              </p>


            </div>





            <div className="about-section">

              <h3>
                Ubicación
              </h3>


              <p>
               Nueva uno 20,  Santiago, Chile
              </p>


            </div>



          </div>



        </div>


      </section>









      {/* FOOTER */}


      <footer className="footer">


        <div className="container">


          <div className="footer-bottom">


            <p>

              © 2026 SportClub. Todos los derechos reservados.

            </p>


          </div>



        </div>



      </footer>





    </div>


  );


}


export default Inicio;