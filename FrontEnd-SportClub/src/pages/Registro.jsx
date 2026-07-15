import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../services/authService";

import "../css/global.css";
import "../css/Forms.css";


function Registro() {


  const navigate = useNavigate();


  const [formulario, setFormulario] = useState({

    nombre: "",
    email: "",
    fechaNacimiento: "",
    password: "",
    confirmPassword: "",
    deporte: ""

  });



  const [error, setError] = useState("");

  const [mensaje, setMensaje] = useState("");





  const manejarCambio = (e)=>{


    setFormulario({

      ...formulario,

      [e.target.name]: e.target.value

    });


  };








  const validarFormulario = ()=>{


    if(formulario.nombre.trim() === ""){

      return "El nombre es obligatorio.";

    }



    if(formulario.email.trim() === ""){

      return "El correo es obligatorio.";

    }




    const formatoCorreo =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(!formatoCorreo.test(formulario.email)){


      return "Ingrese un correo válido.";

    }





    if(!formulario.fechaNacimiento){

      return "La fecha de nacimiento es obligatoria.";

    }





    if(formulario.password.length < 8){


      return "La contraseña debe tener mínimo 8 caracteres.";


    }







    if(formulario.password !== formulario.confirmPassword){


      return "Las contraseñas no coinciden.";


    }




    return null;


  };









  const registrarUsuario = async(e)=>{


    e.preventDefault();



    setError("");

    setMensaje("");





    const validacion = validarFormulario();




    if(validacion){


      setError(validacion);


      return;


    }







    try{



      const datosUsuario = {


        full_name: formulario.nombre,


        email: formulario.email,


        birth_date: formulario.fechaNacimiento,


        password: formulario.password,

        metadata:{
          sports: formulario.deporte 
            ? [formulario.deporte]
            : []
          
        }

        


      };





      const respuesta = await register(datosUsuario);




      console.log(

        "Respuesta backend:",

        respuesta.data

      );





      setMensaje(

        "Registro exitoso. Redirigiendo al login..."

      );






      setTimeout(()=>{


        navigate("/login");


      },1500);







    }catch(error){



      console.error(

        "Error registro:",

        error

      );




      setError(


        error.response?.data?.message ||

        "No fue posible crear la cuenta."


      );


    }




  };









  return (


    <div className="form-page">


      <div className="form-container">


        <div className="form-card">





          <div className="form-header">


            <h1>

              SportClub

            </h1>



            <p>

              Únete a nuestra comunidad

            </p>



          </div>









          <form


            className="registro-form"


            onSubmit={registrarUsuario}


          >









            <div className="form-group">


              <label>

                Nombre Completo

              </label>



              <input


                type="text"


                name="nombre"


                placeholder="Tu nombre"


                value={formulario.nombre}


                onChange={manejarCambio}


                required


              />


            </div>









            <div className="form-group">


              <label>

                Correo Electrónico

              </label>




              <input


                type="email"


                name="email"


                placeholder="tu@correo.com"


                value={formulario.email}


                onChange={manejarCambio}


                required


              />


            </div>









            <div className="form-group">


              <label>

                Fecha de Nacimiento

              </label>




              <input


                type="date"


                name="fechaNacimiento"


                value={formulario.fechaNacimiento}


                onChange={manejarCambio}


                required


              />


            </div>









            <div className="form-group">


              <label>

                Contraseña

              </label>




              <input


                type="password"


                name="password"


                placeholder="Mínimo 8 caracteres"


                value={formulario.password}


                onChange={manejarCambio}


                required


              />


            </div>









            <div className="form-group">


              <label>

                Confirmar Contraseña

              </label>




              <input


                type="password"


                name="confirmPassword"


                placeholder="Repite tu contraseña"


                value={formulario.confirmPassword}


                onChange={manejarCambio}


                required


              />


            </div>









            <div className="form-group">


              <label>

                Deporte Favorito

              </label>




              <select


                name="deporte"


                value={formulario.deporte}


                onChange={manejarCambio}


              >


                <option value="">

                  Selecciona un deporte

                </option>


                <option value="futbol">

                  Fútbol

                </option>


                <option value="tenis">

                  Tenis

                </option>


                <option value="natacion">

                  Natación

                </option>


                <option value="crossfit">

                  Crossfit

                </option>


                <option value="yoga">

                  Yoga

                </option>


                <option value="otro">

                  Otro

                </option>


              </select>


            </div>









            <button


              type="submit"


              className="btn btn-primary btn-block"


            >

              Registrarse


            </button>









            {
              error &&

              <div className="error-message">

                {error}

              </div>

            }









            {
              mensaje &&

              <div className="success-message">

                {mensaje}

              </div>

            }








          </form>









          <div className="form-links">


            <Link

              to="/login"

              className="link"

            >

              ← Iniciar Sesión


            </Link>



          </div>









          <div className="form-footer">


            <Link

              to="/"

              className="link"

            >

              Ir al inicio


            </Link>


          </div>







        </div>



      </div>



    </div>



  );


}



export default Registro;