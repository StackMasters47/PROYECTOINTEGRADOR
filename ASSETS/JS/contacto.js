document.getElementById("Enviar").addEventListener("click", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nameInput");//.value.trim()
    const apellido = document.getElementById("lastNameInput");//.value.trim()
    const telefono = document.getElementById("TelefonoInput");
    const email = document.getElementById("emailInput");//.value.trim()
    const asunto = document.getElementById("subjectInput");//.value.trim()
    const mensaje = document.getElementById("messageInput");//.value.trim()

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^\d{10}$/;

    let valido = true;


    if (nombre.value.trim() === "") {
        nombre.classList.add('is-invalid');
        valido = false;
    } else {
        nombre.classList.remove("is-invalid");
        nombre.classList.add('is-valid');
    }
    if (apellido.value === "") {
        apellido.classList.add('is-invalid');
        valido = false;
    } else {
        apellido.classList.remove("is-invalid");
        apellido.classList.add('is-valid');
    }
    if (telefono.value === "" || !regexTelefono.test(telefono.value)) {
        telefono.classList.add('is-invalid');
        valido = false;
    } else {
        telefono.classList.remove("is-invalid");
        telefono.classList.add('is-valid');
    }
    if (email.value === "") {
        email.classList.add('is-invalid');
        valido = false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add('is-valid');
    }
    if (!regexEmail.test(email.value)) {
        email.classList.add('is-invalid');
        valido = false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add('is-valid');
    }
    if (asunto.value.trim() === '') {
        asunto.classList.add('is-invalid');
        valido = false;
    } else {
        asunto.classList.remove("is-invalid");
        asunto.classList.add('is-valid');
    }
    if (mensaje.value.trim() === '') {
        mensaje.classList.add('is-invalid');
        valido = false;
    } else {
        mensaje.classList.remove("is-invalid");
        mensaje.classList.add('is-valid');
    }



    if (valido) {
        const templateParams = {
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value,
            asunto: asunto.value,
            email: email.value,
            mensaje: mensaje.value
        };
        
        //Inicializa el servicio de correo.
        emailjs.init('Psm2YGmZjcvgWMnjt')
        emailjs.send("service_1y4sfmj", "template_ykv4kti", templateParams)
            .then(function (response) {
                mostrarAlerta('Formulario enviado exitosamente.', 'success');
                limpiarFormulario();
            }, function (error) {
                alert("Ocurrió un error al enviar el formulario, por favor intenta de nuevo.");
                console.error("Error:", error);
            });
    }else{
        mostrarAlerta("Completa los campos correctamente", "danger"); 
    }
});

function limpiarFormulario() {
    const formulario = document.getElementById('formulario');

    // Restablece los valores del formulario
    formulario.reset();

    // Elimina las clases de validación
    formulario.querySelectorAll('.is-invalid, .is-valid').forEach(field => {
        field.classList.remove('is-invalid', 'is-valid');
    });
}

// Función para mostrar alertas 
function mostrarAlerta(mensaje, tipo) {
    const alerta = document.getElementById('alertaFormulario');
    alerta.className = `alert alert-${tipo} show`; 
    alerta.textContent = mensaje;

    setTimeout(() => {
        alerta.className = 'alert d-none';
        alerta.textContent = '';
    }, 3000);
}