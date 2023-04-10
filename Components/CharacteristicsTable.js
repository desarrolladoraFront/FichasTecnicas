export const CharacteristicsTable = (id) => {
    //crea el contenedor de la lista
    const div = document.getElementById('containerImageAndIngredients');
    //crea la lista
    const table = document.createElement('table');

    if( id === 3) {

        const celdaPeso = document.createElement('tr');
        celdaPeso.textContent = 'Peso:';
        celdaPeso.style.fontWeight = 600;
        const peso = document.createElement('td');
        peso.textContent = 1400 + 'gr.'; //aquí irá la variable peso.
        celdaPeso.append(peso);

        const celdaMedidas = document.createElement('tr');
        celdaMedidas.textContent = 'Medidas:'
        celdaMedidas.style.fontWeight = 600;
        const weight = document.createElement('td');
        const height = document.createElement('td');
        const pul = document.createElement('td');
        weight.textContent = '23cm';
        height.textContent = '5cm';
        pul.textContent = '34cm';
        celdaMedidas.append(weight, height, pul)

        table.append(celdaPeso, celdaMedidas);
        return div.append(table);
    }
    // //crea los elementos de la lista
    // const presentation = document.createElement('li');

    // //renderiza los elementos de la lista dentro del contenedor
    // list.append(presentation);

    // //renderiza la tabla en el div correspondiente.
    // return div.append(list)
}

//hace falta agregarle todas las características que lo van a diferenciar entre los diferentes elementos.