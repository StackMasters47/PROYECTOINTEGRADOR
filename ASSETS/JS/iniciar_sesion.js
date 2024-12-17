const iniciarSesion = document.querySelector('#iniciarSesion') //para seleccionar el elemento con id específico, en este caso, el form con id "iniciarSesion"
iniciarSesion.addEventListener("submit", (event) => { //para atender el evento "submit" y ejecutar una función 
    event.preventDefault(); //previene la recarga automática de la página

    //Obtener datos del usuario a traves de las entradas con los ids especificados
    const email = document.querySelector("#email");
    const password = document.querySelector("#password1");
    //const alertContainer = document.getElementById("alertContainer");

    let valido = true;

    if (email.value.trim() === "") {
        email.classList.add("is-invalid");
        valido = false;
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }

    if (password.value.trim() === "") {
        password.classList.add("is-invalid");
        valido = false;
    } else {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
    }

    if(valido) {
        // Para obtener los datos de local storage, y convertirlos de formato JSON a un array de objetos; si no hay datos en local storage, devuelve un array vacio
        const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        // Para validar datos: comparar los datos obtenidos de local storage con los datos ingresados por el usuario; ambos condiciones deben cumplirse para continuar
        const usuarioValido = Usuarios.find(usuario => usuario.email === email.value.trim() && usuario.password === password.value.trim());

        //Si el usuario no es valido, retorna una alerta con este mensaje
        if (!usuarioValido && (email.value.trim() !== adminUser.correo || password.value.trim() !== adminUser.contraseña)) {
            return alert('Usuario y/o contraseña incorrectos');
        }

        if(email.value===adminUser.correo && password.value===adminUser.contraseña){
            window.location.href = '/PAGES/backOffice/formProducts.html'; 
        } else {
            //Si los datos son validos, retorna una alerta con el mensaje y redirige a la página de inicio
            alert(`Bienvenido ${usuarioValido.nombre}`);
            localStorage.setItem('login_success', JSON.stringify(usuarioValido));
            window.location.href = '/index.html'; 
        }
    }
});

const adminUser ={
    correo: "StackMaster",
    contraseña: "Password"
}
