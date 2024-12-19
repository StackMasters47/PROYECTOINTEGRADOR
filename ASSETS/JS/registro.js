const registro = document.querySelector('#registro');
registro.addEventListener("submit", function (event) {
    event.preventDefault();

    // Inputs del formulario
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");

    // Expresiones regulares
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validar formato de email

    let valido = true;

    // Validación de nombre
    if (nombre.value.trim() === "") {
        nombre.classList.add("is-invalid");
        valido = false;

    } else {
        nombre.classList.remove("is-invalid");
        nombre.classList.add("is-valid");
    }

    // Validación de apellido
    if (apellido.value.trim() === "") {
        apellido.classList.add("is-invalid");
        valido = false;

    } else {
        apellido.classList.remove("is-invalid");
        apellido.classList.add("is-valid");
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


    // Mensaje final si todo es válido
    if (valido) {
        const usuario = {
            name: nombre.value.trim(),
            lastName: apellido.value.trim(),
            email: email.value.trim(),
            password: password1.value.trim()
        }
        const usuarioLocal = {
            email: email.value.trim()
        }
        const url = `http://localhost:8080/api/v1/users/email/${email.value.trim()}`;
        const url1 = `http://localhost:8080/api/v1/new-user`
        

        fetch(url)
            .then((response => {
                if (response.ok) {
                    console.log('Este correo existe en la base de datos');
                    return alert('El correo electrónico ingresado ya tiene una cuenta vinculada');
                } 
                console.log('Este correo no existe en la base de datos');
                fetch(url1, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(usuario)
                })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log('Guardado', data)
                    })
                    .catch(error => {
                        console.error(error);
                    })
                localStorage.setItem('login_success', JSON.stringify(usuarioLocal));
                console.log("Datos del usuario guardados en Local Storage:", usuarioLocal);
                alert('¡Bienvenido! Su cuenta ha sido creada exitosamente');
                window.location.href = '/PAGES/iniciar_sesion.html';
            }))
            .catch(error => {
                console.log('Error al recuperar los datos:', error);
            }) 
    };
});