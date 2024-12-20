function cerrarSesion() {
    //Remover la informasión de sesión en Local Storage
    localStorage.removeItem('login_success');
    //Redirigir a la página de inicio
    window.location.href = '/index.html';
}

function obtenerDirecciones() {
    const usuarioActivo = JSON.parse(localStorage.getItem('login_succes')) || [];
    console.log(usuarioActivo);
}
obtenerDirecciones();
document.getElementById("cerrarSesion").addEventListener('click', cerrarSesion);

