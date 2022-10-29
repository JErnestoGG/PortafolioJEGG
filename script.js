
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
        alert(`Ingrese un nombre válido`);
        txtName.focus();
        return false;
    }

    else if(!validarMail(txtMail.value)){
        alert(`Ingrese un correo válido`);
        txtCorreo.focus();
        return false;
    }

    if( txtAsunto.value === ""  || (txtAsunto.value.match(/^[a-zñ]$/i))){
        alert(`Ingrese un asunto válido`);
        txtName.focus();
        return false;
    }

    if( txtMsj.value === ""  || (txtName.Msj.match(/^[a-zñ]$/i))){
        alert(`Ingrese un mensaje válido`);
        txtName.focus();
        return false;
    }



return true;



}




const validarMail= email =>{
return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

}

formButton.onclick=validarForm;