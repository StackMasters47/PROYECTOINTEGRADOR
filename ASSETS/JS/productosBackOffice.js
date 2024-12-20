// const subcategorias = {
//     "Cuidado Corporal":["Exfoliantes", "Hidratantes", "Limpieza"],
//     "Cuidado Facial": ["Sérums", "Hidratantes", "Limpieza", "Protector Solar"],
//     "Cuidado Capilar": ["Shampoo", "Acondicionador", "Tratamientos"],
//     "Belleza":["Ojos", "Labios", "Rostro"]
// }
let productos = [];
//End point para obtener todos los productos
const url = "http://3.14.129.170/api/v1/products";

selectedId="";

document.addEventListener("DOMContentLoaded",()=>{   
    document.getElementById('modelForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
        const title = document.getElementById('title').value.trim();
        const description = document.getElementById('description').value.trim();
        const price = document.getElementById('price').value.trim();
        const category = document.getElementById('category').value;
        const stock = document.getElementById('stock').value;
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
            errors.push("El precio es necesario.");
        }
        if (!category) {
            errors.push("La categoría es obligatoria.");
        }

        if (!stock || isNaN(stock) || stock <= 0) {
            errors.push("El stock es necesario.");
        }


        const accion = event.submitter.value; 
        
        const alertDiv = document.getElementById('alert');
        if (errors.length > 0 && accion !== "eliminar") {
            alertDiv.innerHTML = errors.join('<br>'); // Muestra los errores en el div de alerta
            alertDiv.classList.remove('d-none'); // Hace visible el div de alerta
        } else {
            alertDiv.classList.add('d-none'); // Oculta el div de alerta si no hay errores
                if (accion === 'agregar') {
                    const botonVisualizar = document.getElementById('btnVisualizar');
                    addProduct(title,description,price,category,stock).then(() => {
                        renderProductos();
                    });
                    // if(botonVisualizar.getAttribute('aria-pressed') === 'true'){
                    //     botonVisualizar.click();
                    // }
                    
                }else if(accion === 'modificar'){
                    modificarProducto(selectedId+1,category,title, description, price,stock).then(() => {
                        renderProductos();
                    });
                }else if (accion === 'eliminar') {
                    eliminarProducto(selectedId+1).then(() => {
                        renderProductos();
                    });
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


function rellenarForm(id) {
    // Buscar el producto con el id proporcionado
    const producto = productos.find(p => p.id === id); 

    if (producto) {
        // Llenar el formulario con la información del producto encontrado
        document.getElementById('title').value = producto.name;
        document.getElementById('description').value = producto.description;
        document.getElementById('price').value = producto.price;
        document.getElementById('category').value = producto.category;
        document.getElementById('stock').value = producto.stock;
    } else {
        console.error("Producto no encontrado con ID:", id);
    }
}


async function addProduct(name, description, price, category, stock) {
    const producto = {
        category,
        name,
        description,
        price,
        stock
    };

    const url = `http://3.14.129.170/api/v1/new-product`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Indicar que el cuerpo es JSON
            },
            body: JSON.stringify(producto), // Convertir el objeto a JSON
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        console.log('Producto guardado:', data);

        // Actualizar la lista de productos después de agregar
        await renderProductos();
    } catch (error) {
        console.error('Error al guardar el producto:', error);
    }
}

async function eliminarProducto(id) {
    const url = `http://3.14.129.170/api/v1/delete-product/${id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar el producto: ${response.status}`);
        }

        console.log(`Producto con ID ${id} eliminado con éxito.`);
    } catch (error) {
        console.error('Error al intentar eliminar el producto:', error);
    }
}

async function renderProductos() {
    await obtenerProductos(); // Espera a que los productos sean obtenidos antes de renderizar
}

async function modificarProducto(id, category, name, description, price, stock) {
    const producto = {
        id,
        category,
        name,
        description,
        price,
        stock
    };

    const url = `http://3.14.129.170/api/v1/update-product/${id}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Indicar que el cuerpo es JSON
            },
            body: JSON.stringify(producto), // Convertir el objeto a JSON
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const updatedProduct = await response.json();
        console.log('Producto actualizado:', updatedProduct);

        // Actualizar la lista de productos después de modificar
        await renderProductos();
    } catch (error) {
        console.error('Error al modificar el producto:', error);
    }
}


async function obtenerProductos() {
    try {
        const response = await fetch(url);

        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error al obtener los productos: ${response.statusText}`);
        }

        // Parsear la respuesta a JSON
        productos = await response.json();

        //Renderizar los productos en la pagina
        const listaProductos=document.getElementById("listaDeProductos");
        listaProductos.innerHTML="";
        productos.forEach(producto=>{
            const productoHTML=`
                <button type="button" class="list-group-item list-group-item-action" data-id="${producto.id}">
                    <div class="row w-100 justify-content-between align-items-center">
                        <div class="col-lg-1">
                                <p class="mb-1 text-center">${producto.id}</p>
                        </div>
                        <div class="col-lg-3">
                            <h5 class="mb-1 text-center">${producto.name}</h5>
                        </div>
                        <div class="col-lg-1">
                            <p class="mb-1 text-center"> $${producto.price}</p>
                        </div>
                        <div class="col-lg-2">
                            <p class="mb-1 text-center">${producto.category}</p>
                        </div>
                        <div class="col-lg-2 text-wrap text-break">
                            <p class="mb-1 text-center"> ${producto.stock}</p>
                        </div>
                    </div>
                </button>
                `;
                listaProductos.innerHTML += productoHTML;
        });

       // Asignando selección de IDs a los eventos de los botones después de renderizar
        document.querySelectorAll('.list-group-item').forEach(boton => {
        boton.addEventListener('click', function () {
            const productoId = this.getAttribute('data-id'); // Obtener el ID
            selectedId = productoId - 1;  // Ajuste de ID para acceder al índice
            //console.log(selectedId);
            rellenarForm(selectedId+1);
            // Desplazar la ventana hacia arriba
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}
