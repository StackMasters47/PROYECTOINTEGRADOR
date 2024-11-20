// scripts.js
document.getElementById('modelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const price = document.getElementById('price').value.trim();
    const category = document.getElementById('category').value;

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
