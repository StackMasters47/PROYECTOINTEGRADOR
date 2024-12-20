function flipCard(card) {
  card.classList.toggle('is-flipped');
}
let navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;


document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loadingScreen");

    // Agregar una transición de opacidad para desaparecer la pantalla de carga
    setTimeout(() => {
        loadingScreen.style.transition = "opacity 0.5s ease-out"; //Transición suave
        loadingScreen.style.opacity = "0"; //Hacer que desaparezca

        //Esperar a que termine la transición  antes de eliminarlo
        setTimeout(() => {
            loadingScreen.remove(); // Eliminar el elemento del DOM
        }, 0); 
    }, 1000); 
});

// Función asíncrona para esperar a que navLinks tenga datos
async function paginaActiva() {
    if (navLinks.length > 0) {
    return;
    }
  // Si no tiene datos, crea un intervalo para verificar
    let intervalId = setInterval(() => {
        navLinks = document.querySelectorAll('.nav-link');
        if (navLinks.length > 0) {
            clearInterval(intervalId);
            // console.log('navLinks tiene datos:', navLinks);
            navLinks.forEach(link => {
                // console.log(link.href)
                if (link.href.includes("nosotros.html")) {
                    
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }, 100); 
}
paginaActiva();