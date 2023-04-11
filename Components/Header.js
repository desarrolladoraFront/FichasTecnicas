export const Header = (color) => {
    //Takes the element with id header.
    const header = document.getElementById('header');
    //Add the color with the parameter received by the function.
    header.style.backgroundColor = color;
    
    //Create two elements: div and img that will contain the logo.
    const div = document.createElement('div');
    const logo = document.createElement('img');

   //Create the button to print the card.
    const button = document.createElement('button');
    button.textContent = 'Imprimir ficha';

    //Add the source of the logo and its classname.
    div.classList = 'logo';
    logo.setAttribute('src', 'https://i.postimg.cc/y8j19qhw/logo.png');
    logo.className = 'logoEtrusca';

    //Renders the elements.
    div.append(logo);

    return header.append(div, button);
}

