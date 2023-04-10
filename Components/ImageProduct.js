export const ImageProduct = ( image ) => {
    //crea el div y la imagen que contendra el div
  const container = document.getElementById('img'); 
  const img = document.createElement('img');

  //pone como src de la imagen del parámetro image que provendra del objeto.
  img.setAttribute('src', image);
  img.classList = ('imgProduct');

  return container.append(img);
}