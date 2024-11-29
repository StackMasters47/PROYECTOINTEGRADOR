const iniciarSesion = document.querySelector('#iniciarSesion') //para seleccionar el elemento con id específico, en este caso, el form con id "registro"
iniciarSesion.addEventListener('submit', (event) => { //para atender el evento "submit" y ejecutar una función 
    event.preventDefault(); //previene la recarga automática de la página

    //Obtener datos del usuario a traves de las entradas con los ids especificados
    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#pass1Input').value.trim();

    // Para obtener los datos de local storage, y convertirlos de formato JSON a un array de objetos; si no hay datos en local storage, devuelve un array vacio
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    // Para validar datos: comparar los datos obtenidos de local storage con los datos ingresados por el usuario; ambos condiciones deben cumplirse para continuar
    const validUser = Users.find(user => user.email === email && user.password === password);

    //Si el usuario no es valido, retorna una alerta con este mensaje
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos')
    }

    //Si los datos son validos, retorna una alerta con el mensaje y redirige a la página de inicio
    alert(`Bienvenido ${validUser.name}`)
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'index.html'   

});
