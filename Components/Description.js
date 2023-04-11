export const Description = (description, colorBackground) => {
    //Take the element with the id containerDesciption.
    const container = document.getElementById('containerDescription');

    //It sets the background color depending on the type of data sheet.
    container.style.backgroundColor = colorBackground;
    //Creates the paragraph element that will contain the text.

    const p = document.createElement('p');
    p.textContent =  description;

    //Returns the container that renders the paragraph.
    return container.append(p);
}

