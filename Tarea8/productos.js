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
        name: "Belleza",
        subCategoria: [
            { id: 0, name: "Ojos" },
            { id: 1, name: "Labios" },
            { id: 2, name: "Rostro" }
        ]
    }
];

// Referencias a elementos del DOM
const selectCategory = document.getElementById("category");
const selectSubCategory = document.getElementById("subcategory");

// Cargar las opciones de categorías en el select correspondiente
const loadCategory = () => {
    categoria.map(item => {
        selectCategory.innerHTML += `<option value="${item.id}">${item.name}</option>`;
    });
};

loadCategory();

// Cargar subcategorías basadas en la categoría seleccionada
const loadSubCategory = (idCategoria) => {
    let options = `<option value="" disabled selected>Selecciona una subcategoría</option>`;

    // Convertir idCategoria a número porque e.target.value es una cadena
    categoria[Number(idCategoria)].subCategoria.map(item => {
        options += `<option value="${item.id}">${item.name}</option>`;
    });

    selectSubCategory.innerHTML = options;
};

// Evento para manejar el cambio de categoría
selectCategory.addEventListener("change", function (e) {
    const selectedCategoryId = e.target.value;

    // Si no hay selección, restablecer las subcategorías
    if (!selectedCategoryId) {
        selectSubCategory.innerHTML = `<option value="" disabled selected>Selecciona una subcategoría</option>`;
    } else {
        loadSubCategory(selectedCategoryId); // Cargar las subcategorías correspondientes
    }
});

// Validación y envío del formulario
document.getElementById('modelForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = document.getElementById('price').value.trim();
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;
    const imageFile = document.getElementById('inputGroupFile02').files;

    let errors = [];

    // Validaciones de los campos
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
    if (imageFile.length === 0) {
        errors.push("Agrega una imagen al producto.");
    }

    const alertDiv = document.getElementById('alert');
    if (errors.length > 0) {
        alertDiv.innerHTML = errors.join('<br>'); // Mostrar los errores en el div de alerta
        alertDiv.classList.remove('d-none'); // Hacer visible el div de alerta
    } else {
        alertDiv.classList.add('d-none'); // Ocultar el div de alerta si no hay errores

        // Crear el objeto JSON del modelo
        const model = {
            title,
            description,
            price: parseFloat(price),
            category,
            subcategory,
            image: imageFile[0].name // Nombre del archivo de imagen
        };

        console.log("Modelo creado:", JSON.stringify(model)); // Mostrar el objeto JSON en la consola
        alert("Producto agregado correctamente.");
        document.getElementById('modelForm').reset(); // Restablecer el formulario
    }
});