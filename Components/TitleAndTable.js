export const TitleAndTable = (id, color) => {
    const section = document.getElementById('section');  //crea una sección que será el nodo padre de los otros elementos que voy a crear.
    section.style.backgroundColor = color;

    const nombreProducto = document.createElement('h1');
    nombreProducto.textContent = 'Chocolate abuelita'
    nombreProducto.classList = 'title';
    //crea la tabla de presentación, con las características del producto.
    const tableContent = document.createElement('table');
    tableContent.classList = '.list-group';
    //tabla para insumos
        if (id === 1) {
        //tabla para insumos
            const celdaClave = document.createElement('tr');
            const textoClave = document.createElement('td');
            const clave = document.createElement('td');

            const celdaMarca = document.createElement('tr');
            const textoMarca = document.createElement('td');
            const marca = document.createElement('td');

            const celdaCategoria = document.createElement('tr');
            const textoCategoria = document.createElement('td');
            const categoria = document.createElement('td');

            const celdaSabor = document.createElement('tr');
            const textoSabor = document.createElement('td');
            const sabor = document.createElement('td');

        //contenido que va llevar la tabla
            textoClave.textContent = "Clave:"; //aquí tendré que poner las variables que guarden los elementos de mis objetos.
            clave.textContent = "Hfsjdfals";
        
            textoMarca.textContent = 'Marca:';
            marca.textContent = 'VANS'

            textoCategoria.textContent = 'Categoría:';
            categoria.textContent = 'Leches'

            textoSabor.textContent = 'Sabor';
            sabor.textContent = 'Chocolate'

            celdaClave.append(textoClave, clave)
            celdaMarca.append(textoMarca, marca)
            celdaCategoria.append(textoCategoria, categoria)
            celdaSabor.append(textoSabor, sabor)

            tableContent.append(celdaClave, celdaMarca, celdaCategoria, celdaSabor);
           return section.append(nombreProducto, nombreProducto, tableContent);

        } if (id === 2) {
             //tabla para maquinaria
        const celdaClave = document.createElement('tr');
        const textoClave = document.createElement('td');
        const clave = document.createElement('td');

        const celdaMarca = document.createElement('tr');
        const textoMarca = document.createElement('td');
        const marca = document.createElement('td');

        const celdaModelo = document.createElement('tr');
        const textoModelo = document.createElement('td');
        const modelo = document.createElement('td');
        
        const celdaCategoria = document.createElement('tr');
        const textoCategoria = document.createElement('td');
        const categoria = document.createElement('td');

        const celdaSubcategoria = document.createElement('tr');
        const textoSubcategoria = document.createElement('td');
        const subcategoria = document.createElement('td');

        const celdaColor = document.createElement('tr');
        const textoColor = document.createElement('td');
        const color = document.createElement('td');

    //contenido que va llevar la tabla
        textoClave.textContent = "Clave:"; //aquí tendré que poner las variables que guarden los elementos de mis objetos.
        clave.textContent = "Hfsjdfals";
    
        textoMarca.textContent = 'Marca:';
        marca.textContent = 'VANS'

        textoModelo.textContent = 'Modelo:';
        modelo.textContent = 'Novo';

        textoCategoria.textContent = 'Categoría:';
        categoria.textContent = 'Leches'

        textoSubcategoria.textContent = 'Subcategoría:';
        subcategoria.textContent = 'Molinos';

        textoColor.textContent = 'Color:';
        color.textContent = 'Amarillo';


        celdaClave.append(textoClave, clave);
        celdaMarca.append(textoMarca, marca);
        celdaModelo.append(textoModelo, modelo);
        celdaCategoria.append(textoCategoria, categoria);
        celdaSubcategoria.append(textoSubcategoria, subcategoria);
        celdaColor.append(textoColor, color)

        

        tableContent.append(celdaClave, celdaMarca, celdaModelo, celdaCategoria, celdaSubcategoria, celdaColor);
        return section.append(nombreProducto, nombreProducto, tableContent);

        } if (id === 3 ) {
        //tabla para maquinaria
        const celdaClave = document.createElement('tr');
        const textoClave = document.createElement('td');
        const clave = document.createElement('td');

        const celdaMarca = document.createElement('tr');
        const textoMarca = document.createElement('td');
        const marca = document.createElement('td');

        const celdaCategoria = document.createElement('tr');
        const textoCategoria = document.createElement('td');
        const categoria = document.createElement('td');

        const celdaSubcategoria = document.createElement('tr');
        const textoSubcategoria = document.createElement('td');
        const subcategoria = document.createElement('td');

        //contenido que va llevar la tabla
        textoClave.textContent = "Clave:"; //aquí tendré que poner las variables que guarden los elementos de mis objetos.
        clave.textContent = "Hfsjdfals";
    
        textoMarca.textContent = 'Marca:';
        marca.textContent = 'VANS'

        textoCategoria.textContent = 'Categoría:';
        categoria.textContent = 'Leches'

        textoSubcategoria.textContent = 'Subcategoría:';
        subcategoria.textContent = 'Molinos';

        celdaClave.append(textoClave, clave);
        celdaMarca.append(textoMarca, marca);
        celdaCategoria.append(textoCategoria, categoria);
        celdaSubcategoria.append(textoSubcategoria, subcategoria);
        
        tableContent.append(celdaClave, celdaMarca, celdaCategoria, celdaSubcategoria);
        return section.append(nombreProducto, nombreProducto, tableContent);
        }
}

//ahora me falta el estilo y cuidar los parámetros que entraran como variables.