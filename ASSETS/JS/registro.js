const registro = document.querySelector('#registro');
registro.addEventListener("submit", function (event) {
    event.preventDefault();

    // Inputs del formulario
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const termsCheckbox = document.getElementById("gridCheck");
    const alertContainer = document.getElementById("alertContainer");

    // Expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validar formato de email
    const telefonoRegex = /^\d{10}$/; // Teléfono de 10 dígitos

    let valido = true;

    // Función para mostrar alertas
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

    // Validación de Nombre Completo
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

    // Validación de Email
    if (email.value === "" || !emailRegex.test(email.value)) {
        email.classList.add("is-invalid");
        valido = false;

    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }

    // Validación de Contraseñas
    if (password1.value.length < 8) {
        password1.classList.add("is-invalid");
        valido = false;

    } else {
        password1.classList.remove("is-invalid");
        password1.classList.add("is-valid");
    }

    if (password2.value !== password1.value || password2.value === "") {
        password2.classList.add("is-invalid");
        valido = false;

    } else {
        password2.classList.remove("is-invalid");
        password2.classList.add("is-valid");
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
        const Users = JSON.parse(localStorage.getItem('users')) || []; // Para obtener los datos de local storage, y convertirlos de formato JSON a un array de objetos; si no hay datos en local storage, devuelve un array vacio
        const isUserRegistered = Users.find(user => user.email === email.value.trim()); //para consultar si el email proporcionado por el ususario existe dentro de Users

        if (isUserRegistered) { //si se cumple la condición anterior, devulve una alerta de que ya hay una cuenta vinculada con ese correo
            return alert('El correo electrónico ya tiene una cuenta vinculada');
        } else {
            Users.push({ //Añadir objeto con datos del usuario
                nombre: nombre.value.trim(),
                telefono: telefono.value.trim(),
                email: email.value.trim(),
                password: password1.value.trim()
            });

            localStorage.setItem('users', JSON.stringify(Users)); //Guardar los datos en local storage
            console.log("Datos del usuario guardados en Local Storage:", Users);
            alert('Su cuenta ha sido creada exitosamente');
            window.location.href = '/PAGES/iniciar_sesion.html';

        }
    }
});