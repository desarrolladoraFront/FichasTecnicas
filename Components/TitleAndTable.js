export const TitleAndTable = () => {
    //crea una sección que será el nodo padre de los otros elementos que voy a crear.
    const section = document.createElement('section');
    //crea los elementos de la sección
    const h1 = document.createElement('h1');
    const listGroup = document.createElement('ul');

    //retorna los elementos en un append del nodo padre.
    return section.append(h1, listGroup)
}

//Ahora me hará falta crear los elementos de la lista, comentar que va 
//recibir ciertos parámetros y serán el contenido que se va mostrar. Agregando que, cuando falte uno, entonces
//lo oculte, y qué cuando falte otro, muestre otras cosas y así. 