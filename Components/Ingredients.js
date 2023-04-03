export const Ingredients = ( ingredients ) => {
    const div = documentCreateElement('div');
    const p = document.createElement('p');

    p.textContent = ingredients
    return div.append(p);
}

//falta el estilo pero ya tiene el parametro.