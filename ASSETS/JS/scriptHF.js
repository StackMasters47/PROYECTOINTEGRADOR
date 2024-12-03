// Función para cargar un archivo HTML en un contenedor específico
async function cargarComponente(url, selector) {
  try {
    const response = await fetch(url); // Carga el archivo
    if (!response.ok) throw new Error(`Error al cargar ${url}: ${response.statusText}`);
    
    const contenido = await response.text(); // Obtiene el contenido como texto
    document.querySelector(selector).innerHTML = contenido; // Inserta el contenido en el DOM
  } catch (error) {
    console.error('Error:',error); // Muestra el error en la consola
  }
}

// Cargar header y footer al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
  cargarComponente('/COMPONENTS/header.html', 'header');
  cargarComponente('/COMPONENTS/footer.html', 'footer');
  // cargarComponente('/COMPONENTS/headerBO.html', '#headerBO');
});