export const Description = (description, color) => {
    const container = document.getElementById('containerDescription');
    container.style.backgroundColor = color
    const p = document.createElement('p');
    p.textContent =  description;

    return container.append(p);
}

//falta el estilo pero ya tiene el parametro.