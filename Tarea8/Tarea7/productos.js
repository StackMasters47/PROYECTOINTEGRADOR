const categoria = [
    { id: 0, name: "Cuidado Corporal", subCategoria: ["Exfoliantes", "Hidratantes", "Limpieza"] },
    { id: 1, name: "Cuidado Facial", subCategoria: ["Sérums", "Hidratantes", "Limpieza", "Protector Solar"] },
    { id: 2, name: "Cuidado Capilar", subCategoria: ["Shampoo", "Acondicionador", "Tratamientos"] },
    { id: 3, name: "Belleza", subCategoria: ["Ojos", "Labios", "Rostro"] }
];

const productos = [
    { id: 1, titulo: "Shampoo Hidratante", marca: "Dove", desc: "Para cabello seco", precio: 120, cat: "Cuidado Capilar", subcat: "Shampoo" },
    { id: 2, titulo: "Crema Facial", marca: "Nivea", desc: "Hidratante facial", precio: 85, cat: "Cuidado Facial", subcat: "Hidratantes" },
    { id: 3, titulo: "Jabón Líquido", marca: "Palmolive", desc: "Aroma a lavanda", precio: 60, cat: "Cuidado Corporal", subcat: "Limpieza" },
    { id: 4, titulo: "Perfume Floral", marca: "Chanel", desc: "Esencia floral", precio: 1500, cat: "Belleza", subcat: "Rostro" },
    { id: 5, titulo: "Cepillo de Dientes", marca: "Oral-B", desc: "Cepillo suave", precio: 30, cat: "Cuidado Corporal", subcat: "Limpieza" },
    { id: 6, titulo: "Protector Solar", marca: "Eucerin", desc: "FPS 50", precio: 300, cat: "Cuidado Facial", subcat: "Protector Solar" },
    { id: 7, titulo: "Tónico Facial", marca: "La Roche-Posay", desc: "Purificante facial", precio: 200, cat: "Cuidado Facial", subcat: "Limpieza" },
    { id: 8, titulo: "Mascarilla Facial", marca: "L'Oréal", desc: "De arcilla", precio: 110, cat: "Cuidado Facial", subcat: "Hidratantes" },
    { id: 9, titulo: "Acondicionador", marca: "Pantene", desc: "Para cabello rizado", precio: 95, cat: "Cuidado Capilar", subcat: "Acondicionador" },
    { id: 10, titulo: "Gel Antibacterial", marca: "Purell", desc: "Con aloe vera", precio: 50, cat: "Cuidado Corporal", subcat: "Limpieza" }
];

selectedId="";

document.addEventListener("DOMContentLoaded",()=>{
    //Trae elementos categoria y subcategorias
    let selectCategory = document.getElementById("category");
    let selectSubCategory = document.getElementById("subcategory");
    // document.getElementById('visualizarProductos').style.display = 'none'
    
    // Cargar las opciones de categorías en el primer select
    const loadCategory = () => {
        categoria.map(item => {
            selectCategory.innerHTML += `<option value="${item.name}">${item.name}</option>`;
        });
    };

    loadCategory();

    // Filtra resultado segun la categoria que se seleccione
    const loadSubCategory = (categoriaName) => {
        let options = `<option value="">Selecciona una subcategoría</option>`;
    
        // Encuentra la categoría usando el nombre
        const category = categoria.find(c => c.name === categoriaName);
    
        if (category) {
            // Para cada subcategoría, agregarla como una opción
            category.subCategoria.map(subcat => {
                options += `<option value="${subcat}">${subcat}</option>`; // Usar el nombre de la subcategoría como valor y texto
            });
        }
    
        selectSubCategory.innerHTML = options;
    };
    
    // Evento para cuando se selecciona una categoría
    selectCategory.addEventListener("change", function (e) {
        const selectedCategoryName = e.target.value; // Usar el nombre de la categoría seleccionado
    
        // Si no se selecciona ninguna categoría, restablece el select de subcategorías
        if (!selectedCategoryName) {
            selectSubCategory.innerHTML = `<option value="">Selecciona una subcategoría</option>`;
        } else {
            // Cargar las subcategorías correspondientes a la categoría seleccionada
            loadSubCategory(selectedCategoryName);
        }
    });
    
    document.getElementById('modelForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();
        const price = document.getElementById('price').value.trim();
        const category = document.getElementById('category').value;
        const subcategory = document.getElementById('subcategory').value;
        const imageFile = document.getElementById('imageInput').files;
        // console.log(imageFile);
        // console.log(imageFile[0].name);
        let errors = [];

        // Validación de campos
        if (!title) {
            errors.push("El título es obligatorio.");
        }
        if (!description) {
            errors.push("La descripción es obligatoria.");
        }
        if (!price || isNaN(price) || price <= 0) {
            errors.push("El precio debe ser un número válido mayor a 0.");
        }
        if (!category) {
            errors.push("La categoría es obligatoria.");
        }
        if (!subcategory) {
            errors.push("La subcategoría es obligatoria.");
        }
        if (imageFile.length===0){
            errors.push ("Agrega una imagen al producto.");
        }

        const accion = event.submitter.value; 
        if (accion === 'eliminar') {
            eliminarProducto(selectedId+1);
            renderProductos();
        }  



        const alertDiv = document.getElementById('alert');
        if (errors.length > 0) {
            alertDiv.innerHTML = errors.join('<br>'); // Muestra los errores en el div de alerta
            alertDiv.classList.remove('d-none'); // Hace visible el div de alerta
        } else {
            alertDiv.classList.add('d-none'); // Oculta el div de alerta si no hay errores
                if (accion === 'agregar') {
                    const botonVisualizar = document.getElementById('btnVisualizar');
                    addProduct(productos.length+1,title,description,price,category,subcategory)
                    renderProductos();
                    // if(botonVisualizar.getAttribute('aria-pressed') === 'true'){
                    //     botonVisualizar.click();
                    // }
                    
                }else if(accion === 'modificar'){
                    modificarProducto(selectedId+1,title, description, price,category,subcategory);
                    renderProductos();
                }  
                

            //console.log("Modelo creado:", JSON.stringify(productos)); // Muestra el objeto JSON en la consola
        }
    });
});

