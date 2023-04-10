import { Header } from "../Components/Header.js";
import { TitleAndTable } from "../Components/TitleAndTable.js";
import { Description } from "../Components/Description.js";
import { ImageProduct } from "../Components/ImageProduct.js";
import { CharacteristicsTable } from "../Components/CharacteristicsTable.js";


const d = "fjasdlfjkaslfjadslkfjlasjfdalsdjfalsdjfalsdfjaldsjf";
const img = "https://cafeetrusca.com/img/producto/IBP-002.webp";
const color = '#D7762F';
const colorDescAccesorios = 'rgba(215, 118, 47, 0.28)';
const ingre = "Sustituto de crema [grasa vegetal, azucares añadidos (jarabe de maíz y azúcar de caña), caseinatos, fosfato dipotásico secundario, ásteres de propilenglicol de ácidos grasos, mono y diglicéridos, silicoaluminato de sodio, sal, lecitina de soya, carragenina, saborizante artificial y bixina cis], azúcares añadidos (azúcar de caña), leche descremada, café, cocoa alcalina y saborizante artificial."
// //Funciones para tomar elementos y cambiarles el contenido:
// const claveKey = 'IBN-09090909'
// const sap = () => {
//     const keySap = document.getElementById('keySap');
// keySap.innerHTML = '';
// keySap.innerHTML = 'Clave: ' + claveKey;
// }
Header(color);
TitleAndTable(3, color);
Description(d, colorDescAccesorios);
CharacteristicsTable(3);
ImageProduct(img);


 