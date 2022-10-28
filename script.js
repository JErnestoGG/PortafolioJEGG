
/* Añadiendo interactividad al boton de menu*/

const boton=document.getElementById("burger");
const claseMenu=document.getElementById("menu");

const aggClase= function  () {
    claseMenu.classList.toggle("visible");
   
}

boton.onclick=aggClase;