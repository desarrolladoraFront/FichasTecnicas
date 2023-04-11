export const TitleAndTable = (clas, colorBackground, nameOfproduct, keySap, brand, category, flavor, model, subCategory, color) => {
    //Take the section element to render the following elements in it.
    const section = document.getElementById('section');
    //Add the color that differentiates the data sheets.
    section.style.backgroundColor = colorBackground;

    //Creates the h1 object that refers to the product name.
    const h1 = document.createElement('h1');
    h1.textContent = nameOfproduct;
    h1.classList = 'title';

    //Creates the presentation table, with the characteristics of the product.
    const tableContent = document.createElement('table');
    tableContent.classList = '.list-group';
    
        //Table for insumos.
        if (clas === 1) {
            //Variables for KeySap.
            const CONTAINER_KEY = document.createElement('tr');
            const TEXT_KEY = document.createElement('td');
            const KEY = document.createElement('td');

            //Variables for Brand
            const CONTAINER_BRAND = document.createElement('tr');
            const TEXT_BRAND = document.createElement('td');
            const BRAND = document.createElement('td');

            //Variables for category
            const CONTEINER_CATEGORY = document.createElement('tr');
            const TEXT_CATEGORY = document.createElement('td');
            const CATEGORY = document.createElement('td');

            const CONTAINER_FLAVOR = document.createElement('tr');
            const TEXT_FLAVOR = document.createElement('td');
            const FLAVOR = document.createElement('td');

            //Content to be included in the table:
            TEXT_KEY.textContent = "Clave: ";
            KEY.textContent = keySap;
        
            TEXT_BRAND.textContent = 'Marca :';
            BRAND.textContent = brand;

            TEXT_CATEGORY.textContent = 'Categoría :';
            CATEGORY.textContent = category;

            TEXT_FLAVOR.textContent = 'Sabor';
            FLAVOR.textContent = flavor;

            //Renders the elements of the table in your cell.
            CONTAINER_KEY.append(TEXT_KEY, KEY);
            CONTAINER_BRAND.append(TEXT_BRAND, BRAND);
            CONTEINER_CATEGORY.append(TEXT_CATEGORY, CATEGORY);
            CONTAINER_FLAVOR.append(TEXT_FLAVOR, FLAVOR);

            //Renders the table.
            tableContent.append(CONTAINER_KEY, CONTAINER_BRAND, CONTEINER_CATEGORY, CONTAINER_FLAVOR);

            // Returns the section to appear in the DOM.
            return section.append(h1, tableContent);

            //Table for machinery
            } if (clas === 2) {
                //Variables for KeySap.
                const CONTAINER_KEY = document.createElement('tr');
                const TEXT_KEY = document.createElement('td');
                const KEY = document.createElement('td');

                //Variables for Brand
                const CONTAINER_BRAND = document.createElement('tr');
                const TEXT_BRAND = document.createElement('td');
                const BRAND = document.createElement('td');

                //Variables for Model.
                const CONTAINER_MODEL = document.createElement('tr');
                const TEXT_MODEL = document.createElement('td');
                const MODEL = document.createElement('td');

                //Variables for Category.
                const CONTAINER_CATEGORY = document.createElement('tr');
                const TEXT_CATEGORY = document.createElement('td');
                const CATEGORY = document.createElement('td');

                //Variables for Color.
                const CONTAINER_COLOR = document.createElement('tr');
                const TEXT_COLOR = document.createElement('td');
                const COLOR = document.createElement('td');

                //Content to be included in the table:
                TEXT_KEY.textContent = "Clave :";
                KEY.textContent = keySap;
    
                TEXT_BRAND.textContent = 'Marca :';
                BRAND.textContent = brand;

                TEXT_MODEL.textContent = 'Modelo :';
                MODEL.textContent = model;

                TEXT_COLOR.textContent = 'Categoría :';
                CATEGORY.textContent = category;

                TEXT_COLOR.textContent = 'Color :';
                COLOR.textContent = color;

                 //Renders the elements of the table in your cell.
                CONTAINER_KEY.append(TEXT_KEY, KEY);
                CONTAINER_BRAND.append(TEXT_BRAND, BRAND);
                CONTAINER_MODEL.append(TEXT_MODEL, MODEL);
                CONTAINER_CATEGORY.append(TEXT_CATEGORY, CATEGORY);
                CONTAINER_COLOR.append(TEXT_COLOR, COLOR);

                 //Renders the table.
                tableContent.append(CONTAINER_KEY, CONTAINER_BRAND, CONTAINER_MODEL, CONTAINER_CATEGORY, CONTAINER_COLOR);

                //Returns the section to appear in the DOM.
                return section.append(h1, tableContent);

                //Table for Accesories.
                } if (clas === 3 ) {
                    //Variables for keySap.
                    const CONTAINER_KEY = document.createElement('tr');
                    const TEXT_KEY = document.createElement('td');
                    const KEY = document.createElement('td');

                    //Variables for Brand.
                    const CONTAINER_BRAND = document.createElement('tr');
                    const TEXT_BRAND = document.createElement('td');
                    const BRAND = document.createElement('td');

                    //Variables for Category.
                    const CONTAINER_CATEGORY = document.createElement('tr');
                    const TEXT_CATEGORY = document.createElement('td');
                    const CATEGORY = document.createElement('td');

                    //Variables for Subcategory.
                    const CONTAINER_SUBCATEGORY = document.createElement('tr');
                    const TEXT_SUBCATEGORY = document.createElement('td');
                    const SUBCATEGORY = document.createElement('td');


                     //Content to be included in the table:
                    TEXT_CATEGORY.textContent = "Clave :"; 
                    KEY.textContent = keySap;
    
                    TEXT_BRAND.textContent = 'Marca :';
                    BRAND.textContent = brand;

                    TEXT_CATEGORY.textContent = 'Categoría:';
                    CATEGORY.textContent = category;

                    TEXT_SUBCATEGORY.textContent = 'Subcategoría:';
                    SUBCATEGORY.textContent = subCategory;

                    //Renders the elements of the table in your cell.
                    CONTAINER_CATEGORY.append(TEXT_CATEGORY, KEY);
                    CONTAINER_BRAND.append(TEXT_BRAND, BRAND);
                    CONTAINER_CATEGORY.append(TEXT_CATEGORY, CATEGORY);
                    CONTAINER_SUBCATEGORY.append(TEXT_SUBCATEGORY, SUBCATEGORY);
                    
                    //Renders the table.
                    tableContent.append(CONTAINER_CATEGORY, CONTAINER_BRAND, CONTAINER_CATEGORY, CONTAINER_SUBCATEGORY);

                    //Returns the section to appear in the DOM.
                    return section.append(h1, tableContent);
        }
}

