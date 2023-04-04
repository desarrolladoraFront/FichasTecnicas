export const CreateHeader = () => {
    //Toma el elemento con id header
    const header = document.getElementById('header');

    // crea el elemento img que será el logo y el div que lo contendra.
    const div = document.createElement('div');
    const logo = document.createElement('img');

    //Crea el boton
    const button = document.createElement('button');
    button.textContent = 'Imprimir ficha';

    //Agrega la fuente del logo y su classname
    logo.setAttribute('src', 'https://i.postimg.cc/y8j19qhw/logo.png');
    logo.className = 'logoEtrusca';

    //renderiza los elementos
    div.append(logo);
    
    return header.append(div, button);
}

//falta el estilo