export const CharacteristicsTable = () => {
    //crea el contenedor de la lista
    const div = document.createElement('div');
    //crea la lista
    const list = document.createElement('ul');
    //crea los elementos de la lista
    const presentation = document.createElement('li');

    //renderiza los elementos de la lista dentro del contenedor
    list.append(presentation);

    //renderiza la tabla en el div correspondiente.
    return div.append(list)
}

//hace falta agregarle todas las características que lo van a diferenciar entre los diferentes elementos.