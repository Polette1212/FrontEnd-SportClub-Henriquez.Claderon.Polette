
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../services/userService";

import {
  getRooms,
  createRoom,
  updateRoom,
  deleteRoom
} from "../services/roomService";

import {
  getSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule
} from "../services/classScheduleService";

import "../css/global.css";
import "../css/Dashboard.css";


function DashboardAdmin() {

  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  const usuarioActual = JSON.parse(sessionStorage.getItem("user"));


  // ==========================
  // USUARIOS
  // ==========================

  const [usuarios,setUsuarios] = useState([]);
  const [busqueda,setBusqueda] = useState("");

  const [mostrarFormulario,setMostrarFormulario] = useState(false);

  const [editando,setEditando] = useState(null);


  const [nuevoUsuario,setNuevoUsuario] = useState({

    full_name:"",
    email:"",
    password:"",
    role:"user"

  });



  // ==========================
  // SALAS
  // ==========================

  const [salas,setSalas] = useState([]);

  const [buscarSala,setBuscarSala] = useState("");

  const [editandoSala,setEditandoSala] = useState(null);


  const [nuevaSala,setNuevaSala] = useState({

    name:"",
    capacity:"",
    status:"active"

  });



  // ==========================
  // CLASES
  // ==========================

  const [clases,setClases] = useState([]);

  const [formClase,setFormClase] = useState({

    id:null,
    sport_room_id:"",
    day_of_week:"",
    start_time:"",
    end_time:""

  });



  // ==========================
  // SEGURIDAD ADMIN
  // ==========================

  useEffect(()=>{


    if(!token || !usuarioActual){

      navigate("/login");
      return;

    }


    if(usuarioActual.role !== "admin"){

      Swal.fire(
        "Acceso denegado",
        "No tienes permisos de administrador",
        "error"
      );

      navigate("/login");

    }


  },[token, usuarioActual, navigate]);



  // ==========================
  // CARGAR DATOS
  // ==========================


  useEffect(()=>{

    cargarUsuarios();
    cargarSalas();
    cargarClases();

  },[]);



  const cargarUsuarios = async()=>{

  try{

    const res = await getUsers(token);

    console.log("USUARIOS BACKEND:", res.data);


    setUsuarios(
      res.data.data || res.data || []
    );


  }catch(error){


    console.log(
      "ERROR USUARIOS:",
      error.response?.data || error.message
    );


    if(error.response?.status === 401){

      Swal.fire(
        "Sesión expirada",
        "Tu token ya no es válido, vuelve a iniciar sesión",
        "warning"
      );


      sessionStorage.clear();

      navigate("/login");

      return;

    }


    Swal.fire(
      "Error usuarios",
      error.response?.data?.message ||
      "No se pudieron cargar usuarios",
      "error"
    );


  }

};





  const cargarSalas = async()=>{

  try{

    const res = await getRooms(token);


    console.log("SALAS BACKEND:", res);

    console.log("DATA SALAS:", res.data);


    setSalas(res.data.data || res.data);


  }catch(error){

    console.log(
      "ERROR SALAS:",
      error.response
    );


    Swal.fire(
      "Error salas",
      error.response?.data?.message || error.message,
      "error"
    );

  }

};


 const cargarClases = async()=>{

  try{

    const res = await getSchedules(token);


    console.log("CLASES BACKEND:", res);

    console.log("DATA CLASES:", res.data);


    setClases(res.data.data || res.data);


  }catch(error){

    console.log(
      "ERROR CLASES:",
      error.response
    );


    Swal.fire(
      "Error clases",
      error.response?.data?.message || error.message,
      "error"
    );

  }

};


 // ==========================
// USUARIOS CRUD
// ==========================


const handleUsuario = (e)=>{

  setNuevoUsuario({

    ...nuevoUsuario,

    [e.target.name]: e.target.value

  });

};




// GUARDAR / CREAR / EDITAR USUARIO

const guardarUsuario = async(e)=>{

  e.preventDefault();


  try{


    if(editando){


      await updateUser(
        editando,
        nuevoUsuario,
        token
      );


      Swal.fire(
        "Correcto",
        "Usuario actualizado correctamente",
        "success"
      );


    }else{


      await createUser(
        nuevoUsuario,
        token
      );


      Swal.fire(
        "Correcto",
        "Usuario creado correctamente",
        "success"
      );


    }



    setMostrarFormulario(false);

    setEditando(null);


    setNuevoUsuario({

      full_name:"",
      email:"",
      password:"",
      role:"user"

    });


    await cargarUsuarios();



  }catch(error){


    console.log(
      "ERROR GUARDAR USUARIO:",
      error.response?.data || error.message
    );


    Swal.fire(

      "Error",

      error.response?.data?.message ||
      "No se pudo guardar usuario",

      "error"

    );


  }


};





// EDITAR USUARIO

const editarUsuario = (usuario)=>{


  setEditando(usuario.id);


  setMostrarFormulario(true);



  setNuevoUsuario({

    full_name: usuario.full_name,

    email: usuario.email,

    password:"",

    role: usuario.role


  });


};





// ELIMINAR USUARIO

const eliminarUsuario = async(id)=>{


  const confirmar = await Swal.fire({

    title:"¿Eliminar usuario?",

    text:"Esta acción no se puede deshacer",

    icon:"warning",

    showCancelButton:true,

    confirmButtonText:"Eliminar",

    cancelButtonText:"Cancelar"

  });



  if(!confirmar.isConfirmed){

    return;

  }



  try{


    await deleteUser(
      id,
      token
    );


    Swal.fire(

      "Correcto",

      "Usuario eliminado",

      "success"

    );


    await cargarUsuarios();



  }catch(error){


    console.log(

      "ERROR ELIMINAR USUARIO:",

      error.response?.data || error.message

    );



    Swal.fire(

      "Error",

      error.response?.data?.message ||
      "No se pudo eliminar usuario",

      "error"

    );


  }


};



  // ==========================
  // SALAS CRUD
  // ==========================


 const guardarSala = async(e)=>{

  e.preventDefault();

  try{

    if(editandoSala){

      await updateRoom(
        editandoSala,
        nuevaSala,
        token
      );

    }else{

      await createRoom(
        nuevaSala,
        token
      );

    }


    Swal.fire(
      "Correcto",
      "Sala guardada",
      "success"
    );


    setEditandoSala(null);


    setNuevaSala({

      name:"",
      capacity:"",
      status:"active"

    });


    cargarSalas();


  }catch(error){

    console.log(
      "ERROR GUARDAR SALA:",
      error.response?.data || error.message
    );


    Swal.fire(
      "Error",
      error.response?.data?.message || "No se pudo guardar sala",
      "error"
    );


  }

};



  const eliminarSala=async(id)=>{

  const confirmar = await Swal.fire({

    title:"¿Eliminar sala?",

    showCancelButton:true,

    confirmButtonText:"Eliminar",

    cancelButtonText:"Cancelar"

  });


  if(!confirmar.isConfirmed)
    return;


  try{

    await deleteRoom(id,token);

    Swal.fire(
      "Correcto",
      "Sala eliminada",
      "success"
    );

    cargarSalas();


  }catch(error){

    Swal.fire(
      "Error",
      "No se pudo eliminar sala",
      "error"
    );

  }


};



  const editarSala=(sala)=>{


    setEditandoSala(sala.id);


    setNuevaSala({

      name:sala.name,

      capacity:sala.capacity,

      status:sala.status

    });


  };
    // ==========================
  // CLASES CRUD BACKEND
  // ==========================


  const guardarClase = async(e)=>{

    e.preventDefault();


    try{


      if(formClase.id){


        await updateSchedule(
          formClase.id,
          formClase,
          token
        );


      }else{


        await createSchedule(
          formClase,
          token
        );


      }


      Swal.fire(
        "Correcto",
        "Clase guardada",
        "success"
      );


      setFormClase({

        id:null,
        sport_room_id:"",
        day_of_week:"",
        start_time:"",
        end_time:""

      });


      cargarClases();


    }catch(error){


      console.log(error);


      Swal.fire(
        "Error",
        "No se pudo guardar clase",
        "error"
      );


    }


  };



  const eliminarClase=async(id)=>{


    try{


      await deleteSchedule(id,token);


      cargarClases();


    }catch(error){

      console.log(error);

    }


  };



  const editarClase=(clase)=>{


    setFormClase({

      id:clase.id,

      sport_room_id:clase.sport_room_id,

      day_of_week:clase.day_of_week,

      start_time:clase.start_time,

      end_time:clase.end_time


    });


  };




  // ==========================
  // FILTROS
  // ==========================


  const usuariosFiltrados =
  usuarios.filter(u=>{

    const texto=busqueda.toLowerCase();


    return (

      u.full_name?.toLowerCase().includes(texto) ||

      u.email?.toLowerCase().includes(texto) ||

      u.role?.toLowerCase().includes(texto)

    );


  });



  const salasFiltradas =
  salas.filter(s=>{

    return s.name
    ?.toLowerCase()
    .includes(
      buscarSala.toLowerCase()
    );


  });



  const cerrarSesion=()=>{


    sessionStorage.clear();

    navigate("/login");


  };



  return (

<div className="dashboard dashboard-admin">

<nav className="sidebar">
  <h3>SportClub</h3>
  <a href="#inicio">📊 Inicio</a>
  <a href="#usuarios">👥 Usuarios</a>
  <a href="#salas">🏢 Salas</a>
  <a href="#clases">📚 Clases</a>
  <a href="#deportes">🏋️ Deportes</a>
  <a href="#configuracion">⚙️ Configuración</a>
</nav>

<header className="dashboard-header admin-header">


<div className="header-container">


<h2>🏋️ SportClub</h2>


<button
className="header-btn btn-logout"
onClick={cerrarSesion}
>

🚪 Cerrar sesión

</button>


</div>


</header>




<main className="dashboard-content">



{/* ================= USUARIOS ================= */}


<section className="dashboard-section">


<h2>👥 Gestión Usuarios</h2>
<h3>
Total usuarios: {usuarios.length}
</h3>


<div className="roles">

<p>
👑 Administradores:
{
usuarios.filter(
u=>u.role==="admin"
).length
}
</p>


<p>
🏋️ Coaches:
{
usuarios.filter(
u=>u.role==="coach"
).length
}
</p>


<p>
👤 Usuarios:
{
usuarios.filter(
u=>u.role==="user"
).length
}
</p>

</div>




<input

className="form-control"

placeholder="Buscar usuario"

value={busqueda}

onChange={
e=>setBusqueda(e.target.value)
}

/>



<button

className="btn btn-primary"

onClick={()=>{

setEditando(null);

setMostrarFormulario(true);

}}

>

➕ Crear usuario

</button>




{
mostrarFormulario &&

<form onSubmit={guardarUsuario}>


<input

className="form-control"

name="full_name"

placeholder="Nombre"

value={nuevoUsuario.full_name}

onChange={handleUsuario}

/>



<input

className="form-control"

name="email"

placeholder="Correo"

value={nuevoUsuario.email}

onChange={handleUsuario}

/>



<input

className="form-control"

name="password"

placeholder="Contraseña"

type="password"

value={nuevoUsuario.password}

onChange={handleUsuario}

/>



<select

className="form-control"

name="role"

value={nuevoUsuario.role}

onChange={handleUsuario}

>


<option value="user">
Usuario
</option>


<option value="coach">
Coach
</option>


<option value="admin">
Administrador
</option>


</select>



<button className="btn btn-success">

💾 Guardar

</button>


</form>

}




<table className="dashboard-table">

<thead>

<tr>

<th>ID</th>

<th>Nombre</th>

<th>Email</th>

<th>Rol</th>

<th>Acciones</th>


</tr>

</thead>


<tbody>


{
usuariosFiltrados.map(u=>(


<tr key={u.id}>


<td>{u.id}</td>

<td>{u.full_name}</td>

<td>{u.email}</td>

<td>{u.role}</td>


<td>


<button

className="btn btn-warning"

onClick={()=>editarUsuario(u)}

>

✏️

</button>



<button

className="btn btn-danger"

onClick={()=>eliminarUsuario(u.id)}

>

🗑️

</button>


</td>


</tr>


))

}



</tbody>


</table>


</section>





{/* ================= SALAS ================= */}


<section className="dashboard-section">


<h2>🏢 Gestión Salas</h2>


<form onSubmit={guardarSala}>


<input

className="form-control"

placeholder="Nombre sala"

value={nuevaSala.name}

onChange={
e=>setNuevaSala({

...nuevaSala,

name:e.target.value

})

}

/>


<input

className="form-control"

placeholder="Capacidad"

value={nuevaSala.capacity}

onChange={
e=>setNuevaSala({

...nuevaSala,

capacity:e.target.value

})

}

/>



<button className="btn btn-primary">

💾 Guardar sala

</button>


</form>




<input

className="form-control"

placeholder="Buscar sala"

value={buscarSala}

onChange={
e=>setBuscarSala(e.target.value)
}

/>




<table className="dashboard-table">


<thead>

<tr>

<th>ID</th>

<th>Nombre</th>

<th>Capacidad</th>

<th>Acciones</th>


</tr>


</thead>



<tbody>


{
salasFiltradas.map(s=>(


<tr key={s.id}>


<td>{s.id}</td>

<td>{s.name}</td>

<td>{s.capacity}</td>


<td>


<button

className="btn btn-warning"

onClick={()=>editarSala(s)}

>

✏️

</button>



<button

className="btn btn-danger"

onClick={()=>eliminarSala(s.id)}

>

🗑️

</button>


</td>


</tr>


))

}



</tbody>


</table>


</section>





{/* ================= CLASES ================= */}


<section className="dashboard-section">


<h2>📚 Gestión Clases</h2>



<form onSubmit={guardarClase}>


<input

className="form-control"

placeholder="ID deporte sala"

value={formClase.sport_room_id}

onChange={
e=>setFormClase({

...formClase,

sport_room_id:e.target.value

})

}

/>



<input

className="form-control"

placeholder="Día"

value={formClase.day_of_week}

onChange={
e=>setFormClase({

...formClase,

day_of_week:e.target.value

})

}

/>



<input

type="time"

className="form-control"

value={formClase.start_time}

onChange={
e=>setFormClase({

...formClase,

start_time:e.target.value

})

}

/>



<input

type="time"

className="form-control"

value={formClase.end_time}

onChange={
e=>setFormClase({

...formClase,

end_time:e.target.value

})

}

/>



<button className="btn btn-primary">

💾 Guardar clase

</button>



</form>





<table className="dashboard-table">


<thead>

<tr>

<th>ID</th>

<th>Día</th>

<th>Inicio</th>

<th>Fin</th>

<th>Acciones</th>


</tr>


</thead>



<tbody>


{

clases.map(c=>(


<tr key={c.id}>


<td>{c.id}</td>

<td>{c.day_of_week}</td>

<td>{c.start_time}</td>

<td>{c.end_time}</td>



<td>


<button

className="btn btn-warning"

onClick={()=>editarClase(c)}

>

✏️

</button>



<button

className="btn btn-danger"

onClick={()=>eliminarClase(c.id)}

>

🗑️

</button>


</td>


</tr>


))

}


</tbody>


</table>



</section>



</main>


</div>

  );


}


export default DashboardAdmin;