const botonVisualizar = document.getElementById('btnVisualizar');
const divVisualizarProductos = document.getElementById('visualizarProductos');

botonVisualizar.addEventListener('click', () => {
    const estadoPresionado = botonVisualizar.getAttribute('aria-pressed') === 'true';
    // Cambiar el estado del botón
    if (estadoPresionado) {
        // No presionado
        botonVisualizar.setAttribute('aria-pressed', 'false');
        divVisualizarProductos.style.display = 'none';
    } else {
        // Boton presionado
        botonVisualizar.setAttribute('aria-pressed', 'true');
        renderProductos();
        divVisualizarProductos.style.display = 'block'
    }
});



function renderProductos(){
    const listaProductos=document.getElementById("listaDeProductos");
    listaProductos.innerHTML="";
    productos.forEach(producto=>{
        const productoHTML=`
            <button type="button" class="list-group-item list-group-item-action" data-id="${producto.id}">
                <div class="row w-100 justify-content-between align-items-center">
                    <div class="col-lg-1">
                            <p class="mb-1 text-center">${producto.id}</p>
                    </div>
                    <div class="img-fluid col-lg-1 text-center">
                        <img src="img1.jpeg" class="img-thumbnail" style="width: 50px; height: 50px;" alt="Producto">
                    </div>
                    <div class="col-lg-3">
                        <h5 class="mb-1 text-center">${producto.titulo}</h5>
                    </div>
                    <div class="col-lg-1">
                        <p class="mb-1 text-center"> $${producto.precio}</p>
                    </div>
                    <div class="col-lg-2">
                        <p class="mb-1 text-center">${producto.cat}</p>
                    </div>
                    <div class="col-lg-2 text-wrap text-break">
                        <p class="mb-1 text-center"> ${producto.subcat}</p>
                    </div>
                </div>
            </button>
            `;
            listaProductos.innerHTML += productoHTML;
    });
    
    // Asignando seleccion de IDs a los eventos de los botones
    document.querySelectorAll('.list-group-item').forEach(boton => {
        boton.addEventListener('click', function () {
            const productoId = this.getAttribute('data-id'); // Obtener el ID
            selectedId=productoId-1;
            console.log(selectedId);
            rellenarForm(selectedId);
            // Desplazar la ventana hacia arriba
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function rellenarForm(){
    document.getElementById('title').value=productos[selectedId].titulo;
    document.getElementById('description').value=productos[selectedId].desc;
    document.getElementById('price').value=productos[selectedId].precio;
    document.getElementById('category').value=productos[selectedId].cat;
    document.getElementById('subcategory').value=productos[selectedId].subcat;
}

// Función para agregar un producto a la lista
function addProduct(id,titulo, descripcion, precio,cat,subcat) {
    const producto = {
        id,
        titulo,
        descripcion,
        precio,
        cat,
        subcat
    };
    productos.push(producto);
    // console.log(`Producto agregado: ${JSON.stringify(productos)}`);
}

function eliminarProducto(id){
    console.log("Funcion eliminar")
    const productosActualizados = productos.filter(producto => producto.id !==id);

    productosActualizados.forEach((producto,index)=>{
        producto.id = index+1;
    })

    productos.length =0;
    productos.push(...productosActualizados);
}

function modificarProducto(id,titulo,descripcion,precio,cat,subcat){
    const producto = {
        id,
        titulo,
        descripcion,
        precio,
        cat,
        subcat
    };
    const index = productos.findIndex(producto=> producto.id ===id);

    if (index !==-1){
        productos[index]={...productos[index],...producto};
    }else{
        console.log("No se encontró el producot.")
    }
}

//Modelo de datos a exportar "productos"