// Función para cargar el header desde la carpeta Header
function cargarHeader() {
   fetch('../Header/header.html') // Ruta relativa al archivo del header
       .then(response => {
           if (!response.ok) {
               throw new Error(`Error al cargar el header: ${response.statusText}`);
           }
           return response.text();
       })
       .then(data => {
           document.getElementById('header').innerHTML = data; // Inserta el header en el div
       })
       .catch(error => console.error(error));
}

// Ejecuta la función al cargar la página
window.onload = cargarHeader;