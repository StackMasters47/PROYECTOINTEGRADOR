document.getElementById("Registrarse").addEventListener("click", function (event) {
    event.preventDefault();

    // Inputs del formulario
    const nombreInput = document.getElementById("nombreInput");
    const telefonoInput = document.getElementById("telefonoInput");
    const emailInput = document.getElementById("inputEmail4");
    const usuarioInput = document.getElementById("usuarioInput");
    const pass1Input = document.getElementById("passInput1");
    const pass2Input = document.getElementById("passInput2");
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
    if (nombreInput.value.trim() === "") {
        nombreInput.classList.add("is-invalid");
        valido = false;
        
    } else {
        nombreInput.classList.remove("is-invalid");
        nombreInput.classList.add("is-valid");
    }

    // Validación de Teléfono
    if (telefonoInput.value === "" || !telefonoRegex.test(telefonoInput.value)) {
        telefonoInput.classList.add("is-invalid");
        valido = false;
        
    } else {    
        telefonoInput.classList.remove("is-invalid");
        telefonoInput.classList.add("is-valid");
    }

    // Validación de Email
    if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
        emailInput.classList.add("is-invalid");
        valido = false;
        
    } else {
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
    }

    // Validación de Nombre de Usuario
    if (usuarioInput.value.trim() === "") {
        usuarioInput.classList.add("is-invalid");
        valido = false;
       
    } else {
        usuarioInput.classList.remove("is-invalid");
        usuarioInput.classList.add("is-valid");
    }

    // Validación de Contraseñas
    if (pass1Input.value.length < 8) {
        pass1Input.classList.add("is-invalid");
        valido = false;
      
    } else {
        pass1Input.classList.remove("is-invalid");
        pass1Input.classList.add("is-valid");
    }

    if (pass2Input.value !== pass1Input.value || pass2Input.value === "") {
        pass2Input.classList.add("is-invalid");
        valido = false;
        
    } else {
        pass2Input.classList.remove("is-invalid");
        pass2Input.classList.add("is-valid");
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
        const usuario = {
            nombreCompleto: nombreInput.value.trim(),
            telefono: telefonoInput.value.trim(),
            email: emailInput.value.trim(),
            nombreUsuario: usuarioInput.value.trim(),
            contraseña: pass1Input.value.trim()
        };

        const jsonUsuario = JSON.stringify(usuario);
        
        // Guardar en Local Storage
        localStorage.setItem("usuario", jsonUsuario);
        console.log("Datos del usuario guardados en Local Storage:", jsonUsuario);

        showAlert("Formulario enviado con éxito. Datos almacenados localmente.", "success");
    }
});