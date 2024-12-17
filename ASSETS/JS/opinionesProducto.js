//
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    // Evita que la página se recargue
    event.preventDefault();
  
    // 1. Sacamos los valores del formulario (nombre, puntuación y comentario)
    const name = document.getElementById("name").value; // Nombre
    const rating = document.getElementById("rating").value; // Puntuación
    const comment = document.getElementById("comment").value; // Comentario
  
    // 2. Creamos una reseña nueva (HTML dinámico)
    const newReview = `
      <div class="border p-3 mb-3">
        <strong>${name}</strong> - <span class="text-muted">Hace un momento</span>
        <div class="rating-stars">${'★'.repeat(rating)}</div>
        <p>${comment}</p>
      </div>
    `;
  
    // 3. Agregamos la nueva reseña al contenedor de reseñas
    document.getElementById("reviews").insertAdjacentHTML("beforeend", newReview);
  
    // 4. Limpiamos el formulario
    document.getElementById("reviewForm").reset();
  });