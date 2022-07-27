import React from "react";
import { useNavigate } from "react-router";

const Admin=()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    const navigate=useNavigate()
    console.log(user.admin)
    return (
  
    <div class='p-6'>
        {user.admin && <h1  class='p-6 is-size-4'>Bienvenido {user.completeName}</h1>}
        <div class='p-6'></div>
        {user.admin?( <div class='is-flex is-flex-direction-row is-justify-content-space-around'>
        <button class="button is-medium is-rounded is-color3" onClick={()=>navigate('/users_list')}>ADMINISTRAR USUARIOS</button>
        <button class="button is-medium is-rounded is-color3" onClick={()=>navigate('/update_prod')}>ADMINISTRAR PRODUCTOS</button>
        </div>):<h1 class="is-size-1">UNAUTHORIZED</h1>}
        <div class='p-6'></div>
        <div class='p-6'></div>
    </div>
    )
    }
export default Admin