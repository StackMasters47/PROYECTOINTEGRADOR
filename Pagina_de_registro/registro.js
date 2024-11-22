// document.getElementById("Registrarse").addEventListener("click", function (event) {
//     event.preventDefault();
//     const nombreInput = document.getElementById("nombreInput");
//     const telefonoInput = document.getElementById("telefonoInput");
//     const emailInput = document.getElementById("inputEmail4");
//     const pass1Input = document.getElementById("passInput1");
//     const pass2Input = document.getElementById("passInput2");
//     const registerButton = document.querySelector("button");

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const telefonoRegex = /^\d{10}$/;

//     let valido = true;

//     if (nombreInput.value.trim() === "") {
//         nombreInput.classList.add('is-invalid');
//         valido = false;
//     } else {
//         nombreInput.classList.remove("is-invalid");
//         nombreInput.classList.add('is-valid');
//     }
//     if (telefonoInput.value === "" || !regexTelefono.test(telefonoInput.value)) {
//         telefonoInput.classList.add('is-invalid');
//         valido = false;
//     } else {
//         telefonoInput.classList.remove("is-invalid");
//         telefonoInput.classList.add('is-valid');
//     }
//     if (emailInput.value === "") {
//         emailInput.classList.add('is-invalid');
//         valido = false;
//     } else {
//         emailInput.classList.remove("is-invalid");
//         emailInput.classList.add('is-valid');
//     }
//     if (!regexEmail.test(emailInput.value)) {
//         emailInput.classList.add('is-invalid');
//         valido = false;
//     } else {
//         emailInput.classList.remove("is-invalid");
//         emailInput.classList.add('is-valid');
//     }
//     if (pass1Input.value === "") {
        
//     }
// });
//     const validateField = (input, condition, message) => {
//         const feedback = input.nextElementSibling;
//         if (!condition) {
//             feedback.textContent = message;
//             feedback.className = "form-text text-danger";
//             return false;
//         } else {
//             feedback.textContent = "Campo válido.";
//             feedback.className = "form-text text-success";
//             return true;
//         }
//     };

//     nombreInput.addEventListener("input", () => {
//         validateField(nombreInput, nombreInput.value.trim() !== "", "El nombre no puede estar vacío.");
//     });

//     telefonoInput.addEventListener("input", () => {
//         validateField(telefonoInput, telefonoRegex.test(telefonoInput.value.trim()), "Debe tener 10 dígitos.");
//     });

//     emailInput.addEventListener("input", () => {
//         validateField(emailInput, emailRegex.test(emailInput.value.trim()), "Correo inválido.");
//     });

//     pass1Input.addEventListener("input", () => {
//         validateField(pass1Input, pass1Input.value.trim().length >= 8, "Debe tener al menos 8 caracteres.");
//     });

//     pass2Input.addEventListener("input", () => {
//         validateField(pass2Input, pass2Input.value.trim() === pass1Input.value.trim(), "Las contraseñas no coinciden.");
//     });

//     const validateForm = () => {
//         const isValid =
//             nombreInput.value.trim() &&
//             telefonoRegex.test(telefonoInput.value.trim()) &&
//             emailRegex.test(emailInput.value.trim()) &&
//             pass1Input.value.trim().length >= 8 &&
//             pass1Input.value.trim() === pass2Input.value.trim();

//         registerButton.disabled = !isValid;
//     };

//     [nombreInput, telefonoInput, emailInput, pass1Input, pass2Input].forEach((input) => {
//         input.addEventListener("input", validateForm);
//     });

//     registerButton.disabled = true;
// });
// document.getElementById("Registrarse").addEventListener("click", function (event) {
//     event.preventDefault();

//     // Inputs del formulario
//     const nombreInput = document.getElementById("nombreInput");
//     const telefonoInput = document.getElementById("telefonoInput");
//     const emailInput = document.getElementById("inputEmail4");
//     const usuarioInput = document.getElementById("usuarioInput");
//     const pass1Input = document.getElementById("passInput1");
//     const pass2Input = document.getElementById("passInput2");
//     const termsCheckbox = document.getElementById("gridCheck");

//     // Expresiones regulares
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validar formato de email
//     const telefonoRegex = /^\d{10}$/; // Teléfono de 10 dígitos

