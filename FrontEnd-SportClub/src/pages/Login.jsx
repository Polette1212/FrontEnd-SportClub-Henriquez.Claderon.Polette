import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../services/authService";

import logo from "../assets/Logo-sport.png";

import "../css/global.css";
import "../css/Forms.css";


function Login() {


  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");




  const validarEmail = () => {


    if(email.trim() === ""){

      setEmailError(
        "El correo electrónico es obligatorio."
      );

      return false;

    }



    const formatoCorreo =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(!formatoCorreo.test(email)){


      setEmailError(
        "Ingrese un correo válido."
      );


      return false;

    }


    return true;


  };







  const validarPassword = () => {


    if(password.trim() === ""){


      setPasswordError(
        "La contraseña es obligatoria."
      );


      return false;


    }



    if(password.length < 6){


      setPasswordError(
        "La contraseña debe tener mínimo 6 caracteres."
      );


      return false;


    }



    return true;


  };









  const handleSubmit = async(e)=>{


    e.preventDefault();



    setEmailError("");
    setPasswordError("");
    setMensaje("");
    setError("");




    const emailCorrecto = validarEmail();

    const passwordCorrecto = validarPassword();




    if(!emailCorrecto || !passwordCorrecto){

      return;

    }






    try{


      const res = await login(
        email,
        password
      );




      console.log(
        "RESPUESTA LOGIN COMPLETA:",
        JSON.stringify(res.data,null,2)
      );





      /*
        El backend responde:

        {
          ok:true,
          message:"",
          data:{
             token:"",
             user:{
                role:"user"
             }
          }
        }

      */





      const datos = res.data.data;





      sessionStorage.setItem(
        "token",
        datos.token
      );




      sessionStorage.setItem(
        "user",
        JSON.stringify(datos.user)
      );






      setMensaje(
        "Inicio de sesión correcto."
      );





      const role = datos.user.role;







      setTimeout(()=>{



        switch(role){



          case "admin":


            navigate(
              "/dashboard-admin"
            );


          break;





          case "coach":


            navigate(
              "/dashboard-coach"
            );


          break;






          case "user":


            navigate(
              "/dashboard-usuario"
            );


          break;






          default:


            setError(
              "El usuario no tiene un rol válido."
            );


          break;



        }



      },1000);






    }catch(err){



      console.error(
        "Error login:",
        err
      );



      setError(
        "Correo o contraseña incorrectos."
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
              Tu mejor versión comienza hoy
            </p>


          </div>








          <form
            className="login-form"
            onSubmit={handleSubmit}
          >






            <div className="form-group">


              <label>
                Correo Electrónico
              </label>



              <input

                type="email"

                placeholder="tu@correo.com"

                value={email}

                onChange={
                  (e)=>setEmail(e.target.value)
                }

              />



              <span className="error-message">

                {emailError}

              </span>



            </div>









            <div className="form-group">


              <label>
                Contraseña
              </label>




              <input

                type="password"

                placeholder="••••••••"

                value={password}

                onChange={
                  (e)=>setPassword(e.target.value)
                }

              />





              <span className="error-message">

                {passwordError}

              </span>



            </div>







            <button

              type="submit"

              className="btn btn-primary btn-block"

            >

              Ingresar

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

              to="/recuperar"

              className="link"

            >

              ¿Olvidaste tu contraseña?

            </Link>





            <span className="divider">
              |
            </span>





            <Link

              to="/registro"

              className="link"

            >

              Crear cuenta

            </Link>




          </div>









          <div className="form-footer">


            <Link

              to="/"

              className="link"

            >

              ← Volver al inicio

            </Link>


          </div>






        </div>


      </div>


    </div>

  );

}


export default Login;