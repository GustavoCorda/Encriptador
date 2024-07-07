let textoIngresado = "";
let textoAMostrar = "";

function encriptarTexto(){

    let textoIngresado = document.querySelector('textarea').value;
let caracteres = Array.from(textoIngresado);


let textoEncriptado = caracteres.map(caracteres => {
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

let spanEncriptado = document.getElementById('id__contenedor__span__resultado');
let section = document.getElementById('id__seccion__resultado');
section.style.textAlign = "center";
section.style.justifyContent = "space-between";
section.style.padding = "15px 10px";
// spanEncriptado.style.height = "500px";
spanEncriptado.textContent = textoEncriptado;

let imgOculta = document.getElementById('ocultar__img');
imgOculta.style.display = "none";
botonCopiar = document.getElementById('id__boton__oculto');
botonCopiar.style.display = "block";

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

console.log(caracteres);


}