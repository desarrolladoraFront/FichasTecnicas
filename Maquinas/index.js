//constantes que toman los divs que crearán los elementos 
const NameProduct = document.getElementById('name-of-product');
const KeySap = document.getElementById('key-sap');
const Brand = document.getElementById('brand');
const BarCode = document.getElementById('barCode');
const QRcode = document.getElementById('QRcode');
const Category = document.getElementById('category');
const Model = document.getElementById('model');
const Color = document.getElementById('color');
const Description = document.getElementById('description');
const Voltaje = document.getElementById('voltage');
const Length = document.getElementById('lenght');
const Width = document.getElementById('width');
const Height = document.getElementById('height');
const Weight = document.getElementById('weight');
const Warranty = document.getElementById('warranty');


//Ahora recibo el arreglo y lo almaceno en un objeto pero de javascript
function procesarJSON(objetoJSON) {
  // desestructuro el objeto, creando varibles que alojaran cada propiedad.
  const { keySap, name, brand, barCode, QRcode, department, category, model,
  color, description, voltage, width, height, weight, warranty} = objetoJSON;
  // Realizó operaciones con las propiedades.
  NameProduct.innerHTML = name;
  // KeySap.innerHTML = "<b>Clave: </b>"  
  // Brand.innerHTML = "<b>Marca: </b>"
  // BarCode.innerHTML = 
  // QRcode.innerHTML = 
  // Category.innerHTML ="<b>Categoría: </b>"
  // Model.innerHTML = 
  // Color.innerHTML = 
  // Description.innerHTML = 
  // Voltaje.innerHTML = 
  // Length.innerHTML = 
  // Width.innerHTML = 
  // Height.innerHTML = 
  // Weight.innerHTML = 
  // Warranty.innerHTML =
    
  }
  
  // Ejemplo de uso de la función
  const objeto = { 
  "class": 3, //maquinaria
  "keySap": "IBN-MCA-001",
  "name": "CAFETERA RENEKA VIVA 1 GRUPO AP 110V",
  "brand": "RENEKA",
  "barCode": "",
  "QRcode": "",
  "department": "Maquinaria",
  "category": "Cafetera",
  "model": "Viva 1 grupo ap",
  "color": "Plata",
  "description": "CAFETERA PARA ESPRESSO RENEKA VIVA 1 GRUPO AP 110V. EQUIPADA CON UNA LANACETA DE VAPOR, UNA LLAVE DE AGUA CALIENTE DE CONTROL ELECTRÓNICO, MICROPROCESADOR ELECTRÓNICO. CALDERA DE 5.8L, Y 2100W DE POTENCIA. PATENTADA CON AROMA PERFECT QUE GARANTIZA UNA PRESIÓN DE PRENSADO ÓPTIMA PARA UNA TAZA PERFECTA EN LA EXTRACCIÓN SIN RESIDUOS DE CAFÉ. HECHO EN ITALIA ",
  "voltage": "110V",
  "length": "65.5",
  "width": "57cm",
  "height": "71cm",
  "weight": "55000g",
  "warranty": "Garantía etrusca: 1 año por defecto de fábrica /en partes eléctricas o mala operación no aplica"
};

const foto ="https://cafeetrusca.com/img/maquinas/MCA-001.png"


  procesarJSON(objeto);
  

