let textoIngresado = "";
let textoAMostrar = "";


function encriptarTexto(){

    let textoIngresado = document.querySelector('textarea').value;
const caracteres = Array.from(textoIngresado);


const textoEncriptado = caracteres.map(caracteres => {
    if (caracteres === "a"){
        return "ai";
        }
     else if (caracteres === "e"){
        return "enter";
        }
     else if (caracteres === "i"){
        return "imes";
        }
     else if (caracteres === "o"){
        return "ober";
        }
     else if (caracteres === "u"){
        return "ufat";
        }
    
    return caracteres;

}) .join('');
console.log(textoEncriptado);

const spanEncriptado = document.getElementById('id__contenedor__span__resultado');
const section = document.getElementById('id__seccion__resultado');
section.style.textAlign = "center";
section.style.justifyContent = "normal";
section.style.paddingTop = "15px";
section.textContent = textoEncriptado;

const imgOculta = document.getElementById('ocultar__img');
imgOculta.style.display = "none";



document.addEventListener("DOMContentLoaded", function() {
   const botonOculto = document.getElementById('id__boton__oculto');
   botonOculto.style.display = "block";
});


// hola soy el loquito


}

function desencriptarTexto(){

   let textoIngresado = document.querySelector('textarea').value;
const caracteres = Array.from(textoIngresado);

const textoDesencriptado = caracteres.map(caracteres => {
   if (caracteres === "ai"){
       return "a";
       }
    else if (caracteres === "enter"){
       return "e";
       }
    else if (caracteres === "imes"){
       return "i";
       }
    else if (caracteres === "ober"){
       return "o";
       }
    else if (caracteres === "ufat"){
       return "u";
       }
   
   return caracteres;

}) .join('');



}