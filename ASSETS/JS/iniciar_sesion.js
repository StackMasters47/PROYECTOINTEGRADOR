const iniciarSesion = document.querySelector('#iniciarSesion')
iniciarSesion.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password1");

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

    if (valido) {
        const url = `http://3.14.129.170/api/v1/users/email/${email.value.trim()}`
        const adminUser = {
            correo: "stackMaster@gmail.com",
            contrasena: "Password"
        }
        const usuarioLocal = {
            email: email.value.trim()
        }
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log('Este correo no tiene una cuenta vinculada');
                    return alert('Este correo no tiene una cuenta vinculada');
                }
                return response.json();
            })
            .then(data => {
                const nombre = data.name;
                const email1 = data.email;
                const password1 = data.password;
                console.log(`Email: ${email1}`)

                if (email.value.trim() === email1 && password.value.trim() !== password1) {
                    console.log('La contraseña es incorrecta');
                    return alert('La contraseña es incorrecta, inténtalo de nuevo');
                } else if (email1 === adminUser.correo && password1 === adminUser.contrasena) {
                    alert(`¡Bienvenid@, Administrador(a)!`);
                    window.location.href = '/PAGES/backOffice/formProducts.html';
                } else if (email.value.trim() === email1 && password.value.trim() === password1) {
                    alert(`¡Bienvenid@, ${nombre}!`);
                    localStorage.setItem('login_success', JSON.stringify(usuarioLocal));
                    window.location.href = '/index.html';
                }
            })
            .catch(error => {
                console.log('Error al recuperar los datos:', error);
            })
    }
});
