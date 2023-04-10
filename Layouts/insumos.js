import { Header } from "../Components/Header.js";

export const createInsumos = ( id, arr ) => {
    // revisa que realmente haya entrado con un id de insumo
    if (id === 1) {
        //toma ROOT para manipular el dom e incluir el resto de elementos.
       const ROOT = document.getElementById('main');
       //crea los elementos:
       Header();

    }
}