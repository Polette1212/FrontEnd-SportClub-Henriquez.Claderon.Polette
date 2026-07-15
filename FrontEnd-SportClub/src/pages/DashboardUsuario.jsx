import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../css/global.css";
import "../css/Dashboard.css";


function DashboardUsuario() {


    const navigate = useNavigate();



    const [reservas, setReservas] = useState([

        {
            clase: "CrossFit",
            dia: "Lunes",
            hora: "18:00",
            coach: "Carlos Pérez"
        },

        {
            clase: "Yoga",
            dia: "Miércoles",
            hora: "19:30",
            coach: "Ana Torres"
        },

        {
            clase: "Musculación",
            dia: "Viernes",
            hora: "17:00",
            coach: "Pedro Soto"
        }

    ]);




    const [usuario, setUsuario] = useState({

        nombre: "Usuario",
        correo: "usuario@email.com",
        deporte: "Fitness",
        fecha: "2026"

    });





    const clases = [

        {
            nombre: "CrossFit",
            descripcion: "Entrenamiento de alta intensidad",
            horario: "18:00 hrs"
        },

        {
            nombre: "Yoga",
            descripcion: "Relajación y flexibilidad",
            horario: "19:30 hrs"
        },

        {
            nombre: "Musculación",
            descripcion: "Rutina personalizada",
            horario: "17:00 hrs"
        }

    ];





    useEffect(()=>{


        cargarDatosUsuario();


    }, []);






    const cargarDatosUsuario = async()=>{


        try{


            /*
                Aquí conectaremos después el backend:

                Ejemplo:

                const respuesta = await api.get("/usuario/perfil");

                setUsuario(respuesta.data.usuario);

                setReservas(respuesta.data.reservas);

            */


            console.log(
                "Datos usuario cargados"
            );



        }catch(error){


            console.error(
                "Error cargando usuario:",
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








    const cancelarReserva = (index)=>{


        const nuevasReservas = reservas.filter(

            (_,i)=> i !== index

        );


        setReservas(
            nuevasReservas
        );


    };








    return (


        <div className="dashboard dashboard-usuario">





            <header className="dashboard-header user-header">


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





                <nav className="dashboard-nav user-nav">


                    <ul>


                        <li>

                            <a href="#inicio">

                                🏠 Inicio

                            </a>

                        </li>




                        <li>

                            <a href="#reservas">

                                📅 Reservas

                            </a>

                        </li>





                        <li>

                            <a href="#clases">

                                🎯 Clases

                            </a>

                        </li>





                        <li>

                            <a href="#perfil">

                                👤 Mi Perfil

                            </a>

                        </li>



                    </ul>


                </nav>









                <main className="dashboard-content">






                    <section

                        id="inicio"

                        className="dashboard-section"

                    >



                        <div className="welcome-card">


                            <h1>

                                Bienvenido, <span>{usuario.nombre}</span> 👋

                            </h1>



                            <p>

                                Continúa entrenando para alcanzar tus metas.

                            </p>



                        </div>



                    </section>









                    <section

                        id="reservas"

                        className="dashboard-section"

                    >



                        <h2>

                            📅 Mis Reservas

                        </h2>



                        <p className="section-subtitle">

                            Lista de tus entrenamientos reservados

                        </p>






                        <table className="dashboard-table">



                            <thead>


                                <tr>


                                    <th>
                                        Nombre Clase
                                    </th>


                                    <th>
                                        Día
                                    </th>


                                    <th>
                                        Hora
                                    </th>


                                    <th>
                                        Coach Asignado
                                    </th>


                                    <th>
                                        Acción
                                    </th>



                                </tr>


                            </thead>







                            <tbody>



                            {


                                reservas.map((reserva,index)=>(


                                    <tr key={index}>


                                        <td>
                                            {reserva.clase}
                                        </td>



                                        <td>
                                            {reserva.dia}
                                        </td>



                                        <td>
                                            {reserva.hora}
                                        </td>



                                        <td>
                                            {reserva.coach}
                                        </td>



                                        <td>


                                            <button

                                                className="btn-cancelar"

                                                onClick={()=>
                                                    cancelarReserva(index)
                                                }

                                            >

                                                Cancelar

                                            </button>


                                        </td>



                                    </tr>


                                ))


                            }



                            </tbody>



                        </table>




                    </section>









                    <section

                        id="clases"

                        className="dashboard-section"

                    >



                        <h2>

                            🎯 Clases Disponibles

                        </h2>




                        <p className="section-subtitle">

                            Descubre todas nuestras clases y reserva la tuya

                        </p>





                        <div className="clases-grid">



                        {


                            clases.map((clase,index)=>(



                                <div

                                    className="clase-card"

                                    key={index}

                                >



                                    <h3>

                                        {clase.nombre}

                                    </h3>




                                    <p>

                                        {clase.descripcion}

                                    </p>




                                    <span>

                                        {clase.horario}

                                    </span>





                                    <button className="btn-reservar">

                                        Reservar

                                    </button>




                                </div>



                            ))


                        }



                        </div>




                    </section>









                    <section

                        id="perfil"

                        className="dashboard-section"

                    >



                        <h2>

                            👤 Mi Perfil

                        </h2>





                        <div className="profile-card">



                            <div className="profile-info">





                                <div className="profile-item">


                                    <span className="profile-label">

                                        Nombre

                                    </span>



                                    <span className="profile-value">

                                        {usuario.nombre}

                                    </span>



                                </div>






                                <div className="profile-item">


                                    <span className="profile-label">

                                        Correo

                                    </span>



                                    <span className="profile-value">

                                        {usuario.correo}

                                    </span>



                                </div>







                                <div className="profile-item">


                                    <span className="profile-label">

                                        Deporte Favorito

                                    </span>



                                    <span className="profile-value">

                                        {usuario.deporte}

                                    </span>



                                </div>






                                <div className="profile-item">


                                    <span className="profile-label">

                                        Miembro desde

                                    </span>



                                    <span className="profile-value">

                                        {usuario.fecha}

                                    </span>



                                </div>





                            </div>


                        </div>



                    </section>





                </main>




            </div>





        </div>


    );


}



export default DashboardUsuario;