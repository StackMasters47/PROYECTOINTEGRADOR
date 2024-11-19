document.getElementById("Enviar").addEventListener("click",function(){
    const nombre = document.getElementById("nameInput").trim();
    const apelido = document.getElementById("lastNameInput").trim();
    const email = document.querySelector("emailInput").value.trim();
    const telefono = document.getElementById("subjectInput").value.trim();
    const mensaje = document.getElementById("messageInput").value.trim();
    
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^\d{10}$/;

    let valido = true;

    if(nombre === ""){
        alert("Por favor, ingresa tu nombre.");
        nombre.focus();
        valido=false;
    }
    if(apellido === ""){
        alert("Por favor, ingresa tu apellido.");
        apelido.focus();
        valido=false;
    }
    if(email === ""){
        alert("Añade tu email")
        email.focus();
        valido=false;
    }
    if(!regexEmail.test(email.value)){
        alert("Por favor, ingresa una dirección de correo electrónico válida.")
        email.focus();
        valido=false;
    }
    if(telefono !== '' && !regexTelefono.test(telefono)){
        alert('Por favor, ingresa un asunto válido.');
        telefono.focus();
        valido = false;
    }    
    if (mensaje.value.trim() === '') {
        alert('Por favor, escribe tu mensaje.');
        mensaje.focus();
        valido = false;
    }

    if(valido){
        alert("Formulario enviado");
        //Datos de prueba
        const templateParams = {
            nombre: "Irving",
            apellido: "Morales",
            asunto: "ASUNTO",
            email: "jesusrafaeljt23@gmail.com",
            mensaje: "Mensaje de prueba"
        };
        emailjs.init('gdqTyXuttHmlg-Yl5')
        emailjs.send("service_1y4sfmj", "template_ykv4kti", templateParams)
            .then(function(response) {
                alert("Formulario enviado exitosamente.");
                // document.getElementById("miFormulario").reset();
            }, function(error) {
                alert("Ocurrió un error al enviar el formulario, por favor intenta de nuevo.");
                console.error("Error:", error);
            });
    }
});