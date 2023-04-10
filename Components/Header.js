export const Header = (color) => {
    //Toma el elemento con id header
    const header = document.getElementById('header');
    header.style.backgroundColor = color;

    // crea el elemento img que será el logo y el div que lo contendra.
    const div = document.createElement('div');
    const logo = document.createElement('img');

    //Crea el boton
    const button = document.createElement('button');
    button.textContent = 'Imprimir ficha';

    //Agrega la fuente del logo y su classname
    div.classList = 'logo';
    logo.setAttribute('src', 'https://i.postimg.cc/y8j19qhw/logo.png');
    logo.className = 'logoEtrusca';

    //renderiza los elementos
    div.append(logo);

    return header.append(div, button);
}

//falta el estilo