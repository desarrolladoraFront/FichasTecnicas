export const ImageProyect = ( image ) => {
    //crea el div y la imagen que contendra el div
    const div = document.createELement('div');
    const img = document.createElement('img');

    //pone como src de la imagen del parámetro image que provendra del objeto.
    img.setAttribute('src', image)

    return div(img);
}