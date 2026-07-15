import { useState } from "react";
import { Link } from "react-router-dom";

import "../css/global.css";
import "../css/Forms.css";


function Recuperar() {


  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const [mensaje, setMensaje] = useState("");





  const validarCorreo = (correo)=>{

    const formatoCorreo =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return formatoCorreo.test(correo);

  };









  const enviarRecuperacion = async(e)=>{


    e.preventDefault();


    setError("");

    setMensaje("");





    if(email.trim() === ""){


      setError(
        "Debe ingresar un correo electrónico."
      );


      return;

    }





    if(!validarCorreo(email)){


      setError(
        "Ingrese un correo electrónico válido."
      );


      return;

    }







    try{


      /*
      
      Aquí conectaremos el backend:

      Ejemplo:

      await recuperarPassword(email);


      */





      console.log(
        "Solicitud recuperación:",
        email
      );





      setMensaje(

        "Si el correo existe, recibirá un enlace de recuperación."

      );





    }catch(error){



      console.error(
        error
      );



      setError(

        "No fue posible enviar la recuperación."

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

              Recuperar Contraseña

            </p>



          </div>








          <form

            className="recuperar-form"

            onSubmit={enviarRecuperacion}

          >





            <p className="form-description">


              Ingresa tu correo electrónico y te enviaremos
              un enlace para recuperar tu contraseña.



            </p>









            <div className="form-group">



              <label htmlFor="email">


                Correo Electrónico


              </label>





              <input


                type="email"


                id="email"


                placeholder="tu@correo.com"


                value={email}


                onChange={(e)=>
                  setEmail(e.target.value)
                }


              />







              {

                error &&

                <span className="error-message">


                  {error}


                </span>


              }





            </div>









            <div className="form-actions">



              <button


                type="submit"


                className="btn btn-primary btn-block"


              >


                Enviar Enlace


              </button>



            </div>









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


              ← Volver al Login


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



export default Recuperar;