//1. Import all components:
import { Header } from "../Components/Header.js";
import { TitleAndTable } from "../Components/TitleAndTable.js";
import { Description } from "../Components/Description.js";
//import { Code } from "../Components/Codes.js";
import { ImageProduct } from "../Components/ImageProduct.js";
//import { CharacteristicsTable } from "../Components/CharacteristicsTable.js";
//import { Footer } from "../Components/Footer.js";

//**Test object imported from test.**
import { PRUEBA } from "../test/Accesorios_ob_test.js";
const { type, name, keySap, brand, category, subCategory, description, img} = PRUEBA;

// console.log(type);
// console.log(name);
// console.log(keySap);
// console.log(brand);
// console.log(category, subCategory);
// console.log(subCategory);
//2. Create the variables that define the layout characteristics.
const colorBackground = '#D7762F';
const colorDescAccesorios = 'rgba(215, 118, 47, 0.28)';

Header(colorBackground);
TitleAndTable(colorBackground, type, name, keySap, brand, category, subCategory);
Description(description, colorDescAccesorios);
// CharacteristicsTable(clas);
ImageProduct(img);



//3. Create the function to be exported to index.
// export const ACCESORIOS = () => {

// } 
 