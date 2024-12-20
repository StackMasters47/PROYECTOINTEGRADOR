const direccion = document.querySelector('#direccion');
direccion.addEventListener("submit", function (event) {
    event.preventDefault();

    // Inputs del formulario
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const calleNumero = document.getElementById("calleNumero");
    const colonia = document.getElementById("colonia");
    const municipio = document.getElementById("municipio");
    const estado = document.getElementById("estado");
    const cp = document.getElementById("cp");
    const termsCheckbox = document.getElementById("gridCheck");
    const alertContainer = document.getElementById("alertContainer");

    // Expresiones regulares
    const telefonoRegex = /^\d{10}$/; // Teléfono de 10 dígitos

    let valido = true;

    //Función para mostrar alertas
    const showAlert = (message, type) => {
        const alert = document.createElement("div");
        alert.className = `alert alert-${type} mt-3`;
        alert.textContent = message;
        alertContainer.appendChild(alert);

        // Eliminar alerta después de 5 segundos
        setTimeout(() => {
            alert.remove();
        }, 5000);
    };

    // Limpiar alertas previas
    alertContainer.innerHTML = "";

    // Validación de nombre
    if (nombre.value.trim() === "") {
        nombre.classList.add("is-invalid");
        valido = false;

    } else {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    }

    // Validación de Teléfono
    if (telefono.value === "" || !telefonoRegex.test(telefono.value)) {
        telefono.classList.add("is-invalid");
        valido = false;

    } else {
        telefono.classList.remove("is-invalid");
        telefono.classList.add("is-valid");
    }

    // Validación de calleNumero
    if (calleNumero.value.trim() === "") {
        calleNumero.classList.add("is-invalid");
        valido = false;

    } else {
        calleNumero.classList.remove("is-invalid");
        calleNumero.classList.add("is-valid");
    }

    // Validación de colonia
    if (colonia.value.trim() === "") {
        colonia.classList.add("is-invalid");
        valido = false;

    } else {
        colonia.classList.remove("is-invalid");
        colonia.classList.add("is-valid");
    }
    
    // Validación de municipio
    if (municipio.value.trim() === "") {
        municipio.classList.add("is-invalid");
        valido = false;

    } else {
        municipio.classList.remove("is-invalid");
        municipio.classList.add("is-valid");
    }

    // Validación de estado
    if (estado.value.trim() === "") {
        estado.classList.add("is-invalid");
        valido = false;

    } else {
        estado.classList.remove("is-invalid");
        estado.classList.add("is-valid");
    }

    // Validación de C. P.
    if (cp.value.trim() === "") {
        cp.classList.add("is-invalid");
        valido = false;

    } else {
        cp.classList.remove("is-invalid");
        cp.classList.add("is-valid");
    }

    // Validación de Checkbox (Términos y condiciones)
    if (!termsCheckbox.checked) {
        termsCheckbox.classList.add("is-invalid");
        valido = false;
        showAlert("Debes aceptar los términos y condiciones.", "danger");
    } else {
        termsCheckbox.classList.remove("is-invalid");
        termsCheckbox.classList.add("is-valid");
    }

    // Mensaje final si todo es válido
    if (valido) {
        const direccion = {
            fullName : nombre.value.trim(),
            telephone : telefono.value.trim(),
            streetAndNumber : calleNumero.value.trim(),
            neighborhood : colonia.value.trim(),
            city : municipio.value.trim(),
            state : estado.value.trim(),
            postalCode : cp.value.trim()
        }

        function guardarDireccion () {
            localStorage.setItem('direcciones', JSON.stringify(direccion));
            alert('Su dirección ha sido registrada exitosamente');
        }
        guardarDireccion();
    }
});

function limpiarForm() {

    // Restablece los valores del formulario
    direccion.reset();

    // Elimina las clases de validación
    direccion.querySelectorAll('.is-invalid, .is-valid').forEach(field => {
        field.classList.remove('is-invalid', 'is-valid');
    });
}