//     let valido = true;

//     // Validación de Nombre Completo
//     if (nombreInput.value.trim() === "") {
//         nombreInput.classList.add("is-invalid");
//         valido = false;
//     } else {
//         nombreInput.classList.remove("is-invalid");
//         nombreInput.classList.add("is-valid");
//     }

//     // Validación de Teléfono
//     if (telefonoInput.value === "" || !telefonoRegex.test(telefonoInput.value)) {
//         telefonoInput.classList.add("is-invalid");
//         valido = false;
//     } else {
//         telefonoInput.classList.remove("is-invalid");
//         telefonoInput.classList.add("is-valid");
//     }

//     // Validación de Email
//     if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
//         emailInput.classList.add("is-invalid");
//         valido = false;
//     } else {
//         emailInput.classList.remove("is-invalid");
//         emailInput.classList.add("is-valid");
//     }

//     // Validación de Nombre de Usuario
//     if (usuarioInput.value.trim() === "") {
//         usuarioInput.classList.add("is-invalid");
//         valido = false;
//     } else {
//         usuarioInput.classList.remove("is-invalid");
//         usuarioInput.classList.add("is-valid");
//     }

//     // Validación de Contraseñas
//     if (pass1Input.value.length < 8) {
//         pass1Input.classList.add("is-invalid");
//         valido = false;
//     } else {
//         pass1Input.classList.remove("is-invalid");
//         pass1Input.classList.add("is-valid");
//     }

//     if (pass2Input.value !== pass1Input.value || pass2Input.value === "") {
//         pass2Input.classList.add("is-invalid");
//         valido = false;
//     } else {
//         pass2Input.classList.remove("is-invalid");
//         pass2Input.classList.add("is-valid");
//     }

//     // Validación de Checkbox (Términos y condiciones)
//     if (!termsCheckbox.checked) {
//         termsCheckbox.classList.add("is-invalid");
//         valido = false;
//     } else {
//         termsCheckbox.classList.remove("is-invalid");
//         termsCheckbox.classList.add("is-valid");
//     }

//     // Mensaje final
//     if (valido) {
//         alert("Formulario enviado con éxito.");
//         // Aquí puedes procesar los datos o enviar la información al servidor.
//     } else {
//         alert("Por favor, revisa los campos marcados en rojo.");
//     }
// });
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
        showAlert("El campo 'Nombre Completo' es obligatorio.", "danger");
    } else {
        nombreInput.classList.remove("is-invalid");
        nombreInput.classList.add("is-valid");
    }

    // Validación de Teléfono
    if (telefonoInput.value === "" || !telefonoRegex.test(telefonoInput.value)) {
        telefonoInput.classList.add("is-invalid");
        valido = false;
        showAlert("El número de teléfono debe contener exactamente 10 dígitos.", "danger");
    } else {
        telefonoInput.classList.remove("is-invalid");
        telefonoInput.classList.add("is-valid");
    }

    // Validación de Email
    if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
        emailInput.classList.add("is-invalid");
        valido = false;
        showAlert("Por favor, introduce un email válido.", "danger");
    } else {
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
    }

    // Validación de Nombre de Usuario
    if (usuarioInput.value.trim() === "") {
        usuarioInput.classList.add("is-invalid");
        valido = false;
        showAlert("El campo 'Nombre de Usuario' es obligatorio.", "danger");
    } else {
        usuarioInput.classList.remove("is-invalid");
        usuarioInput.classList.add("is-valid");
    }

    // Validación de Contraseñas
    if (pass1Input.value.length < 8) {
        pass1Input.classList.add("is-invalid");
        valido = false;
        showAlert("La contraseña debe tener al menos 8 caracteres.", "danger");
    } else {
        pass1Input.classList.remove("is-invalid");
        pass1Input.classList.add("is-valid");
    }

    if (pass2Input.value !== pass1Input.value || pass2Input.value === "") {
        pass2Input.classList.add("is-invalid");
        valido = false;
        showAlert("Las contraseñas no coinciden.", "danger");
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
        showAlert("Formulario enviado con éxito. ¡Bienvenido/a!", "success");
        // Aquí puedes procesar los datos o enviar la información al servidor.
    }
});
