// scripts.js  Back Office:con happy path
//login - admin
//crear, modificar o eliminar
//funcion de categoria y subcategoria
const categoria = [
    {
        id: 0,
        name: "Cuidado Corporal",
        subCategoria: [
            { id: 0, name: "Exfoliantes" },
            { id: 1, name: "Hidratantes" },
            { id: 2, name: "Limpieza" }
        ]
    },
    {
        id: 1,
        name: "Cuidado Facial",
        subCategoria: [
            { id: 0, name: "Sérums" },
            { id: 1, name: "Hidratantes" },
            { id: 2, name: "Limpieza" },
            { id: 3, name: "Protector Solar" }
        ]
    },
    {
        id: 2,
        name: "Cuidado Capilar",
        subCategoria: [
            { id: 0, name: "Shampoo" },
            { id: 1, name: "Acondicionador" },
            { id: 2, name: "Tratamientos" }
        ]
    },
    {
        id: 3,
        name: "Maquillaje",
        subCategoria: [
            { id: 0, name: "Ojos" },
            { id: 1, name: "Labios" },
            { id: 2, name: "Rostro" }
        ]
    }
];
//Trae elementos categoria y subcategorias
let selectCategory = document.getElementById("category");
let selectSubCategory = document.getElementById("subcategory");

// Cargar las opciones de categorías en el primer select
const loadCategory = () => {
    categoria.map(item => {
        selectCategory.innerHTML += `<option value="${item.id}">${item.name}</option>`;
    });
};

loadCategory();

// Filtra resultado segun la categoria que se seleccione
const loadSubCategory = (idCategoria) => {
    let options = `<option value="">Selecciona una subcategoria</option>`;

    // Convierte idCategoria a núm porque e.target.value es una cadena
    categoria[Number(idCategoria)].subCategoria.map(item => {
        options += `<option value="${item.id}">${item.name}</option>`;
    });
    selectSubCategory.innerHTML = options;
};

// Evento para cuando se selecciona una categoría
selectCategory.addEventListener("change", function (e) {
    const selectedCategoryId = e.target.value;

     // Si no se selecciona ninguna categoría, restablece
    if (!selectedCategoryId) {
        selectSubCategory.innerHTML = `<option value="">Selecciona una subcategoria</option>`;
    } else {
        // Cargar las subcategorías correspondientes a la categoría
        loadSubCategory(selectedCategoryId);
    }
})

document.getElementById('modelForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = document.getElementById('price').value.trim();
    const category = document.getElementById('category').value;
    const imageFile = document.getElementById('inputGroupFile02').files;

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
     

    const alertDiv = document.getElementById('alert');
    if (errors.length > 0) {
        alertDiv.innerHTML = errors.join('<br>'); // Muestra los errores en el div de alerta
        alertDiv.classList.remove('d-none'); // Hace visible el div de alerta
    } else {
        alertDiv.classList.add('d-none'); // Oculta el div de alerta si no hay errores

        // Creación del objeto JSON
        const model = {
            title,
            description,
            price: parseFloat(price),
            category
        };

        console.log("Modelo creado:", JSON.stringify(model)); // Muestra el objeto JSON en la consola
    }
});