
/* Añadiendo interactividad al boton de menu*/

const boton=document.getElementById("burger");
const claseMenu=document.getElementById("menu");
const txtName=document.getElementById("nombre");
const txtMail=document.getElementById("mail");
const txtAsunto=document.getElementById("asunto");
const txtMsj=document.getElementById("msj");
const formButton=document.getElementById("btnEnviar");

const aggClase= function  () {
    claseMenu.classList.toggle("visible");
   
}

boton.onclick=aggClase;

const validarForm= function (){

    if( txtName.value === ""  || (txtName.value.match(/^[a-zñ]$/i))){
        swal({
            title: "Advertencia",
            text: "Por favor, ingrese su nombre",
            icon: "warning",
            dangerMode: true,
          })
        txtName.focus();
        return false;
    }

    else if(!validarMail(txtMail.value)){
        swal({
            title: "Advertencia",
            text: "Por favor, ingrese un correo válido",
            icon: "warning",
            dangerMode: true,
          })
        txtCorreo.focus();
        return false;
    }

    else if( txtAsunto.value === ""  || (txtAsunto.value.match(/^[a-zñ]$/i))){
        swal({
            title: "Advertencia",
            text: "Por favor, un asunto",
            icon: "warning",
            dangerMode: true,
          })
        txtName.focus();
        return false;
    }

    else if( txtMsj.value === ""  || (txtName.Msj.match(/^[a-zñ]$/i))){
        swal({
            title: "Advertencia",
            text: "Por favor, ingrese su mensaje",
            icon: "warning",
            dangerMode: true,
          })
        txtName.focus();
        return false;
    }



return true;



}




const validarMail= email =>{
return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

}

formButton.onclick=validarForm;