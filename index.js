//import { createHeader } from "./Maquinas/CreateElements.js";

console.log('hola');

let input = '';

const enviarID = () => {
    input = document.getElementById('inputID').value;
    if (input === '1') {
        location.href = './Insumos/index.html';
    } else if( input === '2'){
        location.href = './Maquinas/index.html';
    }else if( input === '3'){
        location.href = './Accesorios/index.html';}
    else{'a ver como encadeno las otras' }
}

//createHeader();