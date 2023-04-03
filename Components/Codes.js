export const createCodes = () => {
    const div = document.createElement('div');
    const codeQR = document.createElement('svg');
    const codeBar = document.createElement('img');

    return div.append(codeQR, codeBar)
}

//hace falta dotarle de elementos cómo los parámetros que va recibir, porque aún no sé sí vendrán en el 
//objeto al que pertenezca la creación. 