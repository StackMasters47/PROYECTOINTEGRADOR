document.getElementById("Enviar").addEventListener("click",function(event){
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

    if(nombre.value.trim() === ""){
        nombre.classList.add('is-invalid');
        valido=false;
    }else{
        nombre.classList.remove("is-invalid");
        nombre.classList.add('is-valid');
    }
    if(apellido.value === ""){
        apellido.classList.add('is-invalid');
        valido=false;
    }else{
        apellido.classList.remove("is-invalid");
        apellido.classList.add('is-valid');
    }
    if(telefono.value === "" || !regexTelefono.test(telefono.value){
        telefono.classList.add('is-invalid');
        valido=false;
    }else{
        telefono.classList.remove("is-invalid");
        telefono.classList.add('is-valid');
    }
    if(email.value === ""){
        email.classList.add('is-invalid');
        valido=false;
    }else{
        email.classList.remove("is-invalid");
        email.classList.add('is-valid');
    }
    if(!regexEmail.test(email.value)){
        email.classList.add('is-invalid');
        valido=false;
    }else{
        email.classList.remove("is-invalid");
        email.classList.add('is-valid');
    }
    if (asunto.value.trim() === '') {
        asunto.classList.add('is-invalid');
        valido = false;
    }else{
        asunto.classList.remove("is-invalid");
        asunto.classList.add('is-valid');
    }
    if (mensaje.value.trim() === '') {
        mensaje.classList.add('is-invalid');
        valido = false;
    }else{
        mensaje.classList.remove("is-invalid");
        mensaje.classList.add('is-valid');
    }
    


    if(valido){
        // alert("Formulario enviado");
        // form.classList.add('was-validated');
        //Datos de prueba
        const templateParams = {
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value,
            asunto: asunto.value,
            email: email.value,
            mensaje: mensaje.value
        };
        console.log(templateParams);
        emailjs.init('Psm2YGmZjcvgWMnjt')
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
