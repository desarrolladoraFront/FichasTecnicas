console.log('hola');

    //la imagen proviene del servidor y se ejecuta con una petición:
    fetch('https://ejemplo.com/datos')
    .then(response => response.json())
    .then(data => console.log(data)) 
    .catch(error => console.error(error));

let input = '';

const enviarID = () => {
    input = document.getElementById('inputID').value;
    if (input === '1') {
        location.href = './Insumos/index.html';
    } else if( input === '2'){
        location.href = './Maquinas/index.html';
        Footer();
    }else if( input === '3'){
        location.href = './Accesorios/index.html';}
    else{'a ver como encadeno las otras' }
}
