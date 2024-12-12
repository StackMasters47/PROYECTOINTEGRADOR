let navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;

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
                if (link.href.includes("paginaProductos.html")) {
                    
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }, 100); 
}
paginaActiva();