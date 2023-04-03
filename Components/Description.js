export const Description = ( description ) => {
    const div = documentCreateElement('div');
    const p = document.createElement('p');

    p.textContent = description
    return div.append(p);
}

//falta el estilo pero ya tiene el parametro.